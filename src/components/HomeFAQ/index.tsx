'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function HomeFAQ() {
  const [activeTab, setActiveTab] = useState('shipping')
  const [openQuestion, setOpenQuestion] = useState<string | null>('shipping-1')

  const tabs = [
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'care', label: 'Care Instructions' },
    { id: 'returns', label: 'Return & Exchanges' },
  ]

  const faqData = {
    shipping: [
      {
        id: 'shipping-1',
        question: 'How long does shipping take?',
        answer:
          'Standard shipping takes 5-7 business days within Nigeria. Express shipping is available for 2-3 business days at an additional cost.',
      },
      {
        id: 'shipping-2',
        question: 'Do you ship internationally?',
        answer:
          'Currently, we only ship within Nigeria. We are working on expanding our shipping to other countries soon.',
      },
      {
        id: 'shipping-3',
        question: 'How can I track my order?',
        answer:
          "Once your order ships, you will receive a tracking number via email. You can use this to track your package on our website or the courier's website.",
      },
      {
        id: 'shipping-4',
        question: 'What are the shipping costs?',
        answer:
          'Shipping costs vary by location and order size. Free shipping is available for orders over ₦15,000 within Lagos. Check our shipping calculator at checkout for exact costs.',
      },
    ],
    care: [
      {
        id: 'care-1',
        question: 'How do I wash my crochet items?',
        answer:
          'Hand wash in cold water with mild detergent. Gently squeeze out excess water and lay flat to dry. Avoid wringing or twisting the fabric.',
      },
      {
        id: 'care-2',
        question: 'Can I machine wash crochet items?',
        answer:
          'Some items can be machine washed on a gentle cycle in a mesh bag. Check the care label on your specific item for detailed instructions.',
      },
      {
        id: 'care-3',
        question: 'How do I store my crochet pieces?',
        answer:
          'Store in a clean, dry place away from direct sunlight. For blankets and larger items, fold carefully or store flat to maintain shape.',
      },
      {
        id: 'care-4',
        question: 'What if my item gets damaged?',
        answer:
          'Minor repairs can often be done at home with matching yarn. For major damage, contact us for repair recommendations or replacement options.',
      },
    ],
    returns: [
      {
        id: 'returns-1',
        question: 'What is your return policy?',
        answer:
          'We accept returns within 14 days of delivery for unused items in original condition. Custom orders are non-returnable unless there is a defect.',
      },
      {
        id: 'returns-2',
        question: 'How do I initiate a return?',
        answer:
          'Contact our customer service team with your order number and reason for return. We will provide you with return instructions and a prepaid shipping label if applicable.',
      },
      {
        id: 'returns-3',
        question: 'When will I receive my refund?',
        answer:
          'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The refund will be credited to your original payment method.',
      },
      {
        id: 'returns-4',
        question: 'Can I exchange an item?',
        answer:
          'Yes, exchanges are available for different sizes or colors of the same item, subject to availability. Contact us to arrange an exchange.',
      },
    ],
  }

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <section className="py-16 text-black">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
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
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id ? 'bg-gold text-white' : 'bg-white text-gold hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Tab Header */}
            <div className="bg-gold text-white p-6">
              <h3 className="text-2xl font-bold">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h3>
            </div>

            {/* Questions */}
            <div className="p-6 space-y-4">
              {faqData[activeTab as keyof typeof faqData]?.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full flex items-center justify-between py-4 text-left text-gray-900 hover:text-gold transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openQuestion === faq.id && (
                    <div className="pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="text-center mt-16 bg-cream rounded-lg p-8">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Im here to help! Feel free to reach out with any questions about custom orders, care
            instructions, or anything else.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-dark transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
