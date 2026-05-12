"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, Grid3X3, List, X } from "lucide-react"
import PropertyCard from "@/components/PropertyCard"
import { properties } from "@/lib/data"
import { cn } from "@/lib/utils"
import { PropertyStatus, PropertyType } from "@/lib/types"

const statusOptions = [
  { value: "all", label: "Todos" },
  { value: "venda", label: "À Venda" },
  { value: "aluguel", label: "Aluguel" },
  { value: "temporada", label: "Temporada" },
]

const typeOptions = [
  { value: "all", label: "Todos os tipos" },
  { value: "apartamento", label: "Apartamento" },
  { value: "casa", label: "Casa" },
  { value: "cobertura", label: "Cobertura" },
  { value: "penthouse", label: "Penthouse" },
  { value: "terreno", label: "Terreno" },
  { value: "comercial", label: "Comercial" },
]

const neighborhoodOptions = [
  { value: "all", label: "Todos os bairros" },
  { value: "Praia Brava", label: "Praia Brava" },
  { value: "Centro", label: "Centro" },
  { value: "Ressacada", label: "Ressacada" },
  { value: "São Vicente", label: "São Vicente" },
]

const sortOptions = [
  { value: "default", label: "Destaques primeiro" },
  { value: "price-asc", label: "Menor preço" },
  { value: "price-desc", label: "Maior preço" },
  { value: "area-desc", label: "Maior área" },
  { value: "newest", label: "Mais recente" },
]

function ImoveisContent() {
  const searchParams = useSearchParams()

  const [filterOpen, setFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [status, setStatus] = useState<string>(searchParams.get("status") || "all")
  const [type, setType] = useState<string>(searchParams.get("tipo") || "all")
  const [neighborhood, setNeighborhood] = useState<string>(searchParams.get("bairro") || "all")
  const [sort, setSort] = useState("default")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const filtered = useMemo(() => {
    let result = [...properties]

    if (status !== "all") {
      result = result.filter((p) => p.status === status)
    }
    if (type !== "all") {
      result = result.filter((p) => p.type === type)
    }
    if (neighborhood !== "all") {
      result = result.filter((p) => p.location.neighborhood === neighborhood)
    }
    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice))
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice))
    }

    const q = searchParams.get("q")?.toLowerCase()
    if (q) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.neighborhood.toLowerCase().includes(q) ||
          p.location.city.toLowerCase().includes(q)
      )
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "area-desc":
        result.sort((a, b) => b.specs.area - a.specs.area)
        break
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }

    return result
  }, [status, type, neighborhood, sort, minPrice, maxPrice, searchParams])

  const activeFiltersCount = [
    status !== "all",
    type !== "all",
    neighborhood !== "all",
    !!minPrice,
    !!maxPrice,
  ].filter(Boolean).length

  const clearFilters = () => {
    setStatus("all")
    setType("all")
    setNeighborhood("all")
    setMinPrice("")
    setMaxPrice("")
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <div className="border-b border-white/5 bg-[#080808]">
        <div className="container-premium py-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="divider-gold" />
            <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
              Catálogo
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white">
            Imóveis Disponíveis
          </h1>
          <p className="text-white/40 text-sm mt-2">
            {filtered.length} imóvel{filtered.length !== 1 ? "is" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="container-premium py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 border text-sm transition-all uppercase tracking-wider",
                filterOpen
                  ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/5"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              )}
            >
              <SlidersHorizontal size={14} />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#C9A84C] text-black text-[10px] font-bold flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-white/40 hover:text-white/80 transition-colors"
              >
                <X size={12} />
                Limpar filtros
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-white/10 px-4 py-2.5 text-white/60 text-xs focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer uppercase tracking-wider hidden md:block"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#1a1a1a] text-white normal-case">
                  {opt.label}
                </option>
              ))}
            </select>

            <div className="flex border border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2.5 transition-colors",
                  viewMode === "grid" ? "text-[#C9A84C] bg-[#C9A84C]/5" : "text-white/40 hover:text-white"
                )}
              >
                <Grid3X3 size={14} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2.5 transition-colors border-l border-white/10",
                  viewMode === "list" ? "text-[#C9A84C] bg-[#C9A84C]/5" : "text-white/40 hover:text-white"
                )}
              >
                <List size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="bg-[#111111] border border-white/5 p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2 block">
                Finalidade
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 px-3 py-2 text-white/70 text-sm focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2 block">
                Tipo
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 px-3 py-2 text-white/70 text-sm focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer"
              >
                {typeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2 block">
                Bairro
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 px-3 py-2 text-white/70 text-sm focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer"
              >
                {neighborhoodOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2 block">
                Preço máximo (R$)
              </label>
              <input
                type="number"
                placeholder="Ex: 2000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 px-3 py-2 text-white/70 text-sm focus:outline-none focus:border-[#C9A84C]/40 placeholder-white/20"
              />
            </div>
          </div>
        )}

        {/* Status Filter Chips */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setStatus(opt.value)}
              className={cn(
                "px-5 py-2 text-xs uppercase tracking-widest whitespace-nowrap border transition-all",
                status === opt.value
                  ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/5"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/20 text-6xl mb-4">🏠</p>
            <h3 className="text-white/50 text-xl font-light mb-2">Nenhum imóvel encontrado</h3>
            <p className="text-white/30 text-sm">Tente ajustar os filtros de busca</p>
            <button
              onClick={clearFilters}
              className="mt-6 btn-outline-gold px-6 py-2 text-xs uppercase tracking-widest"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div
            className={cn(
              "grid gap-6",
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            )}
          >
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ImoveisPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C9A84C]/30 border-t-[#C9A84C] rounded-full animate-spin" />
      </div>
    }>
      <ImoveisContent />
    </Suspense>
  )
}
