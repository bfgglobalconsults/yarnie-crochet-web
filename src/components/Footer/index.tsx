'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold text-gold">YARNIE</div>
              <div className="text-sm text-gray-400">BEAUTY AND CROCHET</div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Handmade crochet pieces crafted with love, patience, and attention to detail. Each
              stitch tells a story of artisanal craftsmanship and creative passion.
            </p>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold text-white rounded-lg font-medium hover:bg-gold-dark transition-colors whitespace-nowrap"
                >
                  Count Me In
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">No spam, just cozy vibes.</p>
            </form>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                IG
              </a>
              <a
                href="https://pinterest.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                P
              </a>
              <a
                href="https://tiktok.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                TT
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                FB
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop?filter=new"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=bestsellers"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-orders"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Helpful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-gold transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-gold transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Yarnie Beauty and Crochet. Made stitch by stitch, with
            love.
          </p>
        </div>
      </div>
    </footer>
  )
}
