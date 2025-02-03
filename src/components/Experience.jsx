const Experience = () => {
  const experiences = [
    {
      company: "Quadrant Technologies",
      position: "Junior Data Engineer Intern",
      period: "Sep 2024 – Dec 2024",
      responsibilities: [
        "Designed and implemented ETL workflows using PySpark and SQL, preprocessing large datasets for AWS and Azure cloud platforms.",
        "Built, deployed, and optimized machine learning models using TensorFlow and PyTorch, integrating models with Docker.",
        "Developed dynamic dashboards and business intelligence reports using Power BI.",
        "Collaborated with cross-functional teams to translate business requirements into scalable cloud solutions."
      ]
    },
    {
      company: "George Mason University",
      position: "Teaching Assistant",
      period: "Sep 2023 – May 2024",
      responsibilities: [
        "Designed and delivered SQL assignments focusing on query optimization and performance tuning.",
        "Mentored students in deploying applications using Git, CI/CD pipelines, and cloud environments.",
        "Guided students in understanding data analysis and AI modeling concepts."
      ]
    },
    {
      company: "Hippo Cloud Technologies",
      position: "Software Data Engineer",
      period: "July 2021 – July 2022",
      responsibilities: [
        "Developed and maintained scalable data pipelines using Python and SQL.",
        "Created web solutions with React and integrated RESTful APIs.",
        "Designed ETL workflows and implemented accessibility standards."
      ]
    },
    {
      company: "Dhyanahitha Organisation",
      position: "Back-End Developer Intern",
      period: "Apr 2021 – June 2021",
      responsibilities: [
        "Engineered a responsive web app using React and Node.js with MongoDB.",
        "Automated testing and deployment pipelines with Jenkins.",
        "Developed microservices architecture and implemented Git-based version control."
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-purple-500/20">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">{exp.position}</h3>
                  <p className="text-lg font-medium text-white">{exp.company}</p>
                </div>
                <p className="text-purple-300">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
