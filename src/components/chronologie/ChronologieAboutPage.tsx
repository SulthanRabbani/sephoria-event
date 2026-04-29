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
    <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
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
        <section className="px-6 pb-[72px] pt-10 md:px-10 lg:px-16 lg:pb-[116px] lg:pt-[56px]">
          <div className="mx-auto max-w-[1320px] lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="flex flex-col items-center text-center lg:col-span-7 lg:col-start-2 lg:items-start lg:text-left">
              <Eyebrow>{data.hero.eyebrow}</Eyebrow>
              <h1 className="mt-8 max-w-[7.5ch] font-display text-[60px] leading-[0.95] tracking-[-0.04em] text-[var(--color-primary-700)] md:text-[74px] lg:text-[88px]">
                {data.hero.title}
              </h1>
              <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.74] text-[rgba(58,51,46,0.82)] md:text-[19px]">
                {data.hero.description}
              </p>
            </div>

            <aside className="mt-10 border-t border-[rgba(58,51,46,0.12)] pt-5 text-left lg:col-span-3 lg:col-start-10 lg:mt-0 lg:max-w-[240px] lg:translate-y-[-20px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">Jakarta Atelier</p>
              <p className="mt-4 text-[15px] leading-[1.72] text-[rgba(58,51,46,0.74)]">
                A room for slow decisions, provenance, and private conversation.
              </p>
            </aside>
          </div>
        </section>

        <section className="pb-[108px]">
          <div className="relative h-[420px] w-full md:h-[560px] lg:h-[740px]">
            <Image src={data.showroomImage.src} alt={data.showroomImage.alt} fill priority sizes="100vw" className="object-cover object-center" />

            <div className="absolute bottom-6 left-6 max-w-[280px] bg-[rgba(250,250,250,0.9)] px-5 py-4 backdrop-blur-sm md:bottom-8 md:left-10 lg:bottom-12 lg:left-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">Private Viewing</p>
              <p className="mt-3 text-[14px] leading-6 text-[rgba(43,38,34,0.76)]">
                An interior composed for trust, daylight, and the long consideration a serious watch deserves.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-[108px] md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-[88px]">
            <div>
              <h2 className="font-display text-[44px] leading-[0.98] tracking-[-0.035em] text-[var(--color-primary-700)] md:text-[52px] lg:text-[60px]">
                {data.story.title}
              </h2>
            </div>
            <div className="space-y-8 text-[17px] leading-[1.76] text-[rgba(58,51,46,0.82)] md:text-[19px]">
              {data.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-[118px] md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-x-[32px] lg:gap-y-0">
            {data.values.map((value, index) => (
              <article
                key={value.label}
                className={index === 0 ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-4 lg:col-start-8 lg:mt-20'}
              >
                <Eyebrow>{value.label}</Eyebrow>
                <h2 className="mt-7 max-w-[520px] font-display text-[40px] leading-[1.02] tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[46px] lg:text-[52px]">
                  {value.title}
                </h2>
                <p className={`mt-5 text-[17px] leading-[1.74] text-[rgba(58,51,46,0.82)] md:text-[18px] ${index === 0 ? 'max-w-[29ch]' : 'max-w-[27ch]'}`}>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-[110px] md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(360px,544px)_minmax(420px,1fr)] lg:gap-[86px]">
            <div className="lg:pb-10">
              <div className="relative aspect-[544/835] overflow-hidden bg-[#d8ccb8] lg:-translate-y-10">
                <Image
                  src={data.service.image.src}
                  alt={data.service.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-5 border-t border-[rgba(58,51,46,0.12)] pt-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">Handled by Hand, Never Hurried.</p>
                <p className="mt-3 max-w-[24ch] text-[14px] leading-6 text-[rgba(58,51,46,0.74)]">
                  Each intervention begins with listening — to the movement, to the history, and to the owner.
                </p>
              </div>
            </div>

            <div className="flex flex-col pt-1 lg:pt-12">
              <Eyebrow>{data.service.label}</Eyebrow>
              <h2 className="mt-7 max-w-[560px] font-display text-[46px] leading-[1] tracking-[-0.035em] text-[var(--color-primary-700)] md:text-[56px] lg:text-[64px]">
                {data.service.title}
              </h2>

              <div className="mt-11 border-t border-[rgba(58,51,46,0.12)]">
                {data.service.items.map((item) => (
                  <article key={item.title} className="border-b border-[rgba(58,51,46,0.12)] py-6 md:py-7">
                    <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--color-primary-700)] md:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-[640px] text-[16px] leading-[1.72] text-[rgba(58,51,46,0.82)] md:text-[17px]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#2b2622] text-[#f1ece6]">
          <div className="mx-auto max-w-[1440px] px-6 py-[72px] md:px-10 lg:px-16 lg:pb-12 lg:pt-24">
            <div className="grid gap-14 lg:grid-cols-[1.7fr_0.8fr_1.1fr_0.9fr] lg:gap-x-[72px]">
              <div className="max-w-[380px]">
                <p className="font-display text-[46px] font-light leading-none tracking-[-0.02em] text-[#f4eee8]">{brand}</p>
                <p className="mt-6 max-w-[28ch] text-[14px] leading-6 text-[#b7aba0] md:text-[15px]">{footer.description}</p>
                <div className="mt-8 space-y-2 border-t border-[#4a413b] pt-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#9f9387]">
                  <p>Jakarta Atelier</p>
                  <p>Visits by appointment</p>
                </div>
              </div>

              {footer.columns.map((column) => (
                <div key={column.title}>
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-[#a79a8f]">{column.title}</p>
                  <ul className="space-y-2 text-[14px] leading-6 text-[#f1ece6] md:text-[15px]">
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

            <div className="mt-8 border-t border-[#4a413b] pt-6">
              <div className="flex flex-col gap-2 text-[11px] leading-5 text-[#8f847a] md:flex-row md:items-center md:justify-between">
                <span>{footer.legalLeft}</span>
                <span className="uppercase tracking-[0.2em] text-[#9c9085]">{footer.legalRight}</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
