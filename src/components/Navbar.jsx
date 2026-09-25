import { useState } from "react";
import MobileMenu from "./MenuMobile.jsx";
import {MessageCircle, MenuIcon} from "lucide-react"

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Notre flotte", href: "#fleet" },
  { label: "Hôtels & entreprises", href: "#partners" },
  { label: "Contact", href: "#contact" }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fr");

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
        <div className="container-site flex h-16 items-center gap-6">
          <a
            href="#hero"
            className="font-display text-[1.05rem] font-extrabold leading-none tracking-[0.02em]"
          >
            <img src="/logo-black.png" alt="Logo Societe" width={75} />
          </a>

          <div className="hidden flex-1 items-center gap-8 text-[0.9rem] font-semibold lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent px-0.5 py-2 transition-colors hover:border-red"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div
              className="flex overflow-hidden rounded-pill border border-line font-display text-[0.8rem] font-bold"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`border-0 px-3 py-1.75 transition-colors ${
                  language === "fr"
                    ? "bg-black text-white"
                    : "bg-transparent text-text"
                }`}
              >
                FR
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`border-0 px-3 py-1.75 transition-colors ${
                  language === "en"
                    ? "bg-black text-white"
                    : "bg-transparent text-text"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#"
              className="btn btn-primary btn-sm hidden xl:inline-flex"
            >
              <MessageCircle />
              RÉSERVER SUR WHATSAPP
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex border-0 bg-transparent p-1.5 lg:hidden"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}