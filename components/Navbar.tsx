"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn, getWhatsAppLink } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/investimentos", label: "Investimentos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-dark border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-premium flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl font-bold tracking-widest text-white uppercase transition-colors group-hover:text-[#C9A84C]">
              CLAUDIO RIBEIRO
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#C9A84C] uppercase font-medium">
              Imóveis Premium
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wider uppercase font-medium transition-all duration-300 relative group",
                  pathname === link.href
                    ? "text-[#C9A84C]"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5547999999999"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A84C] transition-colors"
            >
              <Phone size={14} />
              <span className="tracking-wider">(47) 99999-9999</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs px-5 py-2.5 rounded-none uppercase tracking-widest"
            >
              Falar com Corretor
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/80 hover:text-[#C9A84C] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm bg-[#0A0A0A] border-l border-white/5 transition-transform duration-500 flex flex-col",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <span className="text-[10px] tracking-[0.35em] text-[#C9A84C] uppercase font-medium">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-1 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between py-4 border-b border-white/5 text-lg font-light tracking-wider transition-colors",
                  pathname === link.href ? "text-[#C9A84C]" : "text-white/70 hover:text-white"
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
                <span className="text-[#C9A84C] text-sm">→</span>
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-white/5 space-y-3">
            <a
              href="tel:+5547999999999"
              className="flex items-center gap-3 text-white/60 text-sm"
            >
              <Phone size={14} className="text-[#C9A84C]" />
              (47) 99999-9999
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center py-3 text-xs uppercase tracking-widest block"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
