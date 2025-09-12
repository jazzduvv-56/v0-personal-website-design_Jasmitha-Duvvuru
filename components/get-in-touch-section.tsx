import { Mail } from "lucide-react"

export function GetInTouchSection() {
  return (
    <section id="get-in-touch" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-100">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed text-justify max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
              Whether you're looking for a data engineer to join your team, need consultation on data pipeline
              optimization, or want to explore how data can drive better decision-making in your organization, I'd love
              to hear from you.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md inline-block">
              <p className="text-gray-600 mb-2">Drop me a line at</p>
              <a
                href="mailto:jd56@illinois.edu"
                className="text-2xl font-semibold text-green-600 hover:text-green-700 transition-colors duration-300"
              >
                jasmitha.duvvuru@email.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
