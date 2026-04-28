import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { chronologieContactPage } from '@/content/chronologie/contact'
import { chronologieHome } from '@/content/chronologie/home'

import { ChronologieContactPage } from './ChronologieContactPage'

describe('ChronologieContactPage native candidate', () => {
  it('matches the tightened redlines for the contact hero, boutique copy block, and CTA proportions', () => {
    render(
      <ChronologieContactPage
        brand={chronologieHome.brand}
        footer={chronologieHome.footer}
        data={chronologieContactPage}
      />
    )

    const hero = screen.getByRole('heading', { level: 1, name: /visit the boutique/i })
    const heroSection = hero.closest('section')
    expect(heroSection?.className ?? '').toContain('lg:pt-[84px]')
    expect(heroSection?.className ?? '').toContain('lg:pb-[74px]')
    expect(hero.className).toContain('lg:text-[60px]')
    expect(hero.className).toContain('max-w-[760px]')
    expect(hero.className).toContain('lg:leading-[1.04]')

    const eyebrowRow = within(heroSection as HTMLElement).getByText(/^contact$/i).parentElement
    expect(eyebrowRow?.className ?? '').toContain('text-[12px]')
    expect(eyebrowRow?.className ?? '').toContain('tracking-[0.32em]')

    const heroBody = screen.getByText(/appointments, enquiries, and private viewings for guests visiting our jakarta boutique\./i)
    expect(heroBody.className).toContain('max-w-[700px]')
    expect(heroBody.className).toContain('lg:text-[17px]')
    expect(heroBody.className).toContain('lg:leading-[1.65]')

    const plazaHeading = screen.getByRole('heading', { level: 2, name: /plaza indonesia/i })
    const contentSection = plazaHeading.closest('section')
    const contentGrid = plazaHeading.closest('div')?.parentElement
    const leftColumn = plazaHeading.parentElement as HTMLElement | null
    expect(contentSection?.className ?? '').toContain('lg:pb-[96px]')
    expect(contentGrid?.className ?? '').toContain('md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]')
    expect(contentGrid?.className ?? '').toContain('lg:gap-[64px]')
    expect(leftColumn?.className ?? '').toContain('max-w-[448px]')

    const boutiqueLabel = leftColumn?.querySelector('div')
    expect(boutiqueLabel?.className ?? '').toContain('text-[12px]')
    expect(boutiqueLabel?.className ?? '').toContain('tracking-[0.32em]')
    expect(plazaHeading.className).toContain('text-[27px]')

    const addressBlock = plazaHeading.nextElementSibling as HTMLElement | null
    expect(addressBlock?.className ?? '').toContain('max-w-[344px]')
    expect(addressBlock?.className ?? '').toContain('text-[16px]')
    expect(addressBlock?.className ?? '').toContain('leading-[1.72]')

    const hoursSection = leftColumn?.children[3] as HTMLElement | undefined
    expect(hoursSection?.className ?? '').toContain('mt-10')
    const hoursGrid = hoursSection?.querySelector('div.mt-4') as HTMLElement | null
    expect(hoursGrid?.className ?? '').toContain('max-w-[372px]')
    expect(hoursGrid?.className ?? '').toContain('gap-x-12')
    expect(hoursGrid?.className ?? '').toContain('text-[16px]')
    const hoursNote = screen.getByText(/private viewings available outside opening hours\./i)
    expect(hoursNote.className).toContain('text-[14px]')

    const contactSection = leftColumn?.children[4] as HTMLElement | undefined
    expect(contactSection?.className ?? '').toContain('mt-10')
    const contactList = contactSection?.querySelector('div.mt-4') as HTMLElement | null
    expect(contactList?.className ?? '').toContain('text-[16px]')
    expect(contactList?.className ?? '').toContain('leading-[1.6]')

    const primaryActions = screen.getAllByRole('link', { name: /inquire via whatsapp/i })
    expect(primaryActions.length).toBeGreaterThan(0)
    expect(primaryActions[0].className).toContain('min-h-[52px]')
    expect(primaryActions[0].className).toContain('min-w-[296px]')
    expect(primaryActions[0].className).toContain('rounded-[3px]')
    expect(primaryActions[0].className).toContain('px-[26px]')
    expect(primaryActions[0].className).toContain('text-[13px]')
    expect(primaryActions[0].className).toContain('tracking-[0.16em]')

    const secondaryActions = screen.getAllByRole('link', { name: /get directions/i })
    expect(secondaryActions.length).toBeGreaterThan(0)
    expect(secondaryActions[0].className).toContain('min-h-[52px]')
    expect(secondaryActions[0].className).toContain('min-w-[224px]')
    expect(secondaryActions[0].className).toContain('rounded-[3px]')
    expect(secondaryActions[0].className).toContain('px-[26px]')
    expect(secondaryActions[0].className).toContain('text-[13px]')
    expect(secondaryActions[0].className).toContain('tracking-[0.16em]')

    const ctaRow = primaryActions[0].parentElement
    expect(ctaRow?.className ?? '').toContain('mt-10')
    expect(ctaRow?.className ?? '').toContain('gap-4')

    const map = screen.getByTitle(/chronologie boutique location map/i)
    const mapFrame = map.parentElement
    expect(mapFrame?.className ?? '').toContain('md:mt-8')
    expect(mapFrame?.className ?? '').toContain('md:min-h-[468px]')
    expect(mapFrame?.className ?? '').toContain('border')
    expect(mapFrame?.className ?? '').not.toContain('shadow-[')

    const footerBrand = screen.getAllByText(/^chronologie$/i).at(-1)
    const footerWrapper = footerBrand?.closest('footer')?.firstElementChild
    expect(footerWrapper?.className ?? '').toContain('lg:pt-20')
    expect(footerWrapper?.className ?? '').toContain('lg:pb-[52px]')
  })
})
