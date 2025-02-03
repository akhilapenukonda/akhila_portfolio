const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-white py-8 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">Akhila Penukonda</p>
          <p className="text-purple-400 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
