import type { Media, Product } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Breadcrumb, type BreadcrumbItem } from '@/components/Breadcrumb'
import { GridTileImage } from '@/components/Grid/tile'
import { Gallery } from '@/components/product/Gallery'
import { ProductDescription } from '@/components/product/ProductDescription'
import { Button } from '@/components/ui/button'
import configPromise from '@payload-config'
import { ChevronLeftIcon } from 'lucide-react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React, { Suspense } from 'react'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const product = await queryProductBySlug({ slug })

  if (!product) return notFound()

  const gallery = product.gallery?.filter((item) => typeof item.image === 'object') || []

  const metaImage = typeof product.meta?.image === 'object' ? product.meta?.image : undefined
  const canIndex = product._status === 'published'

  const seoImage = metaImage || (gallery.length ? (gallery[0]?.image as Media) : undefined)

  return {
    description: product.meta?.description || '',
    openGraph: seoImage?.url
      ? {
          images: [
            {
              alt: seoImage?.alt,
              height: seoImage.height!,
              url: seoImage?.url,
              width: seoImage.width!,
            },
          ],
        }
      : null,
    robots: {
      follow: canIndex,
      googleBot: {
        follow: canIndex,
        index: canIndex,
      },
      index: canIndex,
    },
    title: product.meta?.title || product.title,
  }
}

export default async function ProductPage({ params }: Args) {
  const { slug } = await params
  const product = await queryProductBySlug({ slug })

  if (!product) return notFound()

  const gallery =
    product.gallery
      ?.filter((item) => typeof item.image === 'object')
      .map((item) => ({
        ...item,
        image: item.image as Media,
      })) || []

  const metaImage = typeof product.meta?.image === 'object' ? product.meta?.image : undefined
  const hasStock = product.enableVariants
    ? product?.variants?.docs?.some((variant) => {
        if (typeof variant !== 'object') return false
        return variant.inventory && variant?.inventory > 0
      })
    : product.inventory! > 0

  let price = product.priceInUSD

  if (product.enableVariants && product?.variants?.docs?.length) {
    price = product?.variants?.docs?.reduce((acc, variant) => {
      if (typeof variant === 'object' && variant?.priceInUSD && acc && variant?.priceInUSD > acc) {
        return variant.priceInUSD
      }
      return acc
    }, price)
  }

  const productJsonLd = {
    name: product.title,
    '@context': 'https://schema.org',
    '@type': 'Product',
    description: product.description,
    image: metaImage?.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: hasStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      price: price,
      priceCurrency: 'usd',
    },
  }

  const relatedProducts =
    product.relatedProducts?.filter((relatedProduct) => typeof relatedProduct === 'object') ?? []

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
  ]

  // Add collection breadcrumb if product has collections
  const productCollections = product.collections?.filter(
    (collection) => typeof collection === 'object',
  )
  if (productCollections && productCollections.length > 0) {
    const firstCollection = productCollections[0]
    if (typeof firstCollection === 'object') {
      breadcrumbItems.push({
        label: firstCollection.title,
        href: `/collections/${firstCollection.slug}`,
      })
    }
  }

  // Add current product
  breadcrumbItems.push({ label: product.title })

  return (
    <React.Fragment>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
        type="application/ld+json"
      />
      <div className="container pt-8 pb-8">
        <Breadcrumb items={breadcrumbItems} />
        <Button asChild variant="ghost" className="mb-4">
          <Link
            href={
              productCollections &&
              productCollections.length > 0 &&
              typeof productCollections[0] === 'object'
                ? `/collections/${productCollections[0].slug}`
                : '/shop'
            }
          >
            <ChevronLeftIcon />
            {productCollections &&
            productCollections.length > 0 &&
            typeof productCollections[0] === 'object'
              ? `Back to ${productCollections[0].title}`
              : 'All products'}
          </Link>
        </Button>
        <div className="flex flex-col gap-12 rounded-lg border p-8 md:py-12 lg:flex-row lg:gap-8 bg-primary-foreground">
          <div className="h-full w-full basis-full lg:basis-1/2">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              {Boolean(gallery?.length) && <Gallery gallery={gallery} />}
            </Suspense>
          </div>

          <div className="basis-full lg:basis-1/2">
            <ProductDescription product={product} />
          </div>
        </div>
      </div>

      {product.layout?.length ? <RenderBlocks blocks={product.layout} /> : <></>}

      {relatedProducts.length ? (
        <div className="container">
          <RelatedProducts products={relatedProducts as Product[]} />
        </div>
      ) : (
        <></>
      )}

      {/* Products from same collection */}
      {productCollections && productCollections.length > 0 && (
        <div className="container">
          <SameCollectionProducts
            product={product}
            collection={productCollections[0] as { id: string; title: string; slug: string }}
          />
        </div>
      )}
    </React.Fragment>
  )
}

function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {products.map((product) => (
          <li
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            key={product.id}
          >
            <Link className="relative h-full w-full" href={`/products/${product.slug}`}>
              <GridTileImage
                label={{
                  amount: product.priceInUSD!,
                  title: product.title,
                }}
                media={product.meta?.image as Media}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

async function SameCollectionProducts({
  product,
  collection,
}: {
  product: Product
  collection: { id: string; title: string; slug: string }
}) {
  const payload = await getPayload({ config: configPromise })

  // Get other products from the same collection
  const sameCollectionProducts = await payload.find({
    collection: 'products',
    where: {
      and: [
        {
          _status: {
            equals: 'published',
          },
        },
        {
          collections: {
            contains: collection.id,
          },
        },
        {
          id: {
            not_equals: product.id,
          },
        },
      ],
    },
    limit: 4,
  })

  if (!sameCollectionProducts.docs.length) return null

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">You may also like</h2>
        <Link
          href={`/collections/${collection.slug}`}
          className="text-gold hover:text-gold-dark transition-colors font-medium"
        >
          View all in {collection.title} →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sameCollectionProducts.docs.map((relatedProduct) => {
          const image =
            typeof relatedProduct.gallery?.[0]?.image === 'object'
              ? relatedProduct.gallery[0].image
              : null

          return (
            <Link
              key={relatedProduct.id}
              href={`/products/${relatedProduct.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                {image && (
                  <GridTileImage
                    label={{
                      amount: relatedProduct.priceInUSD!,
                      title: relatedProduct.title,
                    }}
                    media={image}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{relatedProduct.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-gold">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(24 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  {relatedProduct.priceInUSD && (
                    <span className="text-xl font-bold text-gray-900">
                      ${(relatedProduct.priceInUSD / 100).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const queryProductBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    depth: 3,
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        ...(draft ? [] : [{ _status: { equals: 'published' } }]),
      ],
    },
    populate: {
      variants: {
        title: true,
        priceInUSD: true,
        inventory: true,
        options: true,
      },
      collections: {
        title: true,
        slug: true,
      },
    },
  })

  return result.docs?.[0] || null
}
