import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, User } from "lucide-react"
import { blogPosts } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Imobiliário",
  description:
    "Artigos sobre mercado imobiliário, investimentos e tendências em Itajaí e Praia Brava.",
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-[#080808] border-b border-white/5 py-20">
        <div className="container-premium">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium">
              Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Mercado Imobiliário
          </h1>
          <p className="text-white/50 text-lg max-w-lg">
            Insights, análises e dicas do especialista Claudio Ribeiro sobre o
            mercado imobiliário de Itajaí e Praia Brava.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          {/* Featured Post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-0 bg-[#111111] border border-white/5 hover:border-[#C9A84C]/20 transition-all mb-12 overflow-hidden"
            >
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase bg-[#C9A84C] text-black">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-white/30 text-xs mb-4">
                  <span className="flex items-center gap-1.5">
                    <User size={11} />
                    {featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {featured.readTime} min de leitura
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white group-hover:text-[#C9A84C] transition-colors mb-4">
                  {featured.title}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium">
                  Ler artigo
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-[#C9A84C]/20 transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase bg-[#C9A84C] text-black">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-white/30 text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} />
                      {post.readTime} min
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-lg leading-snug group-hover:text-[#C9A84C] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
