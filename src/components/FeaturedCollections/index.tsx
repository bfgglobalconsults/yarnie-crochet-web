import { Media } from '@/components/Media'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

export async function FeaturedCollections() {
  const payload = await getPayload({ config: configPromise })

  const collections = await payload.find({
    collection: 'featuredCollections',
    limit: 4,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  if (!collections.docs || collections.docs.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of handmade crochet pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.docs.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square relative overflow-hidden">
                {typeof collection.image === 'object' && collection.image && (
                  <Media
                    resource={collection.image}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-1">{collection.title}</h3>
                {collection.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">{collection.description}</p>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-white font-medium">View Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
