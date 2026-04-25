import type { ReactNode } from 'react'

type SectionShellProps = {
  id?: string
  tone?: 'dark' | 'cream'
  children: ReactNode
  className?: string
}

export function SectionShell({ id, tone = 'cream', children, className = '' }: SectionShellProps) {
  const toneClass = tone === 'dark' ? 'bg-[var(--color-night)] text-[var(--color-paper)]' : 'bg-[var(--color-cream)] text-[var(--color-ink)]'

  return (
    <section id={id} className={`${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10">{children}</div>
    </section>
  )
}
