"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i != null ? (i - 1 + images.length) % images.length : 0))
  const next = () => setLightbox((i) => (i != null ? (i + 1) % images.length : 0))

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[50vh] md:h-[60vh]">
        {/* Main image */}
        <div
          className="col-span-4 md:col-span-3 row-span-2 relative overflow-hidden cursor-pointer group"
          onClick={() => setLightbox(0)}
        >
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-102"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <ZoomIn className="text-white/0 group-hover:text-white/80 transition-all" size={32} />
          </div>
        </div>

        {/* Thumbnails */}
        {images.slice(1, 3).map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer group hidden md:block"
            onClick={() => setLightbox(i + 1)}
          >
            <Image
              src={img}
              alt={`${title} ${i + 2}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {i === 1 && images.length > 3 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-lg font-light">+{images.length - 3} fotos</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile gallery indicator */}
      <div className="md:hidden text-center py-2">
        <button
          onClick={() => setLightbox(0)}
          className="text-[#C9A84C] text-xs uppercase tracking-widest"
        >
          Ver todas as {images.length} fotos
        </button>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 text-white/60 hover:text-white transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full max-w-5xl max-h-[80vh] aspect-video mx-8">
            <Image
              src={images[lightbox]}
              alt={`${title} ${lightbox + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={next}
            className="absolute right-4 text-white/60 hover:text-white transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === lightbox ? "bg-[#C9A84C] scale-125" : "bg-white/30"
                )}
              />
            ))}
          </div>

          <p className="absolute bottom-4 right-4 text-white/40 text-xs">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
