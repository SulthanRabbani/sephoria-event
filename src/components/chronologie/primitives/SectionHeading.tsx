type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  invert?: boolean
  decorated?: boolean
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  decorated = true,
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'mx-auto text-center' : ''
  const lineColor = invert ? 'bg-white/16' : 'bg-[rgba(35,29,24,0.12)]'
  const eyebrowColor = invert ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)]'
  const titleColor = invert ? 'text-[var(--color-paper)]' : 'text-[var(--color-ink)]'
  const descriptionColor = invert ? 'text-white/68' : 'text-[var(--color-copy)]'

  return (
    <div className={`max-w-[760px] ${textAlign}`}>
      {decorated ? (
        <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className={`h-px w-14 ${lineColor}`} />
          <p className={`text-[11px] uppercase tracking-[0.32em] ${eyebrowColor}`}>{eyebrow}</p>
          <span className={`h-px w-14 ${lineColor}`} />
        </div>
      ) : (
        <p className={`text-[11px] uppercase tracking-[0.32em] ${eyebrowColor}`}>{eyebrow}</p>
      )}

      <h2 className={`mt-6 font-display text-4xl leading-[0.96] md:text-5xl lg:text-[56px] ${titleColor} ${titleClassName}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-7 md:text-[15px] ${descriptionColor} ${descriptionClassName}`}>{description}</p>
    </div>
  )
}
