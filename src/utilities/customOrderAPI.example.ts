// Example API calls for Custom Order Configurator
// Use these in your frontend to fetch customization options and submit orders

/**
 * Fetch all active product types
 */
export async function getProductTypes() {
  const response = await fetch(
    '/api/productTypes?where[status][equals]=active&sort=order'
  )
  return response.json()
}

/**
 * Fetch all active colors
 */
export async function getCustomColors() {
  const response = await fetch(
    '/api/customColors?where[status][equals]=active&sort=order'
  )
  return response.json()
}

/**
 * Fetch all active yarn types
 */
export async function getYarnTypes() {
  const response = await fetch(
    '/api/yarnTypes?where[status][equals]=active&sort=order'
  )
  return response.json()
}

/**
 * Get a specific yarn type with its available colors
 */
export async function getYarnTypeWithColors(yarnTypeId: string) {
  const response = await fetch(
    `/api/yarnTypes/${yarnTypeId}?depth=1`
  )
  return response.json()
}

/**
 * Calculate estimated price based on selections
 */
export function calculateEstimatedPrice(
  productType: any,
  yarnType: any
): { min: number; max: number } {
  const baseMin = productType.priceRange.min
  const baseMax = productType.priceRange.max
  
  let modifier = 0
  if (yarnType.priceModifierType === 'fixed') {
    modifier = yarnType.priceModifier
  } else if (yarnType.priceModifierType === 'percentage') {
    // For percentage, apply to both min and max
    const percentModifier = yarnType.priceModifier / 100
    return {
      min: baseMin + (baseMin * percentModifier),
      max: baseMax + (baseMax * percentModifier),
    }
  }
  
  return {
    min: baseMin + modifier,
    max: baseMax + modifier,
  }
}

/**
 * Submit a custom order request
 */
export async function submitCustomOrder(orderData: {
  customer: {
    name: string
    email: string
    phone?: string
    userId?: string
  }
  productType: string // ID
  color: string // ID
  yarnType: string // ID
  customizations?: {
    size?: string
    specialInstructions?: string
    referenceImages?: string[] // Media IDs
  }
}) {
  const response = await fetch('/api/customOrders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...orderData,
      status: 'quote_requested',
      paymentStatus: 'pending',
    }),
  })
  
  return response.json()
}

/**
 * Upload reference image for custom order
 */
export async function uploadReferenceImage(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await fetch('/api/media', {
    method: 'POST',
    body: formData,
  })
  
  return response.json()
}

/**
 * Get customer's custom orders
 */
export async function getCustomerOrders(email: string) {
  const response = await fetch(
    `/api/customOrders?where[customer.email][equals]=${encodeURIComponent(email)}&sort=-createdAt`
  )
  return response.json()
}

/**
 * Get a specific custom order with all relationships
 */
export async function getCustomOrder(orderId: string) {
  const response = await fetch(
    `/api/customOrders/${orderId}?depth=2`
  )
  return response.json()
}

// Example usage in a React component:
/*
import { useState, useEffect } from 'react'

export function CustomOrderConfigurator() {
  const [productTypes, setProductTypes] = useState([])
  const [colors, setColors] = useState([])
  const [yarnTypes, setYarnTypes] = useState([])
  
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedYarn, setSelectedYarn] = useState(null)
  
  const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 })
  
  useEffect(() => {
    // Load customization options
    Promise.all([
      getProductTypes(),
      getCustomColors(),
      getYarnTypes(),
    ]).then(([products, colors, yarns]) => {
      setProductTypes(products.docs)
      setColors(colors.docs)
      setYarnTypes(yarns.docs)
    })
  }, [])
  
  useEffect(() => {
    // Calculate price when selections change
    if (selectedProduct && selectedYarn) {
      const price = calculateEstimatedPrice(selectedProduct, selectedYarn)
      setEstimatedPrice(price)
    }
  }, [selectedProduct, selectedYarn])
  
  const handleSubmit = async (customerInfo) => {
    if (!selectedProduct || !selectedColor || !selectedYarn) {
      alert('Please complete all selections')
      return
    }
    
    const order = await submitCustomOrder({
      customer: customerInfo,
      productType: selectedProduct.id,
      color: selectedColor.id,
      yarnType: selectedYarn.id,
      customizations: {
        // Add any custom fields
      },
    })
    
    console.log('Order created:', order)
    // Redirect to confirmation page or show success message
  }
  
  return (
    <div>
      {/* Your UI here *\/}
    </div>
  )
}
*/
