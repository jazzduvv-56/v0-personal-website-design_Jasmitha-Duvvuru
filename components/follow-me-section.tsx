import { Github, Linkedin } from "lucide-react"

export function FollowMeSection() {
  const socialLinks = [
    {
      name: "GitHub Profile",
      icon: Github,
      url: "https://github.com/jazzduvv-56",
      description: "Check out my code repositories and projects",
    },
    {
      name: "LinkedIn Profile",
      icon: Linkedin,
      url: "https://linkedin.com/in/jasmitha-duvvuru",
      description: "Connect with me professionally",
    },
  ]

  return (
    <section id="follow-me" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Follow Me</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Stay connected and follow my journey in data engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors group"
              >
                <IconComponent className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{link.name}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
