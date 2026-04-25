import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — CHRONOLOGIE',
  description:
    'Learn about CHRONOLOGIE — our story, our authentication process, and our commitment to the world of exceptional timepieces.',
}

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Source',
    description:
      'Every watch we present is sourced from trusted networks of private collectors, authorised dealers, and auction houses worldwide. We seek only the finest examples — pristine condition, verifiable provenance.',
  },
  {
    number: '02',
    title: 'Authenticate',
    description:
      'Each timepiece undergoes rigorous examination by our team of certified horologists and brand specialists. We verify movement, case, dial, and all components against manufacturer records.',
  },
  {
    number: '03',
    title: 'Certify',
    description:
      'Authenticated watches receive our CHRONOLOGIE Certificate of Provenance. This document details the watch\'s history, condition grade, and our full buyback guarantee.',
  },
]

const VALUES = [
  'Every watch is examined by a certified horologist before listing.',
  'Full provenance documentation provided with every sale.',
  'Secure, insured worldwide shipping with white-glove handling.',
  'Buyback guarantee for all CHRONOLOGIE-certified timepieces.',
  'Discreet, confidential service for private sellers and collectors.',
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-16 md:pb-20 pt-32 md:pt-40 max-w-7xl mx-auto">
        <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-6">
          Our Story
        </p>
        <h1 className="font-syncopate text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest leading-none mb-8 max-w-4xl">
          BUILT FOR<br />
          <span className="text-white/20">COLLECTORS,</span><br />
          BY COLLECTORS
        </h1>
        <p className="text-white/50 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
          CHRONOLOGIE was founded on a simple belief: the world's most exceptional
          timepieces deserve a marketplace as refined as the watches themselves.
        </p>
      </section>

      <div className="border-t border-white/10" />

      {/* Brand narrative */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-6">
            Who We Are
          </p>
          <h2 className="font-syncopate text-3xl text-white font-bold tracking-widest mb-8">
            PRECISION IN<br />EVERY DETAIL
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-white/55 text-sm leading-relaxed">
          <p>
            Founded in Geneva, CHRONOLOGIE brings together watchmaking expertise
            and marketplace technology to create the most trusted platform for
            luxury timepiece transactions.
          </p>
          <p>
            Our team of certified horologists, provenance researchers, and luxury
            market specialists work together to verify every watch we list — from
            the sweep of the seconds hand to the serial number on the movement.
          </p>
          <p>
            We serve a global community of collectors, investors, and watch
            enthusiasts who demand the highest standards of authenticity,
            discretion, and service.
          </p>
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Authentication process */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-24">
        <div className="mb-10 md:mb-16">
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-syncopate text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-widest">
            THE CHRONOLOGIE<br />AUTHENTICATION PROCESS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="font-syncopate text-5xl font-bold text-white/10 mb-6">
                {step.number}
              </p>
              <h3 className="font-syncopate text-lg text-white font-bold tracking-widest mb-4">
                {step.title.toUpperCase()}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Our commitment */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-6">
            Our Promise
          </p>
          <h2 className="font-syncopate text-3xl text-white font-bold tracking-widest">
            EVERY WATCH<br />WE SELL
          </h2>
        </div>
        <ul className="flex flex-col gap-4">
          {VALUES.map((value, i) => (
            <li key={i} className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0">
              <span className="text-[#FF4D6D] text-lg mt-px shrink-0">—</span>
              <span className="text-white/70 text-sm leading-relaxed">{value}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-white/10" />

      {/* Consign CTA */}
      <section id="consign" className="max-w-7xl mx-auto px-6 py-14 md:py-24">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-6">
            Sell or Consign
          </p>
          <h2 className="font-syncopate text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-widest mb-6">
            LOOKING TO SELL<br />YOUR TIMEPIECE?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto mb-10">
            We offer discreet, white-glove consignment services for collectors
            and private sellers. Our team handles every step from valuation to
            final sale.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="mailto:consign@chronologie.com"
              className="inline-flex justify-center items-center text-[11px] tracking-widest uppercase bg-[#FF4D6D] text-white px-8 py-3.5 rounded-full hover:bg-[#e63d5c] transition-colors duration-200"
            >
              Contact Us
            </a>
            <Link
              href="/catalogue"
              className="inline-flex justify-center items-center text-[11px] tracking-widest uppercase border border-white/20 text-white/60 px-8 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-colors duration-200"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
