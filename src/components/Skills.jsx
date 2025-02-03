const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "Java", "JavaScript"]
    },
    {
      title: "Front-End and Frameworks",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Angular", "TypeScript", "SpringBoot Framework", "Node.js", "JSON"]
    },
    {
      title: "Back-End and Databases",
      skills: ["MongoDB", "JDBC", "NodeJS", "SQL", "Flask", "Django", "RESTful API", "NoSQL", "RDBMS", "Cassandra", "ETL"]
    },
    {
      title: "DevOps and Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Amazon Web Service (AWS)", "Google Cloud Platform (GCP)"]
    },
    {
      title: "Data Science and Analytics",
      skills: ["Tableau", "Numpy", "MS Excel", "Power BI", "TensorFlow", "Matplotlib", "Pandas", "Scikit-learn", "PyTorch"]
    },
    {
      title: "Other Tools",
      skills: ["Git"]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-transparent px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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

export default Skills
