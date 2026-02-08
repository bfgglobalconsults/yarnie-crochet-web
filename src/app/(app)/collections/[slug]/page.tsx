import { Media } from '@/components/Media'
import configPromise from '@payload-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const collections = await payload.find({
    collection: 'collections',
    where: {
      status: {
        equals: 'active',
      },
    },
    pagination: false,
  })

  return collections.docs.map((collection) => ({
    slug: collection.slug,
  }))
}

export default async function CollectionPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  // Get the collection
  const collectionResult = await payload.find({
    collection: 'collections',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'active',
          },
        },
      ],
    },
    limit: 1,
  })

  const collection = collectionResult.docs[0]
  if (!collection) {
    return notFound()
  }

  // Get all collections for filter tabs
  const allCollections = await payload.find({
    collection: 'collections',
    where: {
      status: {
        equals: 'active',
      },
    },
    sort: 'order',
  })

  // Get products in this collection
  const products = await payload.find({
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
      ],
    },
    limit: 50,
  })

  // const collectionImage = typeof collection.image === 'object' ? collection.image : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-linear-to-r from-gold/20 to-cream flex items-center justify-center">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">{collection.title}</h1>
          {collection.description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{collection.description}</p>
          )}
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b">
        <div className="container py-6">
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/collections"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              All
            </Link>
            {allCollections.docs.map((col) => (
              <Link
                key={col.id}
                href={`/collections/${col.slug}`}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  col.id === collection.id
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {col.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cream">
        <div className="container">
          {products.docs.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No products found</h3>
              <p className="text-gray-600 mb-8">
                We don&apos;t have any products in this collection yet. Check back soon!
              </p>
              <Link
                href="/collections"
                className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold-dark transition-colors"
              >
                Browse All Collections
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Showing {products.docs.length} product{products.docs.length !== 1 ? 's' : ''} in{' '}
                  <strong>{collection.title}</strong>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.docs.map((product) => {
                  const image =
                    typeof product.gallery?.[0]?.image === 'object'
                      ? product.gallery[0].image
                      : null

                  return (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                      <div className="aspect-square relative overflow-hidden bg-gray-100">
                        {image && (
                          <Media
                            resource={image}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          <span className="bg-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                            -20% OFF
                          </span>
                          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                            Bestseller
                          </span>
                        </div>
                        {/* Wishlist & Quick View */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                            ♡
                          </button>
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                            👁
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.title}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex text-gold">
                            {'★★★★★'.split('').map((star, i) => (
                              <span key={i}>{star}</span>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">(24 reviews)</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          {product.priceInUSD && (
                            <>
                              <span className="text-2xl font-bold text-gray-900">
                                ${(product.priceInUSD / 100).toFixed(2)}
                              </span>
                              <span className="text-lg text-gray-400 line-through">
                                ${((product.priceInUSD / 100) * 1.25).toFixed(2)}
                              </span>
                            </>
                          )}
                        </div>
                        <button className="w-full bg-gold text-white py-2 rounded-full font-medium hover:bg-gold-dark transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive
            offers, and special promotions!
          </p>
          <Link
            href="/custom-orders"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold-dark transition-colors"
          >
            Request Custom Order
          </Link>
        </div>
      </section>
    </div>
  )
}
