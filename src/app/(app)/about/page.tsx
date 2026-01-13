import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-gold/30 to-cream flex items-center justify-center">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">About CrochetCraft</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to CrochetCraft, where every stitch tells a story. We are passionate about
            creating handmade crochet pieces that bring warmth, comfort, and beauty into your life.
          </p>
        </div>
      </section>

      {/* Meet the Maker */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-gold/20 to-cream flex items-center justify-center">
              <span className="text-6xl">👩‍🎨</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet the maker</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hi, I'm the heart and hands behind CrochetCraft. My journey with crochet began
                  years ago when I picked up a hook and some yarn, and I haven't looked back since.
                </p>
                <p>
                  What started as a hobby quickly became a passion. I fell in love with the rhythm
                  of the stitches and the joy of creating something beautiful from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
              <p className="text-gray-600 text-sm">Every piece is handmade with precision</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                ♻️
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">Eco-friendly materials and practices</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Traditional techniques, modern designs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                ❤️
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Supporting artisans and connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to create something custom just for you!
          </p>
          <Link
            href="/custom-orders"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-dark transition-colors"
          >
            Request Custom Order
          </Link>
        </div>
      </section>
    </div>
  )
}
