import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/bg-image.jpg')" }}
          ></div>
          {/* Linear gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(80.78deg, rgba(190, 141, 8, 0.8) 0%, rgba(209, 213, 219, 0.8) 136.66%)',
            }}
          ></div>
        </div>

        <div className="container text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1F2937] drop-shadow-lg">
            About CrochetCraft
          </h1>
          <p className="text-[#1F2937]/90 max-w-3xl mx-auto leading-relaxed text-lg drop-shadow">
            Every stitch tells a story of passion, patience and the timeless art of handmade
            craftmanship
          </p>
        </div>
      </section>

      {/* Meet the Maker */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/about-image.jpg"
                alt="About CrochetCraft - Our handmade crochet process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet the maker</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Crochet isn&apos;t just a craft—it&apos;s an art form that carries warmth,
                  patience, and love into every stitch.
                </p>
                <p>
                  What started as a hobby quickly became a passion. I fell in love with the rhythm
                  of the stitches and the joy of creating something beautiful from scratch.
                </p>
                <p>
                  My journey with crochet began over a decade ago when my grandmother taught me the
                  basics. What started as a simple hobby has blossomed into a passion for creating
                  beautiful, functional pieces that bring joy to everyday life.
                </p>
                <p>
                  When you choose a handmade crochet piece, you&apos;re not just buying a
                  product—you&apos;re investing in craftsmanship, supporting sustainable practices,
                  and bringing a piece of art into your home.
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
              <div className="w-20 h-20 bg-[#BE8D08] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">We do business with honesty and fairness.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#BE8D08] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                We nurture the environment and promote eco-friendly farming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#BE8D08] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We use technology to drive agriculture progress.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#BE8D08] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We build partnerships that uplift local farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16  text-[#1A1A1A]">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="space-y-12">
            {/* Process Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-cream rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2"></div>
                  <p>Process 1</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#BE8D08] mb-4">Design & Planning</h3>
                <p className="text-[#1A1A1A] leading-relaxed">
                  Every piece begins with careful planning and design. We select the perfect yarn
                  colors, create detailed patterns, and ensure each stitch will contribute to the
                  final masterpiece. Quality starts with preparation.
                </p>
              </div>
            </div>

            {/* Process Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 aspect-video bg-cream rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2"></div>
                  <p>Proces 2</p>
                </div>
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-[#BE8D08] mb-4">Handcrafted Creation</h3>
                <p className="text-[#1A1A1A] leading-relaxed">
                  With patience and precision, each piece is carefully crocheted by hand. Every
                  stitch is placed with intention, creating not just a product, but a work of art
                  that carries the warmth of human touch.
                </p>
              </div>
            </div>

            {/* Process Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-cream rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2"></div>
                  <p>Process 3</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#BE8D08] mb-4">Quality Inspection</h3>
                <p className="text-[#1A1A1A] leading-relaxed">
                  Before any piece leaves our hands, it undergoes thorough quality inspection. We
                  check every stitch, ensure proper tension, and verify that it meets our high
                  standards for durability and beauty.
                </p>
              </div>
            </div>

            {/* Process Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 aspect-video bg-cream rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2"></div>
                  <p>Process 4</p>
                </div>
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-[#BE8D08] mb-4">
                  Careful Packaging & Delivery
                </h3>
                <p className="text-[#1A1A1A] leading-relaxed">
                  Your handmade piece is carefully packaged with love and attention to detail. We
                  ensure it arrives in perfect condition, ready to bring joy and warmth to your home
                  or to be gifted to someone special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container bg-[#F9FAFB] py-8">
          <div className="text-center py-8">
            <div className="w-15 h-15 bg-[#BE8D081A] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(190,141,8,1)"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;d love to create something custom just for you!
          </p>
          <Link
            href="/custom-orders"
            className="inline-block bg-[#BE8D08] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-colors"
          >
            Request Custom Order
          </Link>
        </div>
      </section>
    </div>
  )
}
