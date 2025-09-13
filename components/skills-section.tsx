export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["SQL", "Python", "R"],
    },
    {
      category: "Libraries & Frameworks",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    },
    {
      category: "Databases & Tools",
      skills: ["Microsoft SQL Server", "MySQL", "MS - Excel", "Power BI", "Tableau", "MS - Office"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS SageMaker", "Microsoft Visual Studio", "GitHub", "Docker", "SoapUI", "Dynatrace"],
    },
  ]

  const getSkillColor = (index: number) => {
    const colors = [
      "bg-green-600 text-white", // Dark green background with white text
      "bg-green-100 text-green-800", // Light green background with dark green text
      "bg-blue-600 text-white", // Blue background with white text
      "bg-orange-500 text-white", // Orange background with white text
      "bg-gray-200 text-gray-800", // Light gray background with dark gray text
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">Skills & Technologies</h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full font-medium transition-transform hover:scale-105 ${getSkillColor(categoryIndex)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
