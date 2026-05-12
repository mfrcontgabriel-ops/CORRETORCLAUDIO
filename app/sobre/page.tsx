import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, TrendingUp, Shield, Users, Star, MapPin } from "lucide-react"
import { stats } from "@/lib/data"
import { getWhatsAppLink } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Claudio Ribeiro",
  description:
    "Conheça Claudio Ribeiro, corretor especializado em imóveis de alto padrão em Itajaí e Praia Brava com mais de 12 anos de experiência.",
}

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Cada negociação é tratada com o mais alto nível de profissionalismo e dedicação.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência total em todas as etapas. Você sabe exatamente o que está fazendo.",
  },
  {
    icon: TrendingUp,
    title: "Resultado",
    description: "Focado em encontrar o imóvel ideal ou o melhor comprador para o seu imóvel.",
  },
  {
    icon: Users,
    title: "Relacionamento",
    description: "Atendimento personalizado. Cada cliente é único e merece atenção exclusiva.",
  },
]

const timeline = [
  { year: "2012", event: "Início da carreira imobiliária em Itajaí" },
  { year: "2015", event: "Especialização em imóveis de alto padrão" },
  { year: "2018", event: "Reconhecimento como Top Corretor CRECI-SC" },
  { year: "2020", event: "Expansão para Praia Brava e litoral catarinense" },
  { year: "2022", event: "Mais de R$ 1 bilhão em negociações" },
  { year: "2024", event: "Lançamento da plataforma digital premium" },
]

export default function SobrePage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1920&q=80"
            alt="Itajaí"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container-premium">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Sobre
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Claudio Ribeiro
              <br />
              <span className="text-gradient-gold">Corretor Premium</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Especialista em imóveis de alto padrão em Itajaí e Praia Brava.
              12 anos de experiência, mais de 500 transações realizadas e
              um compromisso inabalável com a excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Claudio Ribeiro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass-dark p-5">
                  <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Claudio Ribeiro</p>
                  <p className="text-white font-medium text-lg">Corretor de Imóveis</p>
                  <p className="text-white/40 text-sm mt-1">CRECI-SC 12345-F</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
                    ))}
                    <span className="text-white/40 text-xs ml-2">5.0 no Google</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A84C]/20 hidden lg:block" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Minha História
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Paixão por imóveis,
                <br />dedicação ao cliente
              </h2>

              <div className="space-y-4 text-white/60 leading-relaxed mb-8">
                <p>
                  Nascido e criado em Itajaí, Claudio Ribeiro cresceu vendo o desenvolvimento
                  acelerado da cidade portuária mais importante de Santa Catarina. Desde cedo,
                  entendeu o potencial do mercado imobiliário local.
                </p>
                <p>
                  Com formação em Administração e especialização em Gestão Imobiliária, iniciou
                  sua carreira em 2012 com foco em imóveis residenciais. Em poucos anos, consolidou-se
                  como referência no segmento de alto padrão em Praia Brava e arredores.
                </p>
                <p>
                  Hoje, com mais de 12 anos de mercado, Claudio oferece uma assessoria completa
                  e personalizada, do primeiro contato à entrega das chaves — com honestidade,
                  transparência e resultados comprovados.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2"
                >
                  Falar com Claudio
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#080808] p-8 text-center">
                <span className="text-4xl lg:text-5xl font-light text-gradient-gold">{stat.value}</span>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-white/5">
        <div className="container-premium">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Valores
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Princípios que guiam meu trabalho
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-white/5 p-8 text-center hover:border-[#C9A84C]/20 transition-colors"
              >
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-medium text-lg mb-3">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium">
          <div className="flex items-center gap-3 mb-12">
            <div className="divider-gold" />
            <h2 className="text-3xl font-light text-white">Trajetória</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[120px] top-0 bottom-0 w-px bg-white/5 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-0">
                  <span className="text-[#C9A84C] font-light text-lg w-[80px] md:w-[100px] shrink-0">
                    {item.year}
                  </span>
                  <div className="hidden md:flex items-center justify-center w-20 shrink-0">
                    <div className="w-2 h-2 bg-[#C9A84C] rounded-full" />
                  </div>
                  <p className="text-white/70 text-sm md:text-base">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="container-premium text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Pronto para encontrar
              <br />
              <span className="text-gradient-gold">seu imóvel ideal?</span>
            </h2>
            <p className="text-white/50 mb-8">
              Entre em contato agora e receba um atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 text-xs uppercase tracking-widest inline-flex items-center gap-2 justify-center"
              >
                Falar com Claudio
                <ArrowRight size={14} />
              </a>
              <Link
                href="/imoveis"
                className="btn-outline-gold px-8 py-4 text-xs uppercase tracking-widest inline-flex items-center justify-center"
              >
                Ver Imóveis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
