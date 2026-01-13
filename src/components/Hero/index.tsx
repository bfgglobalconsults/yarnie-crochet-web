'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/yarnie-bg.jpg)',
        }}
      />

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          Handmade with Love{' '}<br/>
          <span className="text-gold">Just for You</span>
        </h1>

        {/* Subheading */}
        <p className="mb-12 max-w-2xl text-lg text-white/90 md:text-xl">
          Unique crochet pieces that bring comfort, color, and creativity<br/> into your life
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/collections"
            className="rounded-full bg-gold px-8 py-4 font-medium text-white transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            Shop Collection
          </Link>
          <Link
            href="/custom-orders"
            className="rounded-full border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-gray-900"
          >
            Custom Order
          </Link>
        </div>

        {/* Made by Hand Badge */}
        <div className="mt-16 flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs text-white/70">Every piece is</p>
            <p className="font-semibold text-white">Made by Hand</p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 animate-bounce text-white transition-opacity hover:opacity-70"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
