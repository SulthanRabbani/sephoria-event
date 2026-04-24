'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip)
}

export type GalleryItem = {
  src: string
  alt: string
}

const DEFAULT_ITEMS: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/seph1/600/900', alt: 'Brand Strategy' },
  { src: 'https://picsum.photos/seed/seph2/600/600', alt: 'Event Production' },
  { src: 'https://picsum.photos/seed/seph3/600/900', alt: 'Global Reach' },
  { src: 'https://picsum.photos/seed/seph4/600/600', alt: 'Creative Vision' },
  { src: 'https://picsum.photos/seed/seph5/600/600', alt: 'Community' },
  { src: 'https://picsum.photos/seed/seph6/600/900', alt: 'Digital Media' },
  { src: 'https://picsum.photos/seed/seph7/600/600', alt: 'Content Creation' },
  { src: 'https://picsum.photos/seed/seph8/600/600', alt: 'Experiences' },
]

interface BentoGalleryProps {
  items?: GalleryItem[]
}

export function BentoGallery({ items = DEFAULT_ITEMS }: BentoGalleryProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const flipCtxRef = useRef<gsap.Context | null>(null)
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const gallery = galleryRef.current
    const wrap = wrapRef.current
    if (!gallery || !wrap) return

    const createTween = () => {
      // Tear down previous context + ScrollTrigger before rebuilding
      flipCtxRef.current?.revert()
      flipCtxRef.current = null
      gallery.classList.remove('bento-gallery--final')

      flipCtxRef.current = gsap.context(() => {
        const els = gallery.querySelectorAll<HTMLElement>('.bento-gallery__item')

        gallery.classList.add('bento-gallery--final')
        const flipState = Flip.getState(els)
        gallery.classList.remove('bento-gallery--final')

        const flip = Flip.to(flipState, { simple: true, ease: 'power2.inOut' })

        gsap.timeline({
          scrollTrigger: {
            trigger: gallery,
            start: 'center center',
            end: '+=100%',
            scrub: true,
            pin: wrap,
            anticipatePin: 1,
          },
        }).add(flip)

        return () => gsap.set(els, { clearProps: 'all' })
      })

      // Recalculate all ScrollTrigger positions after rebuilding
      ScrollTrigger.refresh()
    }

    createTween()

    const onResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
      resizeTimerRef.current = setTimeout(createTween, 150)
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
      window.removeEventListener('resize', onResize)
      flipCtxRef.current?.revert()
      flipCtxRef.current = null
    }
  }, [])

  return (
    <div ref={wrapRef} className="bento-wrap">
      <div ref={galleryRef} className="bento-gallery">
        {items.map((item, i) => (
          <div key={item.alt} className="bento-gallery__item">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

