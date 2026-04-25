import Image from 'next/image'
import Link from 'next/link'
import type { Watch } from '../data/watches'

interface WatchCardProps {
  watch: Watch
  priority?: boolean
}

export function WatchCard({ watch, priority = false }: WatchCardProps) {
  return (
    <Link href={`/catalogue/${watch.slug}`} className="group block">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-white/5">
        <Image
          src={watch.image}
          alt={`${watch.brand} ${watch.model}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border ${watch.condition === 'New'
                ? 'bg-[#FF4D6D]/15 text-[#FF4D6D] border-[#FF4D6D]/30'
                : 'bg-white/10 text-white/60 border-white/20'
              }`}
          >
            {watch.condition}
          </span>
        </div>
      </div>

      <div>
        <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
          {watch.brand}
        </p>
        <h2 className="text-white text-sm font-medium mb-1.5 leading-snug">
          {watch.model}
        </h2>
        <p className="text-white/40 text-[11px] mb-3 font-mono">{watch.reference}</p>
        <p className="text-white font-semibold text-sm">
          ${watch.price.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}
