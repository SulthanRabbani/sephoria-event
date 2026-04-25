import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getRelatedWatches, getWatchBySlug, watches } from '../../data/watches'
import { WatchCard } from '../../components/WatchCard'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return watches.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const watch = getWatchBySlug(slug)

  if (!watch) {
    return { title: 'Watch Not Found — CHRONOLOGIE' }
  }

  return {
    title: `${watch.brand} ${watch.model} — CHRONOLOGIE`,
    description: watch.description,
    openGraph: {
      title: `${watch.brand} ${watch.model}`,
      description: watch.description,
      images: [{ url: watch.image }],
    },
  }
}

const SPEC_LABELS: Record<string, string> = {
  movement: 'Movement',
  caseSize: 'Case Size',
  caseMaterial: 'Case Material',
  waterResistance: 'Water Resistance',
  braceletMaterial: 'Bracelet / Strap',
  powerReserve: 'Power Reserve',
}

export default async function WatchDetailPage({ params }: Props) {
  const { slug } = await params
  const watch = getWatchBySlug(slug)

  if (!watch) notFound()

  const related = getRelatedWatches(slug, watch.brand)

  const specs = [
    { key: 'movement', value: watch.movement },
    { key: 'caseSize', value: watch.caseSize },
    { key: 'caseMaterial', value: watch.caseMaterial },
    { key: 'waterResistance', value: watch.waterResistance },
    { key: 'braceletMaterial', value: watch.braceletMaterial },
    { key: 'powerReserve', value: watch.powerReserve },
  ]

  return (
    <main className="min-h-screen bg-[#080810] pt-16">
      {/* Hero */}
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Image panel */}
        <div className="relative bg-[#0d0d1a] min-h-[78vw] md:min-h-0">
          <Image
            src={watch.image}
            alt={`${watch.brand} ${watch.model}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080810]/20" />
        </div>

        {/* Info panel */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/30 text-[11px] tracking-widest uppercase mb-10">
            <Link href="/catalogue" className="hover:text-white transition-colors">
              Catalogue
            </Link>
            <span>/</span>
            <span className="text-white/50">{watch.brand}</span>
          </nav>

          {/* Brand + Model */}
          <p className="text-[#FF4D6D] text-[11px] tracking-[0.25em] uppercase mb-3">
            {watch.brand}
          </p>
          <h1 className="font-syncopate text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-widest mb-2">
            {watch.model.toUpperCase()}
          </h1>
          <p className="text-white/30 text-xs font-mono mb-8">Ref. {watch.reference}</p>

          {/* Price + Condition */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-white text-3xl font-bold">
              ${watch.price.toLocaleString()}
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border ${
                watch.condition === 'New'
                  ? 'bg-[#FF4D6D]/15 text-[#FF4D6D] border-[#FF4D6D]/30'
                  : 'bg-white/10 text-white/60 border-white/20'
              }`}
            >
              {watch.condition}
            </span>
            <span className="text-white/30 text-xs">{watch.year}</span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
            {watch.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
            <button className="text-[11px] tracking-widest uppercase bg-[#FF4D6D] text-white px-8 py-3.5 rounded-full hover:bg-[#e63d5c] transition-colors duration-200 text-center">
              Inquire About This Watch
            </button>
            <Link
              href="/catalogue"
              className="text-[11px] tracking-widest uppercase border border-white/20 text-white/60 px-8 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-colors duration-200 text-center"
            >
              Back to Catalogue
            </Link>
          </div>

          {/* Specifications */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-5">
              Specifications
            </p>
            <dl className="grid grid-cols-1 gap-y-4">
              {specs.map(({ key, value }) => (
                <div key={key} className="flex justify-between gap-4">
                  <dt className="text-white/40 text-xs tracking-wide shrink-0">
                    {SPEC_LABELS[key]}
                  </dt>
                  <dd className="text-white/80 text-xs text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Related watches */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-2">
                More from
              </p>
              <h2 className="font-syncopate text-2xl text-white font-bold tracking-widest">
                {watch.brand.toUpperCase()}
              </h2>
            </div>
            <Link
              href={`/catalogue`}
              className="text-[11px] tracking-widest uppercase text-white/40 hover:text-white transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {related.map((w) => (
              <WatchCard key={w.slug} watch={w} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
