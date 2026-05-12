import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Bed, Bath, Car, Maximize, MapPin, Share2,
  Heart, ArrowLeft, CheckCircle, Phone, Calendar
} from "lucide-react"
import { properties } from "@/lib/data"
import { formatCurrency, getWhatsAppLink } from "@/lib/utils"
import PropertyCard from "@/components/PropertyCard"
import PropertyGallery from "@/components/PropertyGallery"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)
  if (!property) return {}
  return {
    title: property.title,
    description: property.description,
    openGraph: {
      images: [property.images[0]],
    },
  }
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)
  if (!property) notFound()

  const related = properties
    .filter((p) => p.id !== property.id && p.location.neighborhood === property.location.neighborhood)
    .slice(0, 3)

  const fallbackRelated = related.length
    ? related
    : properties.filter((p) => p.id !== property.id).slice(0, 3)

  const whatsappMsg = `Olá, Claudio! Tenho interesse no imóvel: ${property.title}. Poderia me passar mais informações?`
  const visitMsg = `Olá, Claudio! Gostaria de agendar uma visita ao imóvel: ${property.title}.`

  const statusLabel = { venda: "Venda", aluguel: "Aluguel", temporada: "Temporada" }[property.status]
  const priceLabel =
    property.status === "aluguel" || property.status === "temporada"
      ? `${formatCurrency(property.price)}/mês`
      : formatCurrency(property.price)

  return (
    <div className="pt-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-[#080808]">
        <div className="container-premium py-4 flex items-center gap-3 text-sm text-white/40">
          <Link href="/" className="hover:text-white/70 transition-colors">Início</Link>
          <span>/</span>
          <Link href="/imoveis" className="hover:text-white/70 transition-colors">Imóveis</Link>
          <span>/</span>
          <span className="text-white/70 line-clamp-1">{property.title}</span>
        </div>
      </div>

      {/* Gallery */}
      <PropertyGallery images={property.images} title={property.title} />

      {/* Content */}
      <div className="container-premium py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase bg-[#C9A84C] text-black">
                  {statusLabel}
                </span>
                {property.isExclusive && (
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase border border-[#C9A84C]/40 text-[#C9A84C]">
                    Exclusivo
                  </span>
                )}
                {property.isNew && (
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase bg-white text-black">
                    Novo
                  </span>
                )}
                <span className="text-xs text-white/30 ml-auto capitalize">
                  {property.type}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-light text-white mb-3">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-[#C9A84C]" />
                <span>
                  {property.location.address} — {property.location.neighborhood}, {property.location.city}-{property.location.state}
                </span>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 mb-10">
              {property.specs.bedrooms > 0 && (
                <div className="bg-[#111111] p-5 flex flex-col items-center text-center">
                  <Bed size={20} className="text-[#C9A84C] mb-2" />
                  <span className="text-white text-xl font-light">
                    {property.specs.suites || property.specs.bedrooms}
                  </span>
                  <span className="text-white/40 text-xs mt-0.5">
                    {property.specs.suites ? "suítes" : "quartos"}
                  </span>
                </div>
              )}
              {property.specs.bathrooms > 0 && (
                <div className="bg-[#111111] p-5 flex flex-col items-center text-center">
                  <Bath size={20} className="text-[#C9A84C] mb-2" />
                  <span className="text-white text-xl font-light">{property.specs.bathrooms}</span>
                  <span className="text-white/40 text-xs mt-0.5">banheiros</span>
                </div>
              )}
              <div className="bg-[#111111] p-5 flex flex-col items-center text-center">
                <Maximize size={20} className="text-[#C9A84C] mb-2" />
                <span className="text-white text-xl font-light">{property.specs.area}</span>
                <span className="text-white/40 text-xs mt-0.5">m² total</span>
              </div>
              {property.specs.parkingSpots > 0 && (
                <div className="bg-[#111111] p-5 flex flex-col items-center text-center">
                  <Car size={20} className="text-[#C9A84C] mb-2" />
                  <span className="text-white text-xl font-light">{property.specs.parkingSpots}</span>
                  <span className="text-white/40 text-xs mt-0.5">vagas</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Sobre o Imóvel
              </h2>
              <p className="text-white/60 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Diferenciais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#C9A84C] shrink-0" />
                    <span className="text-white/60 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-10">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Localização
              </h2>
              <div className="bg-[#111111] border border-white/5 p-4 flex items-start gap-3">
                <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">{property.location.address}</p>
                  <p className="text-white/40 text-sm">
                    {property.location.neighborhood} — {property.location.city}, {property.location.state}
                  </p>
                  <p className="text-white/30 text-xs mt-1">CEP: {property.location.zipCode}</p>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="mt-3 relative aspect-video bg-[#111111] border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px"
                  }}
                />
                <div className="text-center">
                  <MapPin size={32} className="text-[#C9A84C] mx-auto mb-2" />
                  <p className="text-white/40 text-sm">{property.location.neighborhood}, {property.location.city}</p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(property.location.address + ', ' + property.location.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] text-xs mt-2 hover:underline inline-block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Price Card */}
              <div className="bg-[#111111] border border-white/5 p-6">
                <p className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2">
                  {property.status === "venda" ? "Valor de venda" : "A partir de"}
                </p>
                <p className="text-3xl font-light text-white mb-1">{priceLabel}</p>
                {property.pricePerM2 && (
                  <p className="text-white/30 text-xs">{formatCurrency(property.pricePerM2)}/m²</p>
                )}

                <div className="mt-6 space-y-3">
                  <a
                    href={getWhatsAppLink(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full py-3.5 text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Tenho Interesse
                  </a>
                  <a
                    href={getWhatsAppLink(visitMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold w-full py-3.5 text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} />
                    Agendar Visita
                  </a>
                  <a
                    href="tel:+5547999999999"
                    className="w-full py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                  >
                    <Phone size={14} />
                    (47) 99999-9999
                  </a>
                </div>
              </div>

              {/* Broker Card */}
              <div className="bg-[#111111] border border-white/5 p-6 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                    alt="Claudio Ribeiro"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Claudio Ribeiro</p>
                  <p className="text-[#C9A84C] text-xs">Corretor Premium</p>
                  <p className="text-white/30 text-xs mt-0.5">CRECI-SC 12345-F</p>
                </div>
              </div>

              {/* Share */}
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all text-xs flex items-center justify-center gap-2">
                  <Heart size={13} />
                  Favoritar
                </button>
                <button className="flex-1 py-2.5 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all text-xs flex items-center justify-center gap-2">
                  <Share2 size={13} />
                  Compartilhar
                </button>
              </div>

              {/* Details */}
              {(property.yearBuilt || property.specs.floors) && (
                <div className="bg-[#111111] border border-white/5 p-5 space-y-3">
                  <h3 className="text-xs tracking-widest text-[#C9A84C] uppercase">
                    Detalhes
                  </h3>
                  {property.yearBuilt && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Ano de construção</span>
                      <span className="text-white/80">{property.yearBuilt}</span>
                    </div>
                  )}
                  {property.specs.floors && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Andares</span>
                      <span className="text-white/80">{property.specs.floors}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Tipo</span>
                    <span className="text-white/80 capitalize">{property.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Categoria</span>
                    <span className="text-white/80 capitalize">{property.category}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related */}
        {fallbackRelated.length > 0 && (
          <div className="mt-16 pt-16 border-t border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="divider-gold" />
              <h2 className="text-2xl font-light text-white">Imóveis Similares</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fallbackRelated.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            Voltar ao catálogo
          </Link>
        </div>
      </div>
    </div>
  )
}
