import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Car, Maximize, MapPin, Heart } from "lucide-react"
import { Property } from "@/lib/types"
import { formatCurrency, getWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface PropertyCardProps {
  property: Property
  variant?: "default" | "compact" | "featured"
}

export default function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  const whatsappMsg = `Olá, Claudio! Tenho interesse no imóvel: ${property.title}. Poderia me passar mais informações?`

  const statusLabel = {
    venda: "Venda",
    aluguel: "Aluguel",
    temporada: "Temporada",
  }[property.status]

  const statusColor = {
    venda: "bg-[#C9A84C] text-black",
    aluguel: "bg-blue-500/80 text-white",
    temporada: "bg-emerald-500/80 text-white",
  }[property.status]

  const priceLabel =
    property.status === "aluguel" || property.status === "temporada"
      ? `${formatCurrency(property.price)}/mês`
      : formatCurrency(property.price)

  if (variant === "featured") {
    return (
      <div className="relative group overflow-hidden cursor-pointer hover-lift">
        <Link href={`/imoveis/${property.slug}`}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className={cn("text-[10px] font-semibold tracking-widest px-3 py-1.5 uppercase", statusColor)}>
                {statusLabel}
              </span>
              {property.isExclusive && (
                <span className="text-[10px] font-semibold tracking-widest px-3 py-1.5 uppercase bg-black/60 text-[#C9A84C] border border-[#C9A84C]/30">
                  Exclusivo
                </span>
              )}
              {property.isNew && (
                <span className="text-[10px] font-semibold tracking-widest px-3 py-1.5 uppercase bg-white text-black">
                  Novo
                </span>
              )}
            </div>

            <button className="absolute top-4 right-4 w-8 h-8 glass-dark flex items-center justify-center text-white/60 hover:text-[#C9A84C] transition-colors">
              <Heart size={14} />
            </button>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-1.5 text-white/60 text-xs mb-2">
                <MapPin size={11} />
                <span>{property.location.neighborhood}, {property.location.city}</span>
              </div>
              <h3 className="text-white font-medium text-lg leading-snug mb-3 line-clamp-2">
                {property.title}
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">
                    {property.status === "venda" ? "Valor" : "A partir de"}
                  </p>
                  <p className="text-[#C9A84C] font-semibold text-xl">{priceLabel}</p>
                </div>
                <div className="flex items-center gap-3 text-white/50 text-xs">
                  {property.specs.bedrooms > 0 && (
                    <span className="flex items-center gap-1">
                      <Bed size={12} />
                      {property.specs.suites || property.specs.bedrooms}
                    </span>
                  )}
                  {property.specs.bathrooms > 0 && (
                    <span className="flex items-center gap-1">
                      <Bath size={12} />
                      {property.specs.bathrooms}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Maximize size={12} />
                    {property.specs.area}m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className="group bg-[#111111] border border-white/5 overflow-hidden hover-lift transition-all duration-300 hover:border-[#C9A84C]/20">
      <Link href={`/imoveis/${property.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className={cn("text-[10px] font-semibold tracking-widest px-2.5 py-1 uppercase", statusColor)}>
              {statusLabel}
            </span>
            {property.isNew && (
              <span className="text-[10px] font-semibold tracking-widest px-2.5 py-1 uppercase bg-white text-black">
                Novo
              </span>
            )}
            {property.isExclusive && (
              <span className="text-[10px] font-semibold tracking-widest px-2.5 py-1 uppercase border border-[#C9A84C]/40 text-[#C9A84C]">
                Exclusivo
              </span>
            )}
          </div>

          <button className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#C9A84C] transition-colors opacity-0 group-hover:opacity-100">
            <Heart size={14} />
          </button>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-white/40 text-xs mb-2">
          <MapPin size={10} />
          <span>{property.location.neighborhood}, {property.location.city}</span>
        </div>

        <Link href={`/imoveis/${property.slug}`}>
          <h3 className="text-white font-medium text-base leading-snug mb-3 hover:text-[#C9A84C] transition-colors line-clamp-2">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-4 text-white/40 text-xs border-t border-white/5 pt-3 mb-3">
          {property.specs.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed size={12} className="text-[#C9A84C]" />
              {property.specs.suites
                ? `${property.specs.suites} suítes`
                : `${property.specs.bedrooms} qts`}
            </span>
          )}
          {property.specs.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath size={12} className="text-[#C9A84C]" />
              {property.specs.bathrooms} banheiros
            </span>
          )}
          {property.specs.parkingSpots > 0 && (
            <span className="flex items-center gap-1.5">
              <Car size={12} className="text-[#C9A84C]" />
              {property.specs.parkingSpots} vagas
            </span>
          )}
          <span className="flex items-center gap-1.5 ml-auto">
            <Maximize size={12} className="text-[#C9A84C]" />
            {property.specs.area}m²
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#C9A84C] font-semibold text-lg">{priceLabel}</p>
            {property.pricePerM2 && (
              <p className="text-white/30 text-xs">{formatCurrency(property.pricePerM2)}/m²</p>
            )}
          </div>
          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-[10px] px-4 py-2 uppercase tracking-widest"
          >
            Contatar
          </a>
        </div>
      </div>
    </div>
  )
}
