import LeadForm from "@/components/LeadForm";

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Award, TrendingUp, Shield, Star } from "lucide-react"
import PropertyCard from "@/components/PropertyCard"
import SearchBar from "@/components/SearchBar"
import { properties, stats, blogPosts } from "@/lib/data"
import { formatCurrency, getWhatsAppLink } from "@/lib/utils"

export default function HomePage() {
  const featuredProperties = properties.filter((p) => p.isFeatured).slice(0, 3)
  const highlightProperty = properties.find((p) => p.isHighlight)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/itajai.jpg"
            alt="Praia Brava Itajaí"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 right-[15%] w-2 h-2 rounded-full bg-[#C9A84C]/40 hidden lg:block" />

        {/* Content */}
        <div className="relative container-premium pb-32 pt-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Imóveis de Alto Padrão
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Viva o melhor de{" "}
              <span className="text-gradient-gold font-normal">Itajaí</span>
              <br />e{" "}
              <span className="text-gradient-gold font-normal">Praia Brava</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
              Apartamentos, coberturas e penthouses exclusivos nas melhores
              localizações do litoral catarinense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/imoveis"
                className="btn-gold px-8 py-4 text-sm uppercase tracking-widest flex items-center gap-2 justify-center"
              >
                Ver Imóveis
                <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-8 py-4 text-sm uppercase tracking-widest flex items-center gap-2 justify-center"
              >
                Falar com Corretor
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="relative -mt-20 z-10">
        <div className="container-premium">
          <SearchBar />
        </div>
      </section>

      {/* STATS */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] p-8 flex flex-col items-center text-center"
              >
                <span className="text-4xl lg:text-5xl font-light text-gradient-gold mb-2">
                  {stat.value}
                </span>
                <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="section-padding border-t border-white/5">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Destaque
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Imóveis em Destaque
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
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT PROPERTY — full width */}
      {highlightProperty && (
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src={highlightProperty.images[0]}
            alt={highlightProperty.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent" />

          <div className="relative h-full container-premium flex items-center">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] px-3 py-1.5 border border-[#C9A84C]/40 text-[#C9A84C] tracking-widest uppercase">
                  Exclusivo
                </span>
                <span className="text-[10px] px-3 py-1.5 bg-[#C9A84C] text-black tracking-widest uppercase font-bold">
                  Destaque
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
                {highlightProperty.title}
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-6 line-clamp-3">
                {highlightProperty.description}
              </p>

              <div className="flex items-center gap-6 mb-8 text-white/50 text-sm">
                <span>{highlightProperty.specs.area}m²</span>
                <span className="w-px h-4 bg-white/20" />
                <span>{highlightProperty.specs.suites || highlightProperty.specs.bedrooms} suítes</span>
                <span className="w-px h-4 bg-white/20" />
                <span>{highlightProperty.specs.parkingSpots} vagas</span>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Valor</p>
                  <p className="text-[#C9A84C] text-2xl font-semibold">
                    {formatCurrency(highlightProperty.price)}
                  </p>
                </div>
                <Link
                  href={`/imoveis/${highlightProperty.slug}`}
                  className="btn-gold px-6 py-3 text-xs uppercase tracking-widest flex items-center gap-2"
                >
                  Ver Detalhes
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* NEIGHBORHOOD CARDS */}
      <section className="section-padding border-t border-white/5">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Explore a Região
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Os Melhores Bairros
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/imoveis?bairro=praia-brava" className="group relative aspect-[16/9] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Praia Brava"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Praia Brava</p>
                <h3 className="text-white text-2xl font-light">O Destino Premium</h3>
                <p className="text-white/50 text-sm mt-1">
                  {properties.filter(p => p.location.neighborhood === "Praia Brava").length} imóveis disponíveis
                </p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="btn-gold text-[10px] px-4 py-2 uppercase tracking-widest">
                  Explorar
                </span>
              </div>
            </Link>

            <Link href="/imoveis?bairro=centro" className="group relative aspect-[16/9] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80"
                alt="Centro Itajaí"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Centro</p>
                <h3 className="text-white text-2xl font-light">Itajaí Urbano</h3>
                <p className="text-white/50 text-sm mt-1">
                  {properties.filter(p => p.location.neighborhood === "Centro").length} imóveis disponíveis
                </p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="btn-gold text-[10px] px-4 py-2 uppercase tracking-widest">
                  Explorar
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CLAUDIO */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Por que Claudio Ribeiro
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Experiência e Exclusividade
                <br />
                <span className="text-gradient-gold">em cada negociação</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Com mais de 12 anos no mercado imobiliário premium de Itajaí e Praia Brava,
                Claudio Ribeiro oferece uma assessoria personalizada e completa para quem busca
                os melhores imóveis da região.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Award, text: "CRECI ativo e especialização em imóveis de alto padrão" },
                  { icon: TrendingUp, text: "Análise completa de valorização e investimento imobiliário" },
                  { icon: Shield, text: "Assessoria jurídica e financeira inclusa em cada transação" },
                  { icon: Star, text: "Atendimento exclusivo e personalizado para cada cliente" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#C9A84C]" />
                    </div>
                    <p className="text-white/60 text-sm">{text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/sobre"
                className="btn-outline-gold px-8 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2"
              >
                Conhecer Claudio
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Claudio Ribeiro — Corretor Premium"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass-dark p-4">
                  <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">Claudio Ribeiro</p>
                  <p className="text-white font-medium">Corretor de Imóveis</p>
                  <p className="text-white/40 text-xs mt-0.5">CRECI-SC 12345-F</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#C9A84C]/20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#C9A84C]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section-padding border-t border-white/5">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                  Blog
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Mercado Imobiliário
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-white/50 hover:text-[#C9A84C] transition-colors uppercase tracking-widest"
            >
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-[#C9A84C]/20 transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] px-2.5 py-1 bg-[#C9A84C] text-black font-semibold tracking-widest uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white/30 text-xs mb-2">{post.readTime} min de leitura</p>
                  <h3 className="text-white font-medium text-base leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section className="section-padding bg-[#080808] border-t border-white/5">
        <div className="container-premium text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
                Investidores
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Invista no mercado imobiliário
              <br />
              <span className="text-gradient-gold">de maior crescimento em SC</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Itajaí e Praia Brava registram valorizações de até 35% ao ano.
              Conheça as melhores oportunidades de investimento disponíveis agora.
            </p>
            <Link
              href="/investimentos"
              className="btn-gold px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2"
            >
              Conhecer Oportunidades
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-white/5">
  <div className="container-premium">
    <div className="max-w-2xl">
      <h2 className="text-3xl text-white mb-6">
        Fale com um especialista
      </h2>

      <LeadForm />
    </div>
  </div>
</section>
      {/* FINAL CTA */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Imóvel de Luxo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />

        <div className="relative container-premium text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Encontre seu imóvel
            <br />
            <span className="text-gradient-gold">dos sonhos hoje</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Atendimento personalizado. Resultados exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2 justify-center"
            >
              Falar com Claudio
              <ArrowRight size={16} />
            </a>
            <Link
              href="/imoveis"
              className="btn-outline-gold px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2 justify-center"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
