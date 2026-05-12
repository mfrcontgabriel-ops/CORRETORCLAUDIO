export type PropertyType = "apartamento" | "casa" | "cobertura" | "terreno" | "comercial" | "penthouse"
export type PropertyStatus = "venda" | "aluguel" | "temporada"
export type PropertyCategory = "residencial" | "comercial" | "investimento"

export interface Property {
  id: string
  slug: string
  title: string
  description: string
  type: PropertyType
  status: PropertyStatus
  category: PropertyCategory
  price: number
  pricePerM2?: number
  location: {
    address: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
    lat?: number
    lng?: number
  }
  specs: {
    area: number
    bedrooms: number
    bathrooms: number
    suites?: number
    parkingSpots: number
    floors?: number
  }
  features: string[]
  images: string[]
  video?: string
  virtualTour?: string
  isHighlight?: boolean
  isFeatured?: boolean
  isNew?: boolean
  isExclusive?: boolean
  yearBuilt?: number
  createdAt: string
  updatedAt: string
}

export interface Lead {
  name: string
  email: string
  phone: string
  message?: string
  propertyId?: string
  source: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  author: string
  publishedAt: string
  readTime: number
}
