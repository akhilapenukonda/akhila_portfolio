const Projects = () => {
  const projects = [
    {
      title: "Enterprise Data Lake Solution with AWS",
      date: "December 2024",
      description: [
        "Designed and implemented an AWS-based data lake using Medallion Architecture (Bronze, Silver, Gold) for secure storage, processing, and analytics.",
        "Built scalable ETL pipelines with Apache Spark, AWS EMR, Glue and Lambda, integrating data from relational databases and streaming sources.",
        "Secured data with IAM roles, KMS encryption, and Glue Data Catalog, enabling advanced analytics with Redshift and QuickSight."
      ],
      technologies: ["AWS", "Apache Spark", "ETL", "Lambda", "Redshift"]
    },
    {
      title: "Predictive Maintenance Dashboard",
      date: "November 2024",
      description: [
        "Designed a predictive maintenance dashboard using SQL to analyze historical data from CMMS systems.",
        "Built dynamic PowerBI visualizations to display real-time equipment status and failure predictions.",
        "Improved operational efficiency and reduced downtime by enabling data-driven maintenance planning."
      ],
      technologies: ["SQL", "PowerBI", "Data Analysis", "Predictive Analytics"]
    },
    {
      title: "Handwritten Digit Recognition",
      description: [
        "Created a custom AdaBoost algorithm with decision stumps to maximize model accuracy.",
        "Utilized TensorFlow and Keras with CNN architectures like VGG19 and Inception V3 for digit classification."
      ],
      technologies: ["TensorFlow", "Keras", "CNN", "Machine Learning", "Python"]
    },
    {
      title: "Job Recommendation System",
      description: [
        "Built a Flask-based recommendation engine utilizing NLP and machine learning.",
        "Integrated structured datasets with Pyomo decision models and geocoding."
      ],
      technologies: ["Flask", "NLP", "Python", "Machine Learning"]
    },
    {
      title: "Student Survey Web Application",
      description: [
        "Engineered a web application using ReactJS and Node.js for managing student surveys.",
        "Deployed microservices using Docker and Kubernetes for orchestration.",
        "Implemented CI/CD pipeline with Jenkins for automated deployments."
      ],
      technologies: ["ReactJS", "Node.js", "Docker", "Kubernetes", "Jenkins"]
    }
  ]

  return (
    <section id="projects" className="py-16 bg-transparent px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-purple-500/20">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                {project.date && (
                  <p className="text-purple-300 text-sm mt-1">{project.date}</p>
                )}
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
