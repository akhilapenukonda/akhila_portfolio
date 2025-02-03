const About = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Name and Title */}
            <div className="mb-12">
              <h1 className="text-7xl font-bold text-white mb-4">
                Akhila Penukonda
              </h1>
              <h2 className="text-4xl text-gray-400 font-light">
                Computer Science, MS 
              </h2>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="https://www.linkedin.com/in/penukonda-akhila-02074b186/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900/50 text-white px-6 py-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:apenukon@gmu.edu"
                className="flex items-center gap-2 bg-gray-900/50 text-white px-6 py-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900/50 text-white px-6 py-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>

            {/* About Text */}
            <div>
              <p className="text-xl text-gray-300 leading-relaxed">
                I am a Master's student in Computer and Information Sciences at George Mason University, 
                with a passion for transforming complex challenges into elegant solutions. My work spans 
                across software development, data engineering, and cloud technologies, with expertise in 
                building scalable applications and implementing data-driven solutions.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              <img
                src="/image.png"
                alt="Akhila Penukonda"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              {/* Optional decorative element */}
              <div className="absolute -inset-4 bg-purple-500/10 rounded-2xl -z-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
