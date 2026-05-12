"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = ["Comprar", "Alugar", "Temporada"]
const types = ["Todos", "Apartamento", "Casa", "Cobertura", "Penthouse", "Terreno", "Comercial"]

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState(0)
  const [query, setQuery] = useState("")
  const [type, setType] = useState("Todos")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const statusMap = ["venda", "aluguel", "temporada"]
    const params = new URLSearchParams()
    if (query) params.set("q", query)
    if (type !== "Todos") params.set("tipo", type.toLowerCase())
    params.set("status", statusMap[activeTab])
    router.push(`/imoveis?${params.toString()}`)
  }

  return (
    <div className="glass-dark border border-white/8 rounded-none">
      {/* Tabs */}
      <div className="flex border-b border-white/5">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={cn(
              "flex-1 py-3.5 text-xs tracking-widest uppercase font-medium transition-all",
              activeTab === i
                ? "text-[#C9A84C] border-b-2 border-[#C9A84C] -mb-px"
                : "text-white/40 hover:text-white/70"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search form */}
      <form onSubmit={handleSearch} className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Location input */}
          <div className="relative flex-1">
            <MapPin
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A84C]"
            />
            <input
              type="text"
              placeholder="Bairro, cidade ou endereço..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 pl-10 pr-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
            />
          </div>

          {/* Type select */}
          <div className="relative">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors pr-8 min-w-[160px] cursor-pointer"
            >
              {types.map((t) => (
                <option key={t} value={t} className="bg-[#1a1a1a] text-white">
                  {t}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
              ▾
            </div>
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="btn-gold px-6 py-3 text-xs uppercase tracking-widest flex items-center gap-2 justify-center whitespace-nowrap"
          >
            <Search size={14} />
            Buscar
          </button>
        </div>
      </form>
    </div>
  )
}
