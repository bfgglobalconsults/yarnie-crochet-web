'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does it take to make a custom order?',
    answer:
      "Custom orders typically take 2-4 weeks depending on the complexity and size of the item. We'll provide you with an estimated timeline when you receive your quote.",
  },
  {
    question: 'What materials do you use?',
    answer:
      'We use premium quality yarn from trusted brands. All our materials are carefully selected for durability, softness, and color vibrancy. We can also accommodate specific material requests.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      "Currently, we ship within Nigeria with delivery to Kubwa, Gwarimpa, and Asokoro. We're working on expanding our shipping options soon!",
  },
  {
    question: 'Can I return or exchange an item?',
    answer:
      "Due to the handmade nature of our products, we don't accept returns on custom orders. However, if there's a defect or issue with your order, please contact us within 48 hours of delivery.",
  },
  {
    question: 'How do I care for my crochet items?',
    answer:
      'Hand wash in cold water with mild detergent and lay flat to dry. Avoid wringing or twisting. For specific care instructions, check the care label that comes with your item.',
  },
  {
    question: 'Do you offer wholesale or bulk orders?',
    answer:
      'Yes! We offer special pricing for wholesale and bulk orders. Please contact us directly to discuss your requirements and get a custom quote.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Got questions? We&apos;ve got answers!</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
