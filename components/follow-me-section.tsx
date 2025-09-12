import { Github, Linkedin, ExternalLink } from "lucide-react"

export function FollowMeSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jasmitha-duvvuru",
      icon: Github,
      description: "Check out my code repositories and open source contributions",
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jasmitha-duvvuru",
      icon: Linkedin,
      description: "Connect with me professionally and see my career journey",
      color: "hover:bg-blue-600 hover:text-white",
    },
  ]

  return (
    <section id="follow-me" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Follow Me</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay connected and follow my journey in data engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${link.color} border-2 border-transparent hover:border-current`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-current transition-colors duration-300" />
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-current transition-colors duration-300 ml-4">
                      {link.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                </div>
                <p className="text-gray-600 group-hover:text-current transition-colors duration-300 text-justify">
                  {link.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
