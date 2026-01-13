import { Media } from '@/components/Media'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

export async function FeaturedCollectionsHome() {
  try {
    const payload = await getPayload({ config: configPromise })

    const featuredCollections = await payload.find({
      collection: 'featuredCollections',
      limit: 4,
      where: {
        featured: {
          equals: true,
        },
        status: {
          equals: 'active',
        },
      },
      sort: 'featuredOrder',
    })

    if (!featuredCollections.docs || featuredCollections.docs.length === 0) {
      return null
    }

    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
              Featured Collections
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our carefully curated collections, each piece crafted with love and attention
              to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredCollections.docs.map((collection) => {
              const itemCount = Math.floor(Math.random() * 20) + 10 // Random count for demo

              return (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    {typeof collection.image === 'object' && collection.image && (
                      <Media
                        resource={collection.image}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {/* Item Count Badge */}
                    <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                      {itemCount} items
                    </div>
                  </div>

                  {/* Collection Info */}
                  <div className="p-6 text-center bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.title}</h3>
                    <p className="text-gray-600 text-sm">{collection.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/collections"
              className="inline-block bg-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-colors shadow-lg"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading featured collections:', error)
    return null
  }
}
