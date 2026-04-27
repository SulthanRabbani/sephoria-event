import Image from 'next/image'
import Link from 'next/link'

import type { ChronologieLandingData } from '@/types/chronologie'

type ChronologieAboutPageProps = Pick<ChronologieLandingData, 'brand' | 'footer'> & {
  data: {
    navigation: readonly { label: string; href: string }[]
    headerAction: { label: string; href: string }
    hero: {
      eyebrow: string
      title: string
      description: string
    }
    showroomImage: {
      src: string
      alt: string
    }
    story: {
      title: string
      paragraphs: readonly string[]
    }
    values: readonly {
      label: string
      title: string
      description: string
    }[]
    service: {
      label: string
      title: string
      image: {
        src: string
        alt: string
      }
      items: readonly {
        title: string
        description: string
      }[]
    }
  }
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
      <span className="h-px w-[58px] bg-[rgba(143,122,90,0.48)]" />
      <span>{children}</span>
    </div>
  )
}

export function ChronologieAboutPage({ brand, footer, data }: ChronologieAboutPageProps) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-primary-700)]">
      <header>
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-6 md:px-10 lg:px-16 lg:py-[28px]">
          <Link href="/" className="font-display text-[24px] leading-none tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[28px]">
            {brand}
          </Link>

          <nav className="hidden justify-self-center lg:block" aria-label="Primary">
            <ul className="flex items-center gap-[34px]">
              {data.navigation.map((item) => {
                const isActive = item.href === '/about'
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="group relative inline-flex flex-col items-center pb-[14px] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-primary-700)] transition hover:text-[var(--color-primary-500)]"
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

          <Link
            href={data.headerAction.href}
            className="justify-self-end border-b border-[var(--color-primary-700)] pb-[5px] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-primary-700)] transition hover:text-[var(--color-primary-500)]"
          >
            {data.headerAction.label}
          </Link>
        </div>
      </header>

      <main>
        <section className="px-6 pb-[76px] pt-8 md:px-10 lg:px-16 lg:pb-[92px] lg:pt-[44px]">
          <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
            <Eyebrow>{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-8 max-w-[880px] font-display text-[56px] leading-[0.98] tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[64px] lg:text-[76px]">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-[780px] text-[18px] leading-[1.72] text-[rgba(58,51,46,0.82)] md:text-[20px]">
              {data.hero.description}
            </p>
          </div>
        </section>

        <section className="pb-[94px]">
          <div className="relative h-[420px] w-full md:h-[560px] lg:h-[740px]">
            <Image src={data.showroomImage.src} alt={data.showroomImage.alt} fill priority sizes="100vw" className="object-cover object-center" />
          </div>
        </section>

        <section className="px-6 pb-[92px] md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-[92px]">
            <div>
              <h2 className="font-display text-[42px] leading-none tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[50px] lg:text-[56px]">
                {data.story.title}
              </h2>
            </div>
            <div className="space-y-7 text-[18px] leading-[1.78] text-[rgba(58,51,46,0.82)] md:text-[19px]">
              {data.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-[96px] md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-2 lg:gap-[76px]">
            {data.values.map((value) => (
              <article key={value.label}>
                <Eyebrow>{value.label}</Eyebrow>
                <h2 className="mt-7 max-w-[520px] font-display text-[40px] leading-[1.02] tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[46px] lg:text-[52px]">
                  {value.title}
                </h2>
                <p className="mt-5 max-w-[560px] text-[18px] leading-[1.76] text-[rgba(58,51,46,0.82)] md:text-[19px]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-[98px] md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-[84px]">
            <div className="relative min-h-[460px] overflow-hidden bg-[#d8ccb8] md:min-h-[620px] lg:min-h-[835px]">
              <Image src={data.service.image.src} alt={data.service.image.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>

            <div className="flex flex-col pt-1">
              <Eyebrow>{data.service.label}</Eyebrow>
              <h2 className="mt-7 max-w-[560px] font-display text-[44px] leading-[1.02] tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[52px] lg:text-[58px]">
                {data.service.title}
              </h2>

              <div className="mt-10 border-t border-[rgba(58,51,46,0.14)]">
                {data.service.items.map((item) => (
                  <article key={item.title} className="border-b border-[rgba(58,51,46,0.14)] py-6 md:py-7">
                    <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--color-primary-700)] md:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[640px] text-[17px] leading-[1.74] text-[rgba(58,51,46,0.82)] md:text-[18px]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#2b2622] text-[#f1ece6]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-16 lg:pb-10 lg:pt-20">
            <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr_1.1fr_0.9fr] lg:gap-x-16">
              <div className="max-w-[360px]">
                <p className="font-display text-[42px] font-light leading-none tracking-[-0.02em] text-[#f4eee8]">{brand}</p>
                <p className="mt-5 text-[18px] leading-8 text-[#b7aba0]">{footer.description}</p>
              </div>

              {footer.columns.map((column) => (
                <div key={column.title}>
                  <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#a79a8f]">{column.title}</p>
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
                <span className="uppercase tracking-[0.18em] text-[#9c9085]">{footer.legalRight}</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
