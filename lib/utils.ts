import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatArea(area: number): string {
  return `${area.toLocaleString("pt-BR")} m²`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function getWhatsAppLink(message?: string): string {
  const phone = "5547999999999"
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Olá, Claudio! Vim pelo site e gostaria de saber mais sobre os imóveis.")
  return `https://wa.me/${phone}?text=${text}`
}
