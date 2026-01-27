import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import configPromise from '@payload-config'
import { Heart } from 'lucide-react'
import { getPayload } from 'payload'

export async function BestsellersSection() {
  try {
    const payload = await getPayload({ config: configPromise })

    const products = await payload.find({
      collection: 'products',
      limit: 4,
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    if (!products.docs || products.docs.length === 0) {
      return null
    }

    const badges = ['Bestseller', 'Handmade Favorite', 'Eco-Friendly Yarn', 'Bestseller']
    const badgeColors = ['bg-green-500', 'bg-pink-500', 'bg-green-600', 'bg-green-500']

    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
              Bestsellers & New Arrivals
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our most loved pieces and latest creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.docs.map((product, index) => {
              const image =
                typeof product.gallery?.[0]?.image === 'object' ? product.gallery[0].image : null

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    {image && (
                      <Media
                        resource={image}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    {/* Badge */}
                    <div
                      className={`absolute top-4 left-4 ${badgeColors[index]} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {badges[index]}
                    </div>

                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      {product.priceInUSD && (
                        <Price
                          amount={product.priceInUSD}
                          className="text-2xl font-bold text-gray-900"
                        />
                      )}

                      {/* Color Options */}
                      <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow-sm"></div>
                        <div className="w-4 h-4 rounded-full bg-orange-400 border-2 border-white shadow-sm"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-white shadow-sm"></div>
                      </div>
                    </div>

                    <button className="w-full bg-gold text-white py-3 rounded-full font-semibold hover:bg-gold-dark transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-gold"></button>
            <button className="w-3 h-3 rounded-full bg-white/50"></button>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading bestsellers:', error)
    return null
  }
}
