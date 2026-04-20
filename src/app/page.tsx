'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Data
const tourDates = [
  { city: 'São Paulo', country: 'Brazil', dates: 'May 8-10, 2026', date: '2026-05-08', status: 'upcoming' },
  { city: 'Milan', country: 'Italy', dates: 'March 28-30', date: '2026-03-28', status: 'closed' },
  { city: 'Shanghai', country: 'China', dates: 'September 12-14', date: '2025-09-12', status: 'closed' },
  { city: 'Paris', country: 'France', dates: 'October 10-11', date: '2025-10-10', status: 'closed' },
  { city: 'Dubai', country: 'UAE', dates: 'November 20-22', date: '2025-11-20', status: 'closed' },
  { city: 'Los Angeles', country: 'USA', dates: 'March 20-21', date: '2026-03-20', status: 'closed' },
]

const benefits = [
  { icon: '🎓', text: 'Access to masterclasses by beauty icons' },
  { icon: '💄', text: 'Exclusive products from your favorite brands' },
  { icon: '🎁', text: 'A legendary swag bag' },
  { icon: '🤝', text: 'Connect with the most vibrant beauty community' },
  { icon: '✨', text: 'Entry to unique immersive spaces and experiences' },
  { icon: '📸', text: 'Grid-worthy photo ops at every corner' },
]

const brands = ['SEPHORA', 'MAC', 'ESTÉE LAUDER', 'YVES SAINT LAURENT', 'DIOR', 'LANCÔME', 'GUERLAIN', 'CLINIQUE']

const faqs = [
  { question: 'What is SEPHORiA?', answer: 'SEPHORiA is the iconic beauty celebration — a global beauty event through a local lens. It is a unique experience marked by creativity, celebration, and exploration.' },
  { question: 'Where and when will SEPHORiA take place?', answer: 'SEPHORiA travels globally! Our next stop is São Paulo, Brazil from May 8-10, 2026. Check our On Tour section for all upcoming dates and locations.' },
  { question: 'What does a SEPHORiA ticket include?', answer: 'Your SEPHORiA ticket includes access to masterclasses by beauty icons, exclusive products from your favorite brands, a legendary swag bag, connection with the beauty community, and entry to immersive spaces.' },
  { question: 'What are the different ticket categories?', answer: 'We offer Beauty Pass tickets for general access and exclusive VIP experiences. Check the On Tour section for availability and pricing at each location.' },
  { question: 'Where can I purchase SEPHORiA tickets?', answer: 'Tickets can be purchased through our official website. Click "Get Tickets" in the navigation or visit our On Tour section to purchase.' },
  { question: 'Will I get some products?', answer: 'Yes! Every SEPHORiA attendee receives a legendary swag bag filled with exclusive products from participating beauty brands.' },
  { question: 'Which brands will be present at SEPHORiA?', answer: 'SEPHORiA features the world\'s most beloved beauty brands including SEPHORA, MAC, Dior, YSL, Lancôme, Estée Lauder, and many more.' },
]

// Countdown Component
function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {[
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hours' },
        { value: time.minutes, label: 'Minutes' },
        { value: time.seconds, label: 'Seconds' },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="countdown-box bg-[#141414] gold-border px-4 md:px-6 py-4 md:py-6 min-w-[70px] md:min-w-[90px]">
            <div className="font-syncopate text-2xl md:text-4xl font-bold">
              {String(item.value).padStart(2, '0')}
            </div>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mt-2">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

function CountdownMini({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      })
    }
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-3 text-xs">
      <span className="text-white/60">{time.days}d</span>
      <span className="text-white/60">{time.hours}h</span>
      <span className="text-white/60">{time.minutes}m</span>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item gold-border bg-[#141414]/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1a1a1a] transition-colors duration-200"
      >
        <span className="text-sm font-medium pr-4">{question}</span>
        <span className={`text-[#c9a84c] text-lg transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Hero animation
    gsap.fromTo('.hero-title',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.3 }
    )

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
    )

    gsap.fromTo('.countdown-box',
      { opacity: 0, scale: 0.8, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)', delay: 1 }
    )

    gsap.fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.5 }
    )

    // Scroll animations
    gsap.utils.toArray('.reveal').forEach((el: any) => {
      gsap.fromTo(el,
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Tour cards stagger
    gsap.utils.toArray('.tour-card').forEach((card: any, i: number) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Benefit cards
    gsap.utils.toArray('.benefit-card').forEach((card: any, i: number) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power2.out', delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // FAQ items
    gsap.utils.toArray('.faq-item').forEach((item: any, i: number) => {
      gsap.fromTo(item,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: i * 0.08,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Parallax hero
    gsap.to('.hero-bg', {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    // Horizontal marquee
    gsap.to('.marquee-track', {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.marquee-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/20">
        <div className="font-syncopate text-sm font-bold tracking-[0.3em]">
          <span className="gold-gradient">SEPHORiA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
          <a href="#on-tour" className="hover:text-[#c9a84c] transition-colors duration-300">On Tour</a>
          <a href="#about" className="hover:text-[#c9a84c] transition-colors duration-300">About</a>
          <a href="#lineup" className="hover:text-[#c9a84c] transition-colors duration-300">Past Lineup</a>
          <a href="#faq" className="hover:text-[#c9a84c] transition-colors duration-300">FAQ</a>
        </div>
        <a
          href="#on-tour"
          className="text-xs tracking-[0.2em] uppercase px-5 py-2 border border-[#c9a84c]/50 hover:bg-[#c9a84c]/10 transition-all duration-300"
        >
          Get Tickets
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#e8486a]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-4 pt-20">
          <h1 className="hero-title font-syncopate text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] leading-tight mb-6">
            SEPHORiA
          </h1>
          <p className="hero-subtitle text-lg md:text-xl tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            The Iconic Beauty Celebration
          </p>
          <p className="hero-subtitle text-sm md:text-base tracking-[0.3em] uppercase text-white/60">
            Now on tour — <span className="text-white">São Paulo May 8-10</span>
          </p>

          {/* Countdown */}
          <div className="mt-16 mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Starts in</p>
            <Countdown targetDate="2026-05-08T00:00:00" />
          </div>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#on-tour"
              className="pink-gradient text-white px-8 py-4 text-xs tracking-[0.3em] uppercase font-semibold hover:scale-105 transition-transform duration-300"
            >
              Beauty Pass
            </a>
            <a
              href="#about"
              className="border border-white/20 px-8 py-4 text-xs tracking-[0.3em] uppercase hover:border-[#c9a84c]/50 hover:bg-[#c9a84c]/5 transition-all duration-300"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent animate-pulse" />
        </div>
      </section>

      {/* On Tour Section */}
      <section id="on-tour" className="py-24 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">World Tour</p>
            <h2 className="font-syncopate text-3xl md:text-5xl font-bold tracking-[0.1em]">
              SEPHORiA <span className="gold-gradient">On Tour</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourDates.map((event) => (
              <div
                key={event.city}
                className="tour-card gold-border rounded-sm p-8 bg-[#141414] hover:bg-[#1a1a1a] transition-all duration-500 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">{event.country}</span>
                  <span className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 ${event.status === 'upcoming' ? 'bg-[#c9a84c]/10 text-[#c9a84c]' : 'bg-white/5 text-white/40'}`}>
                    {event.status === 'upcoming' ? 'Beauty Pass' : 'Event Closed'}
                  </span>
                </div>
                <h3 className="font-syncopate text-2xl font-bold tracking-[0.1em] mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">{event.city}</h3>
                <p className="text-sm text-white/40 tracking-[0.2em]">{event.dates}</p>
                {event.status === 'upcoming' && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Countdown</p>
                    <CountdownMini targetDate={event.date} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section py-8 border-y border-[#c9a84c]/10 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-8">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-syncopate text-2xl tracking-[0.3em] text-[#c9a84c]/20">SEPHORiA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/30" />
                <span className="text-xs tracking-[0.3em] text-white/20">THE ICONIC BEAUTY CELEBRATION</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/30" />
                <span className="text-xs tracking-[0.3em] text-white/20">BEAUTY ICONS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/30" />
                <span className="text-xs tracking-[0.3em] text-white/20">MASTERCLASSES</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/30" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">About The Event</p>
            <h2 className="font-syncopate text-4xl md:text-6xl font-bold tracking-[0.08em] mb-8 leading-tight">
              The Iconic Beauty<br />
              <span className="gold-gradient">Celebration</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              The iconic beauty celebration for beauty lovers is on a global tour. SEPHORiA is a global beauty event through a local lens. It is a unique experience, marked by creativity, celebration, and exploration, where you can discover the best of beauty and the very latest trends.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Put on your best make up, be spotlight ready with your greatest look and join our beloved beauty happening. <span className="text-white">We can&apos;t wait to meet you!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Your Ticket Includes</p>
            <h2 className="font-syncopate text-3xl md:text-4xl font-bold tracking-[0.1em]">
              A SEPHORiA Ticket Gets You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="benefit-card p-6 gold-border bg-[#141414]/50 hover:bg-[#141414] transition-all duration-300 group"
              >
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <p className="text-sm leading-relaxed text-white/80">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Lineup */}
      <section id="lineup" className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Previous Events</p>
            <h2 className="font-syncopate text-3xl md:text-4xl font-bold tracking-[0.1em]">Past Lineup</h2>
            <p className="text-white/40 text-sm mt-4">Previous participating brands include</p>
          </div>

          <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 gold-border bg-[#141414]/30 hover:bg-[#141414] transition-all duration-300 hover:border-[#c9a84c]/50"
              >
                <span className="font-syncopate text-sm tracking-[0.2em] text-white/30 hover:text-[#c9a84c] transition-colors duration-300 uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/20 text-sm mt-12 reveal">and many more...</p>
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Gallery</p>
            <h2 className="font-syncopate text-3xl md:text-5xl font-bold tracking-[0.08em] mb-4">
              Beauty Moments You&apos;ll<br />
              <span className="gold-gradient">Never Forget</span>
            </h2>
            <p className="text-white/40 text-sm mt-6">Moments that made magic</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
              <div
                key={item}
                className={`gold-border bg-[#141414] overflow-hidden group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <div className={`relative ${i === 0 ? 'aspect-square' : 'aspect-square'} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-[#e8486a]/10 group-hover:from-[#c9a84c]/20 group-hover:to-[#e8486a]/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-[#c9a84c]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-[#c9a84c]/50" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Support</p>
            <h2 className="font-syncopate text-3xl md:text-4xl font-bold tracking-[0.1em]">
              Frequently Asked<br />
              <span className="gold-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h3 className="font-syncopate text-2xl md:text-3xl font-bold tracking-[0.2em] mb-4">Let&apos;s Stay In Touch</h3>
            <p className="text-white/40 text-sm tracking-[0.2em]">Follow Us</p>
          </div>

          <div className="flex justify-center gap-6 mb-16 reveal">
            {[
              { name: 'TikTok', url: 'https://tiktok.com', icon: '♪' },
              { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
              { name: 'YouTube', url: 'https://youtube.com', icon: '▶' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c9a84c]/50 hover:bg-[#c9a84c]/10 transition-all duration-300"
              >
                <span className="text-sm">{social.icon}</span>
              </a>
            ))}
          </div>

          <div className="text-center text-white/20 text-xs tracking-[0.2em] mb-8 reveal">
            <p>©2025 Beauty Events Inc. All rights reserved.</p>
          </div>

          <div className="text-center reveal">
            <a href="#" className="text-white/30 text-xs tracking-[0.2em] uppercase hover:text-[#c9a84c] transition-colors">
              Legal Notice
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
