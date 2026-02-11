import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function DebugPage() {
  const payload = await getPayload({ config: configPromise })

  // Get all collections
  const collections = await payload.find({
    collection: 'collections',
    limit: 100,
  })

  // Get all featured collections
  const featuredCollections = await payload.find({
    collection: 'featuredCollections',
    limit: 100,
  })

  // Get all products
  const products = await payload.find({
    collection: 'products',
    limit: 100,
  })

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Database Debug Info</h1>

      <div className="space-y-8">
        {/* Collections */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Collections ({collections.docs.length})</h2>
          {collections.docs.length === 0 ? (
            <p className="text-gray-600">No collections found</p>
          ) : (
            <div className="space-y-4">
              {collections.docs.map((collection) => (
                <div key={collection.id} className="border-l-4 border-gold pl-4">
                  <h3 className="font-bold">{collection.title}</h3>
                  <p className="text-sm text-gray-600">Slug: {collection.slug}</p>
                  <p className="text-sm text-gray-600">Status: {collection.status}</p>
                  <p className="text-sm text-gray-600">Type: {collection.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Collections */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Featured Collections ({featuredCollections.docs.length})
          </h2>
          {featuredCollections.docs.length === 0 ? (
            <p className="text-gray-600">No featured collections found</p>
          ) : (
            <div className="space-y-4">
              {featuredCollections.docs.map((collection) => (
                <div key={collection.id} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold">{collection.title}</h3>
                  <p className="text-sm text-gray-600">Slug: {collection.slug}</p>
                  <p className="text-sm text-gray-600">Status: {collection.status}</p>
                  <p className="text-sm text-gray-600">
                    Featured: {collection.featured ? 'Yes' : 'No'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Featured Order: {collection.featuredOrder || 'Not set'}
                  </p>
                  <p className="text-sm text-gray-600">Item Count: {collection.itemCount || 0}</p>
                  <p className="text-sm text-gray-600">
                    Products: {Array.isArray(collection.products) ? collection.products.length : 0}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Products */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Products ({products.docs.length})</h2>
          {products.docs.length === 0 ? (
            <p className="text-gray-600">No products found</p>
          ) : (
            <div className="space-y-4">
              {products.docs.map((product) => (
                <div key={product.id} className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-sm text-gray-600">Slug: {product.slug}</p>
                  <p className="text-sm text-gray-600">Status: {product._status}</p>
                  <p className="text-sm text-gray-600">
                    Price: ${product.priceInUSD ? (product.priceInUSD / 100).toFixed(2) : 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Collections:{' '}
                    {Array.isArray(product.collections) ? product.collections.length : 0}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
