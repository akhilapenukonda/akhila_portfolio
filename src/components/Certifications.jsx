const Certifications = () => {
  const certificates = [
    {
      title: "Goldman Sachs Software Engineering Virtual Experience Program",
      issuer: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_kGSB79DdvP3SgQJCm_1724177256735_completion_certificate.pdf ",
      icon: "🏆"
    },
    {
      title: "Cryptography",
      issuer: "University of Maryland, College Park",
      link: "https://www.coursera.org/account/accomplishments/certificate/BXVYJDSSMC8B",
      icon: "🔐"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/certificate/WTXAJSLNBLGC",
      icon: "🐍"
    }
  ]

  return (
    <section id="certifications" className="py-16 bg-transparent px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-purple-500/20 
                       transform transition-all duration-300 hover:scale-105 hover:border-purple-400"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{cert.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-purple-300">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Click to view certificate →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications 