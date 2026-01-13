import Link from 'next/link'

export function CustomOrderSection() {
  return (
    <section className="py-16 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Design Your Own Piece</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create something truly unique with our custom order service. Choose your colors, size,
            and style.
          </p>
        </div>

        <div className=" mx-auto grid md:grid-cols-2 gap-8 my-8">
          <div className="p-6">
            <h3 className="text-2xl font-bold my-8 text-center">How Custom Orders Work</h3>

            <div className="flex gap-4 p-5">
              <div className="shrink-0 w-12 h-12 bg-[#BE8D08] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Design your own piece</h4>
                <p className="text-gray-600">
                  Tell us what you&apos;re looking for - product type, colors, size and any special
                  details
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5">
              <div className="shrink-0 w-12 h-12 bg-[#BE8D08] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Share your vision</h4>
                <p className="text-gray-600">
                  Tell us what you&apos;re looking for - product type, colors, size and any special
                  details
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5">
              <div className="shrink-0 w-12 h-12 bg-[#BE8D08] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Get Your Quote</h4>
                <p className="text-gray-600">
                  We&apos;ll provide a detailed quote including timeline and pricing within 24
                  hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5">
              <div className="shrink-0 w-12 h-12 bg-[#BE8D08] text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Delivered to You</h4>
                <p className="text-gray-600">
                  Your custom piece arrives beautifully packaged and ready to enjoy or gift.
                </p>
              </div>
            </div>
          </div>
          {/* card added */}
          <div className="rounded-2xl shadow-xl">
            <h4 className="font-semibold mt-2 text-lg">Your Custom Order</h4>
            <div className="text-center">
              <Link
                href="/custom-orders"
                className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold-dark transition-colors"
              >
                Start Custom Order
              </Link>
            </div>
          </div>
          {/* card ended */}
        </div>
      </div>
    </section>
  )
}
