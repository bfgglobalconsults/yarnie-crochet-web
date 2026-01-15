'use client'

import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
  const { cart, incrementItem, decrementItem, removeItem } = useCart()
  const [promoCode, setPromoCode] = useState('')

  const subtotal =
    cart?.items?.reduce((total, item) => {
      const price = typeof item.product === 'object' ? item.product.priceInUSD || 0 : 0
      return total + price * item.quantity
    }, 0) || 0

  const deliveryFee = 1500 // $15 in cents
  const total = subtotal + deliveryFee

  const handleIncrement = (itemId: string) => {
    incrementItem(itemId)
  }

  const handleDecrement = (itemId: string) => {
    decrementItem(itemId)
  }

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId)
  }

  const handleApplyPromo = () => {
    console.log('Applying promo code:', promoCode)
    // TODO: Implement promo code logic
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gold/30 to-cream py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Varius et id duis orci prim. Mauris ut.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="container">
          {!cart?.items || cart.items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
              <Link
                href="/collections"
                className="inline-block bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.items.map((item) => {
                  const product = typeof item.product === 'object' ? item.product : null
                  const image =
                    product && typeof product.gallery?.[0]?.image === 'object'
                      ? product.gallery[0].image
                      : null

                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        {image && <Media resource={image} className="w-full h-full object-cover" />}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {product?.title || 'Product'}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">Lorem ipsum</p>
                        <div className="font-bold text-lg">
                          {product?.priceInUSD && (
                            <Price amount={product.priceInUSD} className="text-gray-900" />
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-cream p-6 rounded-lg sticky top-4">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <Price amount={subtotal} />
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Delivery Fee</span>
                      <Price amount={deliveryFee} />
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <Price amount={total} />
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Add promo code"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="px-6 py-3 bg-gold text-white rounded-lg font-medium hover:bg-gold-dark transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/checkout"
                    className="block w-full text-center bg-gold text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-colors"
                  >
                    Go to Checkout →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-16 bg-cream">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* These would be dynamically loaded products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold">$89</span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className="w-2 h-2 rounded-full bg-gray-300"></div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gold text-white py-2 rounded-full font-medium hover:bg-gold-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
