const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Happy Customer',
    content:
      'The blanket I ordered is absolutely beautiful! The quality is amazing and it arrived perfectly packaged. I love supporting handmade businesses.',
    rating: 5,
  },
  {
    name: 'James O.',
    role: 'Custom Order Client',
    content:
      'I ordered a custom bag and the team was so helpful throughout the process. The final product exceeded my expectations!',
    rating: 5,
  },
  {
    name: 'Amina K.',
    role: 'Repeat Customer',
    content:
      "I've ordered multiple items and each one is crafted with such care. The attention to detail is incredible. Highly recommend!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Happy Customers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their handmade crochet pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
