import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, MapPin, BarChart3, Building2, DollarSign, Shield } from "lucide-react"
import PropertyCard from "@/components/PropertyCard"
import { properties } from "@/lib/data"
import { getWhatsAppLink } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investimentos Imobiliários",
  description:
    "Invista em imóveis de alto padrão em Itajaí e Praia Brava. Análise de valorização, rentabilidade e as melhores oportunidades do litoral catarinense.",
}

const investmentTypes = [
  {
    icon: Building2,
    title: "Imóveis Residenciais",
    description: "Apartamentos e coberturas com alta demanda de aluguel e valorização consistente.",
    appreciation: "+28% a.a.",
  },
  {
    icon: BarChart3,
    title: "Imóveis na Planta",
    description: "Compra com entrada parcelada e potencial de valorização de 40–60% até a entrega.",
    appreciation: "+45% a.a.",
  },
  {
    icon: DollarSign,
    title: "Renda Passiva",
    description: "Imóveis para temporada em Praia Brava com retorno mensal garantido.",
    appreciation: "12–18% a.a.",
  },
  {
    icon: MapPin,
    title: "Terrenos Premium",
    description: "Terrenos em regiões em expansão com enorme potencial de valorização.",
    appreciation: "+35% a.a.",
  },
]

const marketData = [
  { label: "Valorização média em Praia Brava", value: "35%", period: "ao ano" },
  { label: "Crescimento do Porto de Itajaí", value: "18%", period: "ao ano" },
  { label: "Demanda por imóveis de luxo", value: "+120%", period: "nos últimos 3 anos" },
  { label: "Retorno médio em temporada", value: "15%", period: "ao ano" },
]

const investmentProperties = properties.filter(
  (p) => p.category === "investimento" || p.type === "terreno" || p.isHighlight
).slice(0, 3)

export default function InvestimentosPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="Investimento Imobiliário"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent" />

        <div className="relative container-premium">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Investimentos
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              Seu patrimônio cresce
              <br />
              <span className="text-gradient-gold">com Itajaí e Praia Brava</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              O litoral catarinense é o mercado imobiliário de maior crescimento do Brasil.
              Conheça as oportunidades que Claudio Ribeiro seleciona para investidores exigentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppLink("Olá, Claudio! Tenho interesse em investir em imóveis em Itajaí e Praia Brava. Poderia me apresentar as melhores oportunidades?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 text-sm uppercase tracking-widest flex items-center gap-2 justify-center"
              >
                Falar com Especialista
                <ArrowRight size={16} />
              </a>
              <Link
                href="#oportunidades"
                className="btn-outline-gold px-8 py-4 text-sm uppercase tracking-widest flex items-center gap-2 justify-center"
              >
                Ver Oportunidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Dados do Mercado
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Por que investir na região?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {marketData.map((item, i) => (
              <div key={i} className="bg-[#080808] p-8 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <TrendingUp size={16} className="text-[#C9A84C]" />
                </div>
                <p className="text-4xl font-light text-gradient-gold mb-2">{item.value}</p>
                <p className="text-[#C9A84C] text-xs uppercase tracking-wider mb-1">{item.period}</p>
                <p className="text-white/40 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="section-padding border-t border-white/5">
        <div className="container-premium">
          <div className="flex items-center gap-3 mb-12">
            <div className="divider-gold" />
            <h2 className="text-3xl font-light text-white">Modalidades de Investimento</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentTypes.map(({ icon: Icon, title, description, appreciation }, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-white/5 p-8 hover:border-[#C9A84C]/20 transition-all group"
              >
                <div className="w-12 h-12 border border-[#C9A84C]/20 flex items-center justify-center mb-6 group-hover:border-[#C9A84C]/50 transition-colors">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <div className="text-xs tracking-widest text-[#C9A84C] uppercase mb-3 font-medium">
                  {appreciation}
                </div>
                <h3 className="text-white font-medium text-base mb-3">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Here */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Vantagens
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Itajaí: o mercado
                <br />
                <span className="text-gradient-gold">mais aquecido do Sul</span>
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: Shield,
                    title: "Porto Estratégico",
                    text: "Maior porto da América Latina em movimento de contêineres, gerando economia e empregos constantes.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Crescimento Imobiliário",
                    text: "Valorização média de 28% ao ano nos últimos 5 anos, superando Florianópolis e Balneário Camboriú.",
                  },
                  {
                    icon: MapPin,
                    title: "Praia Brava Exclusiva",
                    text: "Destino premium com praias preservadas e público de alto poder aquisitivo. Demanda sempre crescente.",
                  },
                  {
                    icon: DollarSign,
                    title: "Alta Temporada Lucrativa",
                    text: "Retorno de 150–200% em temporada para imóveis bem localizados em Praia Brava.",
                  },
                ].map(({ icon: Icon, title, text }, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Investimento Imobiliário"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark p-5">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Média de Valorização</p>
                <p className="text-[#C9A84C] text-3xl font-light">+35% a.a.</p>
                <p className="text-white/40 text-xs mt-1">Praia Brava — Últimos 5 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Properties */}
      <section id="oportunidades" className="section-padding border-t border-white/5">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Oportunidades
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Selecionados para Investidores
              </h2>
            </div>
            <Link
              href="/imoveis"
              className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-white/50 hover:text-[#C9A84C] transition-colors uppercase tracking-widest"
            >
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium">
          <div className="glass-gold p-12 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Consultoria Gratuita
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Receba uma análise personalizada
              <br />
              <span className="text-gradient-gold">do seu potencial de retorno</span>
            </h2>
            <p className="text-white/50 mb-8">
              Claudio prepara uma análise completa de ROI para os imóveis do seu perfil.
              Gratuito e sem compromisso.
            </p>
            <a
              href={getWhatsAppLink("Olá, Claudio! Quero receber uma análise de investimento personalizada para imóveis em Itajaí/Praia Brava.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2"
            >
              Solicitar Análise Gratuita
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
