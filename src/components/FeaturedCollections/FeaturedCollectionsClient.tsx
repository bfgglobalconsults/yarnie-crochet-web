'use client'

import type { FeaturedCollection } from '@/payload-types'
import Link from 'next/link'

interface FeaturedCollectionsClientProps {
  collections: FeaturedCollection[]
}

export function FeaturedCollectionsClient({ collections }: FeaturedCollectionsClientProps) {
  if (!collections || collections.length === 0) {
    return null
  }

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Featured Collections
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our carefully curated collections, each piece crafted with love and attention
            to detail
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => {
            const imageUrl =
              typeof collection.image === 'object' && collection.image?.url
                ? collection.image.url
                : '/assets/placeholder-collection.jpg'

            return (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                    }}
                  />

                  {/* Item Count Badge */}
                  {collection.itemCount && (
                    <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                      {collection.itemCount} items
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-gold">
                    {collection.title}
                  </h3>
                  {collection.description && (
                    <p className="text-sm text-gray-600">{collection.description}</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/collections"
            className="inline-block rounded-full bg-gold px-8 py-4 font-medium text-white transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  )
}
