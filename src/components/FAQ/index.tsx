'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function FAQ() {
  const [activeTab, setActiveTab] = useState('shipping')
  const [openQuestion, setOpenQuestion] = useState<string | null>('shipping-time')

  const tabs = [
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'care', label: 'Care Instructions' },
    { id: 'returns', label: 'Return & Exchanges' },
  ]

  const faqData = {
    shipping: [
      {
        id: 'shipping-time',
        question: 'How long does shipping take?',
        answer:
          'Standard shipping typically takes 5-7 business days within Nigeria. Express shipping is available for 2-3 business days. Custom orders may take 1-2 weeks depending on complexity.',
      },
      {
        id: 'international',
        question: 'Do you ship internationally?',
        answer:
          'Currently, we ship within Nigeria only. We are working on expanding our shipping to other African countries. Please contact us for special arrangements.',
      },
      {
        id: 'tracking',
        question: 'How can I track my order?',
        answer:
          "Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our shipping partner's website.",
      },
      {
        id: 'shipping-costs',
        question: 'What are the shipping costs?',
        answer:
          'Shipping costs vary by location and order size. Standard shipping starts from ₦1,500 within Lagos and ₦2,500 to other states. Free shipping on orders over ₦25,000.',
      },
    ],
    care: [
      {
        id: 'washing',
        question: 'How do I wash my crochet items?',
        answer:
          'Hand wash in cold water with mild detergent. Gently squeeze out excess water and lay flat to dry. Avoid wringing or twisting the fabric.',
      },
      {
        id: 'storage',
        question: 'How should I store my crochet pieces?',
        answer:
          'Store in a cool, dry place away from direct sunlight. For blankets and larger items, fold carefully or hang to prevent stretching.',
      },
      {
        id: 'maintenance',
        question: 'How do I maintain the shape?',
        answer:
          'Always lay flat to dry and reshape while damp. For items that stretch, store folded rather than hanging to maintain their original shape.',
      },
    ],
    returns: [
      {
        id: 'return-policy',
        question: 'What is your return policy?',
        answer:
          "We accept returns within 14 days of delivery for unused items in original condition. Custom orders are non-returnable unless there's a defect.",
      },
      {
        id: 'exchange',
        question: 'Can I exchange for a different size or color?',
        answer:
          'Yes, exchanges are possible within 14 days if the item is unused and in original condition. You may need to pay the difference for custom sizing.',
      },
      {
        id: 'refund-process',
        question: 'How long do refunds take?',
        answer:
          'Refunds are processed within 5-7 business days after we receive the returned item. The refund will be credited to your original payment method.',
      },
    ],
  }

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setOpenQuestion(null)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === tab.id ? 'bg-gold text-white' : 'bg-white text-gold hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Tab Header */}
            <div className="bg-gold text-white p-6">
              <h3 className="text-2xl font-bold">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h3>
            </div>

            {/* Questions */}
            <div className="p-6 space-y-4">
              {faqData[activeTab as keyof typeof faqData].map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-gold transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openQuestion === faq.id && (
                    <div className="pb-4 pr-8">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="text-center mt-12 bg-cream rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl">?</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            I&apos;m here to help! Feel free to reach out with any questions about custom orders, care
            instructions, or anything else.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-dark transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
