import Link from 'next/link'
import { BentoGallery } from './components/BentoGallery'
import { WatchCard } from './components/WatchCard'
import { watches } from './data/watches'

export default function Home() {
  const featured = watches.slice(0, 4)

  return (
    <>
      <BentoGallery />

      {/* Hero tagline */}
      <section className="bg-[#080810] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-end">
          <div>
            <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-5">
              The Marketplace
            </p>
            <h2 className="font-syncopate text-2xl sm:text-3xl md:text-5xl text-white font-bold tracking-widest leading-tight">
              EVERY SECOND<br />TELLS A STORY
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white/50 text-sm leading-relaxed">
              CHRONOLOGIE is a curated marketplace for the world's most exceptional
              luxury timepieces. From iconic steel sports watches to rare precious
              metal complications — discover, collect, and acquire with complete confidence.
            </p>
            <Link
              href="/catalogue"
              className="self-start text-[11px] tracking-widest uppercase border border-white/20 text-white/70 px-6 py-3 rounded-full hover:border-[#FF4D6D] hover:text-[#FF4D6D] transition-colors duration-200"
            >
              Explore Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured timepieces */}
      <section className="bg-[#080810] pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-2">
                Selected Pieces
              </p>
              <h2 className="font-syncopate text-2xl text-white font-bold tracking-widest">
                FEATURED
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="text-[11px] tracking-widest uppercase text-white/40 hover:text-white transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featured.map((watch, i) => (
              <WatchCard key={watch.slug} watch={watch} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Promise section */}
      <section className="bg-[#080810] border-t border-white/10 px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-6">
            The CHRONOLOGIE Promise
          </p>
          <h2 className="font-syncopate text-xl sm:text-2xl md:text-4xl text-white font-bold tracking-widest mb-6 max-w-2xl mx-auto">
            AUTHENTICATED.<br />CERTIFIED. GUARANTEED.
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Every timepiece on CHRONOLOGIE has been examined by our certified horologists
            and comes with full provenance documentation. Buy and sell with absolute confidence.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-[11px] tracking-widest uppercase border border-white/20 text-white/60 px-8 py-3.5 rounded-full hover:border-[#FF4D6D] hover:text-[#FF4D6D] transition-colors duration-200"
          >
            Learn About Our Process →
          </Link>
        </div>
      </section>
    </>
  )
}

