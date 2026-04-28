import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { chronologieContactPage } from '@/content/chronologie/contact'
import { chronologieHome } from '@/content/chronologie/home'

import { ChronologieContactPage } from './ChronologieContactPage'

describe('ChronologieContactPage native candidate', () => {
  it('matches the updated contact redlines for the approved journal-style hero, CTA proportions, and map balance', () => {
    render(
      <ChronologieContactPage
        brand={chronologieHome.brand}
        footer={chronologieHome.footer}
        data={chronologieContactPage}
      />
    )

    const hero = screen.getByRole('heading', { level: 1, name: /notes from the atelier\./i })
    const heroSection = hero.closest('section')
    expect(heroSection?.className ?? '').toContain('lg:pt-[56px]')
    expect(heroSection?.className ?? '').toContain('lg:pb-[86px]')
    expect(hero.className).toContain('text-[64px]')
    expect(hero.className).toContain('max-w-[840px]')
    expect(hero.className).toContain('leading-[1.02]')

    const eyebrow = within(heroSection as HTMLElement).getByText(/the journal/i).parentElement
    expect(eyebrow?.className ?? '').toContain('text-[13px]')
    expect(eyebrow?.className ?? '').toContain('tracking-[0.28em]')

    const heroBody = screen.getByText(/essays, dispatches and quiet observations on horology/i)
    expect(heroBody.className).toContain('max-w-[780px]')
    expect(heroBody.className).toContain('text-[19px]')
    expect(heroBody.className).toContain('leading-[1.58]')

    const plazaHeading = screen.getByRole('heading', { level: 2, name: /plaza indonesia/i })
    const contentSection = plazaHeading.closest('section')
    const contentGrid = plazaHeading.closest('div')?.parentElement
    const leftColumn = plazaHeading.parentElement
    expect(contentSection?.className ?? '').toContain('lg:pb-[108px]')
    expect(contentGrid?.className ?? '').toContain('md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]')
    expect(contentGrid?.className ?? '').toContain('lg:gap-[64px]')
    expect(leftColumn?.className ?? '').toContain('max-w-[500px]')

    const hoursSection = leftColumn?.children[3] as HTMLElement | undefined
    expect(hoursSection?.className ?? '').toContain('mt-12')

    const contactSection = leftColumn?.children[4] as HTMLElement | undefined
    expect(contactSection?.className ?? '').toContain('mt-12')

    const primaryActions = screen.getAllByRole('link', { name: /inquire via whatsapp/i })
    expect(primaryActions.length).toBeGreaterThan(0)
    expect(primaryActions[0].className).toContain('min-h-[50px]')
    expect(primaryActions[0].className).toContain('min-w-[243px]')
    expect(primaryActions[0].className).toContain('rounded-[4px]')
    expect(primaryActions[0].className).toContain('px-7')
    expect(primaryActions[0].className).toContain('text-[14px]')
    expect(primaryActions[0].className).toContain('tracking-[0.14em]')

    const secondaryActions = screen.getAllByRole('link', { name: /get directions/i })
    expect(secondaryActions.length).toBeGreaterThan(0)
    expect(secondaryActions[0].className).toContain('min-h-[50px]')
    expect(secondaryActions[0].className).toContain('min-w-[203px]')
    expect(secondaryActions[0].className).toContain('rounded-[4px]')
    expect(secondaryActions[0].className).toContain('px-7')
    expect(secondaryActions[0].className).toContain('text-[14px]')
    expect(secondaryActions[0].className).toContain('tracking-[0.14em]')

    const ctaRow = primaryActions[0].parentElement
    expect(ctaRow?.className ?? '').toContain('mt-10')
    expect(ctaRow?.className ?? '').toContain('gap-4')

    const map = screen.getByTitle(/chronologie boutique location map/i)
    const mapFrame = map.parentElement
    expect(mapFrame?.className ?? '').toContain('md:min-h-[520px]')
    expect(mapFrame?.className ?? '').toContain('border')
    expect(mapFrame?.className ?? '').not.toContain('shadow-[')

    const footerBrand = screen.getAllByText(/^chronologie$/i).at(-1)
    const footerWrapper = footerBrand?.closest('footer')?.firstElementChild
    expect(footerWrapper?.className ?? '').toContain('lg:pt-20')
    expect(footerWrapper?.className ?? '').toContain('lg:pb-[52px]')
  })
})
