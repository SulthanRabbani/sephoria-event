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
        <section className="px-6 pb-12 pt-8 md:px-10 md:pb-14 lg:px-16 lg:pb-16 lg:pt-10">
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <div className="flex flex-col items-center text-center">
              <Eyebrow>{data.hero.eyebrow}</Eyebrow>
              <h1 className="mt-7 max-w-[660px] font-display text-[50px] leading-[1.02] tracking-[-0.032em] text-[var(--color-primary-700)] md:text-[58px] lg:text-[68px]">
                {data.hero.title}
              </h1>
              <p className="mt-7 max-w-[560px] text-[16px] leading-[1.82] text-[rgba(58,51,46,0.82)] md:text-[18px]">
                {data.hero.description}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14 md:pb-16 lg:pb-[52px]">
          <div className="relative h-[320px] w-full md:h-[360px] lg:h-[410px]">
            <Image src={data.showroomImage.src} alt={data.showroomImage.alt} fill priority sizes="100vw" className="object-cover object-center" />
          </div>
        </section>

        <section className="px-6 pb-14 md:px-10 md:pb-16 lg:px-16 lg:pb-[56px]">
          <div className="mx-auto grid max-w-[1040px] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
            <div>
              <h2 className="font-display text-[38px] leading-none tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[44px] lg:text-[48px]">
                {data.story.title}
              </h2>
            </div>
            <div className="max-w-[540px] space-y-6 text-[16px] leading-[1.82] text-[rgba(58,51,46,0.82)] md:text-[17px]">
              {data.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 md:px-10 md:pb-16 lg:px-16 lg:pb-[64px]">
          <div className="mx-auto grid max-w-[1040px] gap-10 lg:grid-cols-2 lg:gap-12">
            {data.values.map((value) => (
              <article key={value.label}>
                <Eyebrow>{value.label}</Eyebrow>
                <h2 className="mt-5 max-w-[360px] font-display text-[30px] leading-[1.08] tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[34px] lg:text-[36px]">
                  {value.title}
                </h2>
                <p className="mt-4 max-w-[390px] text-[16px] leading-[1.78] text-[rgba(58,51,46,0.82)] md:text-[17px]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-14 md:px-10 md:pb-16 lg:px-16 lg:pb-[60px]">
          <div className="mx-auto grid max-w-[1040px] gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-12">
            <div className="relative aspect-[544/835] overflow-hidden bg-[#d8ccb8]">
              <Image
                src={data.service.image.src}
                alt={data.service.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col pt-1">
              <Eyebrow>{data.service.label}</Eyebrow>
              <h2 className="mt-6 max-w-[17ch] font-display text-[34px] leading-[1.08] tracking-[-0.03em] text-[var(--color-primary-700)] md:text-[38px] lg:text-[40px]">
                {data.service.title}
              </h2>

              <div className="mt-6 border-t border-[rgba(58,51,46,0.16)]">
                {data.service.items.map((item) => (
                  <article key={item.title} className="border-b border-[rgba(58,51,46,0.16)] py-[18px]">
                    <h3 className="text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--color-primary-700)] md:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-[16px] leading-[1.72] text-[rgba(58,51,46,0.82)] md:text-[17px]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#2b2622] text-[#f1ece6]">
          <div className="mx-auto max-w-[1160px] px-6 py-10 md:px-10 md:py-12 lg:px-16 lg:pb-6 lg:pt-12">
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.8fr_1fr_0.9fr] lg:gap-x-12">
              <div className="max-w-[280px]">
                <p className="font-display text-[34px] font-light leading-none tracking-[-0.02em] text-[#f4eee8] md:text-[38px]">{brand}</p>
                <p className="mt-4 text-[15px] leading-[1.72] text-[#b7aba0] md:text-[16px]">{footer.description}</p>
              </div>

              {footer.columns.map((column) => (
                <div key={column.title}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#a79a8f]">{column.title}</p>
                  <ul className="mt-4 space-y-2 text-[14px] leading-[1.65] text-[#f1ece6] md:text-[15px]">
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

            <div className="mt-7 border-t border-[#4a413b] pt-[18px]">
              <div className="flex flex-col gap-2 text-[11px] text-[#8f847a] md:flex-row md:items-center md:justify-between">
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
