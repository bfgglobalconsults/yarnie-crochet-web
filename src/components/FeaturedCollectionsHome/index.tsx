import { Media } from '@/components/Media'
import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'

export async function FeaturedCollectionsHome() {
  // Placeholder collections to show when no admin collections are available
  const placeholderCollections = [
    {
      id: 1,
      title: 'Everyday Comforts',
      description: 'Blankets, pillows & cozy essentials',
      image: '/assets/crochet1.jfif',
      itemCount: 12,
      slug: 'everyday-comforts',
    },
    {
      id: 2,
      title: 'Wearable Art',
      description: 'Sweaters, scarves & stylish bags',
      image: '/assets/crochet2.webp',
      itemCount: 18,
      slug: 'wearable-art',
    },
    {
      id: 3,
      title: 'Home & Decor',
      description: 'Baskets, plant hangers & coasters',
      image: '/assets/crochet3.jfif',
      itemCount: 15,
      slug: 'home-decor',
    },
    {
      id: 4,
      title: 'Custom Gifts',
      description: 'Baby sets, wedding gifts & keepsakes',
      image: '/assets/crochet1.jfif',
      itemCount: 25,
      slug: 'custom-gifts',
    },
  ]

  try {
    const payload = await getPayload({ config: configPromise })

    const featuredCollections = await payload.find({
      collection: 'featuredCollections',
      limit: 4,
      where: {
        status: {
          equals: 'active',
        },
      },
      sort: '-featuredOrder',
    })

    console.log('Featured collections found:', featuredCollections.docs.length)

    // Use admin collections if available, otherwise use placeholders
    const hasCollections = featuredCollections.docs && featuredCollections.docs.length > 0
    const collectionsToShow = hasCollections ? featuredCollections.docs : placeholderCollections

    return (
      <section className="py-16 bg-white text-black">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Featured Collections</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our carefully curated collections, each piece crafted with love and attention
              to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {collectionsToShow.map((collection, index) => {
              const itemCount = collection.itemCount || (index + 1) * 12 // Use actual count or predictable fallback
              const isPlaceholder = !hasCollections

              return (
                <Link
                  key={collection.id}
                  href={isPlaceholder ? '/shop' : `/collections/${collection.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    {isPlaceholder ? (
                      <Image
                        src={collection.image as string}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      typeof collection.image === 'object' &&
                      collection.image && (
                        <Media
                          resource={collection.image}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                      )
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
    // Show placeholders on error as well
    return (
      <section className="py-16 bg-white text-black">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our carefully curated collections, each piece crafted with love and attention
              to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {placeholderCollections.map((collection) => (
              <Link
                key={collection.id}
                href="/shop"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Item Count Badge */}
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {collection.itemCount} items
                  </div>
                </div>

                {/* Collection Info */}
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.title}</h3>
                  <p className="text-gray-600 text-sm">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/collections"
              className="inline-block bg-[] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-colors shadow-lg"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>
    )
  }
}
