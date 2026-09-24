function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              🌱 Agro<span className="text-green-400">X</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Exploring smart agriculture through artificial intelligence,
              data analytics and 3D technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#home" className="text-slate-400 transition hover:text-green-400">
                Home
              </a>

              <a href="#about" className="text-slate-400 transition hover:text-green-400">
                About
              </a>

              <a href="#features" className="text-slate-400 transition hover:text-green-400">
                Features
              </a>

              <a href="#technology" className="text-slate-400 transition hover:text-green-400">
                How It Works
              </a>

              <a href="#model" className="text-slate-400 transition hover:text-green-400">
                3D Experience
              </a>

              <a href="#contact" className="text-slate-400 transition hover:text-green-400">
                Contact
              </a>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-lg font-semibold">
              Technology
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <p>Artificial Intelligence</p>
              <p>Data Analytics</p>
              <p>Three.js & React Three Fiber</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
            </div>
          </div>

          {/* 3D Asset */}
          <div>
            <h3 className="text-lg font-semibold">
              3D Asset
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              AgroSence smart-agriculture model featuring solar-powered
              sensing technology, integrated into the website using
              Three.js and React Three Fiber.
            </p>

            <a
              href="https://github.com/Tisha456/algoryx-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-green-400/40 px-5 py-2 text-sm font-semibold text-green-400 transition hover:bg-green-400 hover:text-slate-950"
            >
              View GitHub
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 AgroX. All rights reserved.
          </p>

          <p>
            Algoryx Week 3 • 3D Web Experience
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;