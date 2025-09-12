export function AboutSection() {
  const interests = [
    { name: "Art", emoji: "🎨" },
    { name: "Movies", emoji: "🎬" },
    { name: "Astronomy", emoji: "🔭" },
    { name: "Analysis", emoji: "📊" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-pretty text-justify">
                I'm a passionate Data Engineer with over 3 years of experience transforming complex healthcare data into
                actionable insights. My journey began with a fascination for uncovering patterns in data, which led me
                to specialize in building robust data pipelines and optimization systems.
              </p>

              <p className="text-lg leading-relaxed text-pretty text-justify">
                Throughout my career, I've had the privilege of working with healthcare systems that serve millions of
                patients, where data accuracy and system reliability are paramount. I take pride in my ability to
                improve system performance significantly while maintaining the highest standards of data integrity.
              </p>

              <p className="text-lg leading-relaxed text-pretty text-justify">
                When I'm not diving deep into data pipelines or crafting SQL queries, I enjoy exploring the intersection
                of technology and creativity. I believe that the best data solutions come from understanding both the
                technical requirements and the human stories behind the numbers.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What I Enjoy</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl">{interest.emoji}</span>
                    <span className="font-medium">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
