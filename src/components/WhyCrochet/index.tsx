import Image from 'next/image'
import Link from 'next/link'

export function WhyCrochet() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Why Crochet?</h2>

            <p className="text-gray-900 mb-6 leading-relaxed text-lg">
              Crochet isn&apos;t just a craft—it&apos;s an art form that carries warmth, patience,
              and love into every stitch.
            </p>

            <p className="text-gray-900 mb-6 leading-relaxed">
              Each piece I create tells a story. From the moment I select the perfect yarn to the
              final finishing touches, every step is infused with care and creativity. I believe
              that handmade items carry a special energy that mass-produced goods simply cannot
              match.
            </p>

            <p className="text-gray-900 mb-6 leading-relaxed">
              My journey with crochet began over a decade ago when my grandmother taught me the
              basics. What started as a simple hobby has blossomed into a passion for creating
              beautiful, functional pieces...
            </p>

            <p className="text-gray-900 mb-8 leading-relaxed">
              When you choose a handmade crochet piece, you&apos;re not just buying a
              product—you&apos;re investing in craftsmanship, supporting sustainable practices, and
              bringing a piece of art into your home.
            </p>

            <Link
              href="/about"
              className="inline-block bg-[#BE8D08] text-white px-8 py-3 rounded-full font-medium hover:bg-gold-dark transition-colors"
            >
              Meet the Maker
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-image.jpg"
                alt="Handcrafted crochet pieces with love and care"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
