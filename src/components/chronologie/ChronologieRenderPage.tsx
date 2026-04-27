import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type RenderHotspot = {
  label: string
  href: string
  x: number
  y: number
  width: number
  height: number
  current?: boolean
}

type ChronologieRenderPageProps = {
  imageSrc: string
  imageAlt: string
  width: number
  height: number
  hotspots?: RenderHotspot[]
  children?: ReactNode
}

export function ChronologieRenderPage({ imageSrc, imageAlt, width, height, hotspots = [], children }: ChronologieRenderPageProps) {
  return (
    <div className="min-h-screen bg-[#f3ede2] text-[#171717]">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="absolute inset-0 h-full w-full object-contain object-top"
          />

          {hotspots.map((hotspot) => {
            const style = {
              left: `${(hotspot.x / width) * 100}%`,
              top: `${(hotspot.y / height) * 100}%`,
              width: `${(hotspot.width / width) * 100}%`,
              height: `${(hotspot.height / height) * 100}%`,
            }

            if (hotspot.href.startsWith('/')) {
              return (
                <Link
                  key={`${hotspot.label}-${hotspot.href}-${hotspot.x}-${hotspot.y}`}
                  href={hotspot.href}
                  aria-current={hotspot.current ? 'page' : undefined}
                  className="absolute block"
                  style={style}
                >
                  <span className="sr-only">{hotspot.label}</span>
                </Link>
              )
            }

            return (
              <a
                key={`${hotspot.label}-${hotspot.href}-${hotspot.x}-${hotspot.y}`}
                href={hotspot.href}
                aria-current={hotspot.current ? 'page' : undefined}
                className="absolute block"
                style={style}
              >
                <span className="sr-only">{hotspot.label}</span>
              </a>
            )
          })}

          <div className="sr-only">{children}</div>
        </div>
      </div>
    </div>
  )
}
