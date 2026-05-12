"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm({ propertyTitle }: { propertyTitle?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: propertyTitle || "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#111111] border border-[#C9A84C]/20 p-12 text-center">
        <div className="w-16 h-16 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={28} className="text-[#C9A84C]" />
        </div>
        <h3 className="text-white text-xl font-light mb-2">Mensagem enviada!</h3>
        <p className="text-white/50 text-sm">
          Obrigado pelo contato. Claudio responderá em breve.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase block mb-2">
            Nome *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
            className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
          />
        </div>
        <div>
          <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase block mb-2">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="(47) 99999-9999"
            className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase block mb-2">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
        />
      </div>

      <div>
        <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase block mb-2">
          Interesse
        </label>
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors cursor-pointer appearance-none"
        >
          <option value="" className="bg-[#111111]">Selecione seu interesse</option>
          <option value="comprar" className="bg-[#111111]">Quero comprar um imóvel</option>
          <option value="vender" className="bg-[#111111]">Quero vender meu imóvel</option>
          <option value="alugar" className="bg-[#111111]">Quero alugar</option>
          <option value="investir" className="bg-[#111111]">Quero investir</option>
          <option value="avaliar" className="bg-[#111111]">Quero avaliar meu imóvel</option>
          {propertyTitle && (
            <option value={propertyTitle} className="bg-[#111111]">{propertyTitle}</option>
          )}
        </select>
      </div>

      <div>
        <label className="text-[10px] tracking-widest text-[#C9A84C] uppercase block mb-2">
          Mensagem
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Descreva o que você está procurando..."
          className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full py-4 text-xs uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={14} />
            Enviar Mensagem
          </>
        )}
      </button>

      <p className="text-white/20 text-xs text-center">
        Seus dados são protegidos e não serão compartilhados.
      </p>
    </form>
  )
}
