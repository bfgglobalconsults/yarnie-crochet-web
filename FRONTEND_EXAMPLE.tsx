// Example React Component for Custom Order Configurator
// This matches your wireframe design

'use client'

import { useEffect, useState } from 'react'

interface ProductType {
  id: string
  name: string
  icon: string
  priceRange: { min: number; max: number }
  estimatedTimeline: string
}

interface CustomColor {
  id: string
  name: string
  hexCode: string
}

interface YarnType {
  id: string
  name: string
  description: string
  priceModifier: number
  priceModifierType: 'fixed' | 'percentage'
}

export default function CustomOrderConfigurator() {
  // State for customization options
  const [productTypes, setProductTypes] = useState<ProductType[]>([])
  const [colors, setColors] = useState<CustomColor[]>([])
  const [yarnTypes, setYarnTypes] = useState<YarnType[]>([])

  // State for selections
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const [selectedColor, setSelectedColor] = useState<CustomColor | null>(null)
  const [selectedYarn, setSelectedYarn] = useState<YarnType | null>(null)

  // Customer info
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  // Load customization options
  useEffect(() => {
    async function loadOptions() {
      const [productsRes, colorsRes, yarnsRes] = await Promise.all([
        fetch('/api/productTypes?where[status][equals]=active&sort=order'),
        fetch('/api/customColors?where[status][equals]=active&sort=order'),
        fetch('/api/yarnTypes?where[status][equals]=active&sort=order'),
      ])

      const [products, colors, yarns] = await Promise.all([
        productsRes.json(),
        colorsRes.json(),
        yarnsRes.json(),
      ])

      setProductTypes(products.docs)
      setColors(colors.docs)
      setYarnTypes(yarns.docs)
    }

    loadOptions()
  }, [])

  // Calculate estimated price
  const calculatePrice = () => {
    if (!selectedProduct || !selectedYarn) return { min: 0, max: 0 }

    const baseMin = selectedProduct.priceRange.min
    const baseMax = selectedProduct.priceRange.max

    if (selectedYarn.priceModifierType === 'fixed') {
      return {
        min: baseMin + selectedYarn.priceModifier,
        max: baseMax + selectedYarn.priceModifier,
      }
    } else {
      const percentModifier = selectedYarn.priceModifier / 100
      return {
        min: baseMin + baseMin * percentModifier,
        max: baseMax + baseMax * percentModifier,
      }
    }
  }

  const estimatedPrice = calculatePrice()

  // Submit order
  const handleSubmit = async (action: 'start' | 'quote') => {
    if (!selectedProduct || !selectedColor || !selectedYarn) {
      alert('Please complete all selections')
      return
    }

    if (!customerName || !customerEmail) {
      alert('Please provide your contact information')
      return
    }

    const orderData = {
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      productType: selectedProduct.id,
      color: selectedColor.id,
      yarnType: selectedYarn.id,
      status: action === 'quote' ? 'quote_requested' : 'quote_requested',
      paymentStatus: 'pending',
    }

    const response = await fetch('/api/customOrders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    })

    const result = await response.json()

    if (response.ok) {
      alert(`Order ${result.doc.orderNumber} created successfully!`)
      // Redirect to confirmation page
    } else {
      alert('Error creating order. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Design Your Own Piece</h1>
          <p className="text-gray-400">
            Create something uniquely yours with our custom order wizard
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Selections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Choose Your Product */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Choose Your Product</h2>
              <div className="grid grid-cols-3 gap-4">
                {productTypes.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      selectedProduct?.id === product.id
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-4xl mb-2">
                      {/* Icon placeholder - use actual icons */}
                      {product.icon === 'home' && '🏠'}
                      {product.icon === 'shirt' && '👕'}
                      {product.icon === 'bag' && '👜'}
                      {product.icon === 'user' && '🧣'}
                      {product.icon === 'hat' && '🎩'}
                      {product.icon === 'heart' && '❤️'}
                    </div>
                    <div className="font-medium">{product.name}</div>
                  </button>
                ))}
              </div>
            </section>

            {/* Select Color */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Select Color</h2>
              <div className="grid grid-cols-3 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      selectedColor?.id === color.id
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: color.hexCode }}
                    />
                    <div className="font-medium">{color.name}</div>
                  </button>
                ))}
              </div>
            </section>

            {/* Choose Yarn Type */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Choose Yarn Type</h2>
              <div className="space-y-3">
                {yarnTypes.map((yarn) => (
                  <button
                    key={yarn.id}
                    onClick={() => setSelectedYarn(yarn)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedYarn?.id === yarn.id
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-lg">{yarn.name}</div>
                        <div className="text-sm text-gray-400">{yarn.description}</div>
                      </div>
                      {yarn.priceModifier > 0 && (
                        <div className="text-pink-500 font-medium">
                          +${yarn.priceModifier}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right Panel - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-8">
              <h3 className="text-2xl font-semibold mb-6">Your Custom Order</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Product:</span>
                  <span className="font-medium">
                    {selectedProduct?.name || '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Color:</span>
                  <span className="font-medium">
                    {selectedColor?.name || '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Yarn:</span>
                  <span className="font-medium">
                    {selectedYarn?.name || '-'}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="text-sm text-gray-400 mb-2">Estimated Price:</div>
                <div className="text-3xl font-bold text-pink-500">
                  ${estimatedPrice.min} - ${estimatedPrice.max}
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Timeline: {selectedProduct?.estimatedTimeline || '2-3 weeks'}
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                />
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleSubmit('start')}
                  className="w-full py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-semibold transition-colors"
                >
                  Start Your Custom Piece
                </button>
                <button
                  onClick={() => handleSubmit('quote')}
                  className="w-full py-3 border-2 border-pink-500 hover:bg-pink-500/10 rounded-lg font-semibold transition-colors"
                >
                  Get Quote First
                </button>
              </div>

              <div className="mt-6 p-4 bg-pink-500/10 rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="text-pink-500">ℹ️</span>
                  <p className="text-sm text-gray-300">
                    Custom orders are made to order and typically take{' '}
                    {selectedProduct?.estimatedTimeline || '2-3 weeks'} to complete.
                    We'll send you progress photos and keep you updated throughout the
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
