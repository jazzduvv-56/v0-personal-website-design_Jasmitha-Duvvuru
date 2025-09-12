import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Chicago City Crime Analysis",
      description:
        "Comprehensive analysis of Chicago crime data using Python and SQL to identify patterns, trends, and hotspots. Built interactive dashboards for law enforcement decision-making.",
      image: "/chicago-crime-data-visualization-dashboard.jpg",
      technologies: ["Python", "SQL", "Pandas", "Matplotlib", "Power BI"],
      github: "#",
      demo: "#",
    },
    {
      title: "S&P 500 Prediction",
      description:
        "Machine learning model to predict S&P 500 stock movements using historical data and technical indicators. Achieved 75% accuracy using ensemble methods.",
      image: "/stock-market-prediction-charts-and-graphs.jpg",
      technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#",
    },
    {
      title: "Payment and Compliance Management System",
      description:
        "End-to-end data pipeline for healthcare payment processing and compliance monitoring. Automated reporting reduced manual work by 60%.",
      image: "/healthcare-payment-system-dashboard.jpg",
      technologies: ["SQL Server", "Python", "Power BI", "Azure", "Docker"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">My Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
