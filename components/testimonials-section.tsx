export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Data Scientist",
      company: "TechCorp",
      content:
        "Jasmitha's expertise in data pipeline optimization helped us reduce processing time by 40%. Her analytical approach and attention to detail are exceptional.",
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      company: "HealthTech Solutions",
      content:
        "Working with Jasmitha was a game-changer for our healthcare data systems. She transformed complex datasets into actionable insights that directly improved patient outcomes.",
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Data Officer",
      company: "MedAnalytics",
      content:
        "Jasmitha's ability to translate messy healthcare data into clear, decision-making insights is remarkable. Her collaborative approach made our entire team more effective.",
      avatar: "/professional-woman-doctor-avatar.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from colleagues and clients about their experience working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-green-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
