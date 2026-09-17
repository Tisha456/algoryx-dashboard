import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Technology", id: "technology" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 px-6 py-4 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold"
        >
          🌱 Agro<span className="text-green-400">X</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-slate-300 transition hover:text-green-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-slate-300 transition hover:bg-green-400/10 hover:text-green-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;