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
  {
    src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=900&auto=format&fit=crop&q=80',
    alt: 'Rolex Submariner',
  },
  {
    src: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=600&auto=format&fit=crop&q=80',
    alt: 'Chronograph with leather strap',
  },
  {
    src: 'https://images.unsplash.com/photo-1618215650148-e8e61eae521c?w=600&h=900&auto=format&fit=crop&q=80',
    alt: 'Gold & silver dress watch',
  },
  {
    src: 'https://images.unsplash.com/photo-1587865501868-36104829d7db?w=600&h=600&auto=format&fit=crop&q=80',
    alt: 'Gold chronograph',
  },
  {
    src: 'https://images.unsplash.com/photo-1619976396248-56d05beb2919?w=600&h=600&auto=format&fit=crop&q=80',
    alt: 'Silver bracelet watch',
  },
  {
    src: 'https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?w=600&h=900&auto=format&fit=crop&q=80',
    alt: 'Silver analog watch',
  },
  {
    src: 'https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?w=600&h=600&auto=format&fit=crop&q=80',
    alt: 'Silver & black sport watch',
  },
  {
    src: 'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600&h=600&auto=format&fit=crop&q=80',
    alt: 'White dial round watch',
  },
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
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

