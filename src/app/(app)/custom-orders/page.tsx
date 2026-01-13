'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Implement form submission
  }

  const faqs = [
    {
      question: 'How long does it take to make a custom order?',
      answer:
        `Custom orders typically take 2-4 weeks depending on the complexity and size of the piece. For larger projects like blankets, it may take 3-5 weeks. We'll provide you with an estimated timeline when you receive your quote, and we'll keep you updated throughout the process.`,
    },
    {
      question: 'Do you ship internationally?',
      answer:
        `Currently, we ship within Nigeria with delivery to Kubwa, Gwarimpa, and Asokoro. We're working on expanding our shipping options to include international delivery soon!`,
    },
    {
      question: `What yarn do you use?`,
      answer:
        'We use premium quality yarn from trusted brands. All our materials are carefully selected for durability, softness, and color vibrancy. We primarily work with acrylic, cotton, and wool blends. If you have specific material preferences or allergies, please let us know in your custom order request.',
    },
    {
      question: 'Can I return or exchange items?',
      answer:
        `Due to the handmade and custom nature of our products, we don't accept returns or exchanges on custom orders. However, if there's a defect or issue with your order, please contact us within 48 hours of delivery and we'll work to make it right.`,
    },
    {
      question: 'How do I care for my crochet items?',
      answer:
        `Hand wash in cold water with mild detergent and lay flat to dry. Avoid wringing or twisting the fabric. For specific care instructions based on the yarn used, we'll include a care label with your item.`,
    },
    {
      question: `Do you offer wholesale or bulk orders?`,
      answer:
        `Yes! We offer special pricing for wholesale and bulk orders. Please contact us directly with your requirements, and we'll provide a custom quote based on quantity, complexity, and timeline.`,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-yellow-300 flex items-center justify-center">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to discuss a custom order? We&apos;d love to hear from you! Fill out
            the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gold">Get your produce on the way!</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;lre looking for a custom crochet piece or have questions about our
                products, we&apos;re here to help. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                {/* Call Us */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">
                      Mon-Fri: 9AM-6PM
                      <br />
                      Sat-Sun: 10AM-4PM
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">
                      info@yarnie.com
                      <br />
                      support@yarnie.com
                    </p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm">Abuja, Nigeria</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9AM - 6PM
                      <br />
                      Saturday - Sunday: 10AM - 4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold"
                  >
                    <option value="">Select a subject</option>
                    <option value="custom-order">Custom Order Request</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message (Max 500 characters)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your custom order..."
                    maxLength={500}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-white py-3 rounded-full font-semibold hover:bg-gold-dark transition-colors"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our handmade crochet pieces
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold mb-4">Still have questions?</p>
            <p className="text-gray-600 mb-6">
              If you didn&apos;t find the answer you were looking for, feel free to reach out to us
              directly. We&apos;re here to help!
            </p>
            <a
              href="mailto:info@yarnie.com"
              className="inline-block bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
