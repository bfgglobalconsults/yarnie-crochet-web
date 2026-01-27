'use client'

import { useState } from 'react'

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    preferredMethod: '',
    itemType: '',
    description: '',
    colors: '',
    deadline: '',
    shippingInfo: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Custom order submitted:', formData)
    // TODO: Implement form submission
  }

  const steps = [
    {
      number: 1,
      title: 'Design your own piece',
      description:
        'Tell us about your vision. Share your ideas, colors, size, and any special requirements.',
    },
    {
      number: 2,
      title: 'Share your vision',
      description:
        "We'll work with you to refine the design, discuss materials, colors, and pricing.",
    },
    {
      number: 3,
      title: 'Get a Quote',
      description:
        'Get a personalized quote based on materials, complexity, and timeline within 24 hours.',
    },
    {
      number: 4,
      title: 'Delivered to You',
      description:
        'Your custom piece is handcrafted with love and delivered straight to your door.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/crochet-bg.jpg')" }}
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
            Custom Orders
          </h1>
          <p className="text-[#1F2937]/90 max-w-3xl mx-auto leading-relaxed text-lg drop-shadow">
            Bring your vision to life with our personalized crochet creations
          </p>
        </div>
      </section>

      {/* How Custom Orders Work */}
      <section className="py-16">
        <div
          className="container"
          style={{
            background: 'linear-gradient(180deg, #BE8D08 0%, #584104 100%)',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="p-8 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-8">How Custom Orders Work</h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="w-8 h-8 bg-white text-gold rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-white/90 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-cream rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg">Custom Crochet Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Start your custom order</h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you with a personalized quote
                within 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                      >
                        <option value="">Select City</option>
                        <option value="abuja">Abuja</option>
                        <option value="lagos">Lagos</option>
                        <option value="kano">Kano</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State</label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                      >
                        <option value="">Select State</option>
                        <option value="fct">FCT</option>
                        <option value="lagos">Lagos</option>
                        <option value="kano">Kano</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Method */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred method of communication
                  </label>
                  <select
                    value={formData.preferredMethod}
                    onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                  >
                    <option value="">Select method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                {/* Item Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us what you are looking for
                  </label>
                  <select
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                  >
                    <option value="">Select item type</option>
                    <option value="blanket">Blanket</option>
                    <option value="bag">Bag</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="home-decor">Home Decor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Colors and Description */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Spec/Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your vision..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred colors</label>
                    <textarea
                      value={formData.colors}
                      onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                      placeholder="What colors would you like?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold resize-none"
                    />
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-medium mb-2">Deadline (if any)</label>
                  <textarea
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    placeholder="When do you need this completed?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                {/* Shipping Info */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Anything else you would like to tell us?
                  </label>
                  <textarea
                    value={formData.shippingInfo}
                    onChange={(e) => setFormData({ ...formData, shippingInfo: e.target.value })}
                    placeholder="Any additional information..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="bg-[#BE8D08] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-black transition-colors"
                  >
                    Submit 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
