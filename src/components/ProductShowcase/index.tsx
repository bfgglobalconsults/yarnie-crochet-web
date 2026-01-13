import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

interface ProductShowcaseProps {
  title: string
  description?: string
  filter?: 'bestsellers' | 'preorders' | 'new'
  limit?: number
}

export async function ProductShowcase({
  title,
  description,
  filter,
  limit = 4,
}: ProductShowcaseProps) {
  const payload = await getPayload({ config: configPromise })

  const products = await payload.find({
    collection: 'products',
    limit,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  if (!products.docs || products.docs.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.docs.map((product) => {
            const image =
              typeof product.gallery?.[0]?.image === 'object' ? product.gallery[0].image : null

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
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.title}</h3>
                  {product.priceInUSD && (
                    <Price amount={product.priceInUSD} className="text-gold font-bold text-xl" />
                  )}
                  <button className="mt-4 w-full bg-gold text-white py-2 rounded-full font-medium hover:bg-gold-dark transition-colors">
                    View Details
                  </button>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold-dark transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
