import Link from 'next/link'
import type { ReactNode } from 'react'

import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from './primitives/CTAButton'

type ChronologieContactPageProps = Pick<ChronologieLandingData, 'brand' | 'footer'>

type ContactPageData = {
  navigation: readonly { label: string; href: string }[]
  headerAction: { label: string; href: string }
  hero: {
    eyebrow: string
    title: string
    description: string
  }
  boutique: {
    label: string
    title: string
    addressLines: readonly string[]
  }
  hours: {
    label: string
    rows: readonly { day: string; time: string }[]
    note: string
  }
  contact: {
    label: string
    phone: { label: string; href: string }
    email: { label: string; href: string }
  }
  actions: {
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
  map: {
    title: string
    src: string
  }
}

function MarkerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.35" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5v4.75l3 1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6.75 4.75h2.3l1.2 4.36-1.44 1.44a15.18 15.18 0 0 0 4.64 4.64l1.44-1.44 4.36 1.2v2.3a1.5 1.5 0 0 1-1.5 1.5h-.5C10.7 18.75 5.25 13.3 5.25 6.75v-.5a1.5 1.5 0 0 1 1.5-1.5Z" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.55">
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="1.7" />
      <path d="m5.5 8.25 6.5 4.8 6.5-4.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionLabel({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-body text-[13px] font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center">{icon}</span>
      <span>{children}</span>
    </div>
  )
}

export function ChronologieContactPage({ brand, footer, data }: ChronologieContactPageProps & { data: ContactPageData }) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-primary-700)]">
      <header className="border-b border-transparent">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-6 md:px-10 lg:px-16 lg:py-[28px]">
          <Link href="/" className="font-display text-[24px] leading-none tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[28px]">
            {brand}
          </Link>

          <nav className="hidden justify-self-center lg:block" aria-label="Primary">
            <ul className="flex items-center gap-[34px]">
              {data.navigation.map((item) => {
                const isActive = item.href === '/contact'
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="group relative inline-flex flex-col items-center pb-[14px] font-body text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-primary-700)] transition hover:text-[var(--color-primary-500)]"
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[var(--color-primary-700)] transition-all duration-300 ${
                          isActive ? 'w-[78px] opacity-100' : 'w-0 opacity-0 group-hover:w-[78px] group-hover:opacity-60'
                        }`}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <a
            href={data.headerAction.href}
            className="justify-self-end border-b border-[var(--color-primary-700)] pb-[5px] font-body text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-primary-700)] transition hover:text-[var(--color-primary-500)]"
          >
            {data.headerAction.label}
          </a>
        </div>
      </header>

      <main>
        <section className="px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12 lg:px-16 lg:pb-[86px] lg:pt-[56px]">
          <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
            <div className="flex items-center gap-5 font-body text-[13px] font-medium uppercase tracking-[0.28em] text-[var(--color-accent)] md:gap-6">
              <span className="h-px w-[56px] bg-[rgba(216,208,197,1)]" />
              <span>{data.hero.eyebrow}</span>
              <span className="h-px w-[56px] bg-[rgba(216,208,197,1)]" />
            </div>
            <h1 className="mt-7 max-w-[840px] font-display text-[52px] leading-[1.04] tracking-[-0.024em] text-[var(--color-primary-700)] md:text-[58px] lg:text-[64px] lg:leading-[1.02]">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-[780px] text-[17px] leading-[1.62] text-[#3E3935] md:text-[18px] lg:text-[19px] lg:leading-[1.58]">
              {data.hero.description}
            </p>
          </div>
        </section>

        <section id="boutique" className="px-6 pb-[84px] md:px-10 lg:px-16 lg:pb-[108px]">
          <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] md:items-start md:gap-10 lg:gap-[64px]">
            <div className="max-w-[500px] pt-1 md:pt-4 lg:pt-2">
              <SectionLabel icon={<MarkerIcon />}>{data.boutique.label}</SectionLabel>
              <h2 className="mt-[18px] font-display text-[28px] leading-[1.2] tracking-[-0.02em] text-[var(--color-primary-700)]">
                {data.boutique.title}
              </h2>
              <div className="mt-3 max-w-[360px] space-y-0 text-[18px] leading-[1.65] text-[#332E2A]">
                {data.boutique.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-12">
                <SectionLabel icon={<ClockIcon />}>{data.hours.label}</SectionLabel>
                <div className="mt-[18px] grid max-w-[380px] grid-cols-[1fr_auto] gap-x-10 gap-y-2 text-[18px] leading-[1.5] text-[#332E2A]">
                  {data.hours.rows.map((row) => (
                    <div key={row.day} className="contents">
                      <span>{row.day}</span>
                      <span className="text-right">{row.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 max-w-[340px] text-[15px] leading-[1.6] text-[#8B7A63]">{data.hours.note}</p>
              </div>

              <div className="mt-12">
                <SectionLabel icon={<ContactIcon />}>{data.contact.label}</SectionLabel>
                <div className="mt-[18px] space-y-3 text-[18px] leading-[1.6] text-[#332E2A]">
                  <a href={data.contact.phone.href} className="inline-flex items-center gap-3 transition hover:text-[var(--color-primary-500)]">
                    <ContactIcon />
                    <span>{data.contact.phone.label}</span>
                  </a>
                  <a href={data.contact.email.href} className="flex items-center gap-3 transition hover:text-[var(--color-primary-500)]">
                    <MailIcon />
                    <span>{data.contact.email.label}</span>
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <CTAButton
                  action={data.actions.primary}
                  variant="dark"
                  icon="whatsapp"
                  className="min-h-[50px] min-w-[243px] justify-center rounded-[4px] px-7 text-[14px] tracking-[0.14em]"
                />
                <CTAButton
                  action={data.actions.secondary}
                  variant="outline-dark"
                  className="min-h-[50px] min-w-[203px] justify-center rounded-[4px] px-7 text-[14px] tracking-[0.14em]"
                />
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-[2px] border border-[#ddd1c0] bg-[#e9e0d3] md:min-h-[520px]">
              <iframe
                title={data.map.title}
                src={data.map.src}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <footer className="bg-[#2b2622] text-[#f1ece6]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-16 lg:pb-[52px] lg:pt-20">
            <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr_1.1fr_0.9fr] lg:gap-x-16">
              <div className="max-w-[360px]">
                <p className="font-display text-[42px] font-light leading-none tracking-[-0.02em] text-[#f4eee8]">{brand}</p>
                <p className="mt-5 text-[18px] leading-8 text-[#b7aba0]">{footer.description}</p>
              </div>

              {footer.columns.map((column) => (
                <div key={column.title}>
                  <p className="font-body text-[12px] font-medium uppercase tracking-[0.24em] text-[#a79a8f]">{column.title}</p>
                  <ul className="mt-5 space-y-3 text-[16px] leading-7 text-[#f1ece6]">
                    {column.items.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="transition hover:text-white/72">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-[#4a413b] pt-6">
              <div className="flex flex-col gap-3 text-[12px] text-[#8f847a] md:flex-row md:items-center md:justify-between">
                <span>{footer.legalLeft}</span>
                <span className="font-body uppercase tracking-[0.18em] text-[#9c9085]">{footer.legalRight}</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
