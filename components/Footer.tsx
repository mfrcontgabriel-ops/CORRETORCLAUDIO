import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react"
import { getWhatsAppLink } from "@/lib/utils"

const footerLinks = {
  imoveis: [
    { label: "Todos os Imóveis", href: "/imoveis" },
    { label: "À Venda", href: "/imoveis?status=venda" },
    { label: "Para Alugar", href: "/imoveis?status=aluguel" },
    { label: "Temporada", href: "/imoveis?status=temporada" },
    { label: "Lançamentos", href: "/imoveis?filter=new" },
  ],
  empresa: [
    { label: "Sobre Claudio", href: "/sobre" },
    { label: "Investimentos", href: "/investimentos" },
    { label: "Blog Imobiliário", href: "/blog" },
    { label: "Contato", href: "/contato" },
    { label: "Área do Cliente", href: "/admin" },
  ],
  bairros: [
    { label: "Praia Brava", href: "/imoveis?bairro=praia-brava" },
    { label: "Centro Itajaí", href: "/imoveis?bairro=centro" },
    { label: "Ressacada", href: "/imoveis?bairro=ressacada" },
    { label: "São Vicente", href: "/imoveis?bairro=sao-vicente" },
    { label: "Cordeiros", href: "/imoveis?bairro=cordeiros" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="container-premium py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-2">
              Encontre seu imóvel ideal
            </p>
            <h3 className="text-2xl font-light text-white">
              Fale com Claudio Ribeiro agora
            </h3>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-2 whitespace-nowrap"
          >
            Iniciar Conversa
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-lg font-bold tracking-widest text-white uppercase">
                CLAUDIO RIBEIRO
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#C9A84C] uppercase font-medium">
                Imóveis Premium
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Especialista em imóveis de alto padrão em Itajaí e Praia Brava.
              12 anos de experiência, mais de 500 imóveis negociados.
            </p>
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-[#C9A84C] transition-colors text-sm"
              >
                <MapPin size={14} className="text-[#C9A84C] shrink-0" />
                Rua Hercílio Luz, 800 — Itajaí, SC
              </a>
              <a
                href="tel:+5547999999999"
                className="flex items-center gap-3 text-white/40 hover:text-[#C9A84C] transition-colors text-sm"
              >
                <Phone size={14} className="text-[#C9A84C] shrink-0" />
                (47) 99999-9999
              </a>
              <a
                href="mailto:claudio@claudioribeiro.com.br"
                className="flex items-center gap-3 text-white/40 hover:text-[#C9A84C] transition-colors text-sm"
              >
                <Mail size={14} className="text-[#C9A84C] shrink-0" />
                claudio@claudioribeiro.com.br
              </a>
            </div>
          </div>

          {/* Imóveis */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-6">
              Imóveis
            </h4>
            <ul className="space-y-3">
              {footerLinks.imoveis.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bairros & Social */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-6">
              Regiões
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.bairros.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase font-medium mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-premium py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Claudio Ribeiro Imóveis. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            CRECI-SC 12345-F
          </p>
        </div>
      </div>
    </footer>
  )
}
