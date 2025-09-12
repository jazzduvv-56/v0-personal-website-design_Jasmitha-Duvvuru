"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance whitespace-nowrap">
                {"Hi, I'm "}
                <span className="text-primary">Jasmitha Duvvuru</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">Data Engineer</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-justify">
              Results-oriented Data Engineer with 3+ years of experience building and optimizing data pipelines for
              healthcare systems serving millions. Proven ability to clean and model data (SQL, Python), build
              dashboards (Power BI), and improve system performance by 30–40% through automation and root-cause
              analysis. Collaborative and detail-focused, I thrive at translating messy datasets into clear insights to
              support decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8 py-6">
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/jasmitha-profile.png"
                  alt="Jasmitha Duvvuru - Data Engineer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
