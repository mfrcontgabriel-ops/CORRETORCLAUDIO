import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import { getWhatsAppLink } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Claudio Ribeiro para comprar, vender ou alugar imóveis de alto padrão em Itajaí e Praia Brava.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(47) 99999-9999",
    href: "tel:+5547999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "claudio@claudioribeiro.com.br",
    href: "mailto:claudio@claudioribeiro.com.br",
  },
  {
    icon: MapPin,
    label: "Escritório",
    value: "Rua Hercílio Luz, 800 — Itajaí, SC",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Seg–Sex: 8h–18h | Sáb: 9h–13h",
    href: null,
  },
]

export default function ContatoPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-[#080808] border-b border-white/5 py-20">
        <div className="container-premium">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
              Contato
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Vamos conversar
          </h1>
          <p className="text-white/50 text-lg max-w-lg">
            Atendimento personalizado para compra, venda, locação e investimentos imobiliários.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-light text-white mb-2">Envie sua mensagem</h2>
              <p className="text-white/40 text-sm mb-8">
                Respondo em até 2 horas no horário comercial.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light text-white mb-8">Ou fale diretamente</h2>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-gold p-6 flex items-center gap-4 mb-8 hover:border-[#C9A84C]/40 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover:text-[#C9A84C] transition-colors">
                    Resposta imediata via WhatsApp
                  </p>
                  <p className="text-white/40 text-sm">(47) 99999-9999</p>
                </div>
                <ArrowRight size={16} className="text-[#C9A84C]" />
              </a>

              {/* Info Items */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-[#111111] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="w-9 h-9 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white/80 hover:text-[#C9A84C] transition-colors text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CRECI Badge */}
              <div className="mt-8 p-5 border border-white/5 text-center">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Registro Profissional</p>
                <p className="text-[#C9A84C] font-medium">CRECI-SC 12345-F</p>
                <p className="text-white/30 text-xs mt-1">Corretor habilitado e regularizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
