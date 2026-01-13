'use client'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

import type { Header } from 'src/payload-types'
import { MobileMenu } from './MobileMenu'

import { usePathname } from 'next/navigation'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <nav className="flex items-center justify-between container py-4">
        {/* Mobile Menu */}
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>

        {/* Logo */}
        <Link className="flex items-center" href="/">
          <div className="flex items-center">
            <Image
              src="/assets/yarnie-logo.png"
              alt="Yarnie Beauty and Crochet"
              width={100}
              height={70}
              className="h-12 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 text-sm md:flex md:items-center font-medium">
          <li>
            <Link href="/collections" className="text-white hover:text-gold transition-colors">
              Collections
            </Link>
          </li>
          <li>
            <Link href="/custom-orders" className="text-white hover:text-gold transition-colors">
              Custom Orders
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gold transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gold transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="text-white hover:text-gold transition-colors" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Cart */}
          <Suspense fallback={<OpenCartButton />}>
            <Cart />
          </Suspense>

          {/* User Icon */}
          <Link
            href="/account"
            className="text-white hover:text-gold transition-colors"
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  )
}
