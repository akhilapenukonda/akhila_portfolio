const Navbar = () => {
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']
  
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-white">Akhila Penukonda</h1>
          </div>
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="ml-8 text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
