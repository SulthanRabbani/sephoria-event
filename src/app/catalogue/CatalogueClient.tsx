'use client'

import { useMemo, useState } from 'react'
import { BRANDS, watches } from '../data/watches'
import { WatchCard } from '../components/WatchCard'

const CONDITIONS = ['All', 'New', 'Pre-Owned'] as const
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'year-desc', label: 'Newest First' },
] as const

export function CatalogueClient() {
  const [brand, setBrand] = useState('All')
  const [condition, setCondition] = useState<(typeof CONDITIONS)[number]>('All')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let result = [...watches]
    if (brand !== 'All') result = result.filter((w) => w.brand === brand)
    if (condition !== 'All') result = result.filter((w) => w.condition === condition)
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'year-desc') result.sort((a, b) => b.year - a.year)
    return result
  }, [brand, condition, sort])

  return (
    <main className="min-h-screen bg-[#080810] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page header */}
        <div className="mb-14">
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-3">
            Explore
          </p>
          <h1 className="font-syncopate text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-widest">
            CATALOGUE
          </h1>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col gap-4 pb-8 mb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="text-white/30 text-[11px] tracking-widest uppercase shrink-0">
                Brand
              </span>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="bg-transparent border border-white/20 text-white text-[11px] tracking-widest uppercase px-3 py-2 rounded-full focus:outline-none focus:border-[#FF4D6D] cursor-pointer"
              >
                <option value="All" className="bg-[#080810]">
                  All Brands
                </option>
                {BRANDS.map((b) => (
                  <option key={b} value={b} className="bg-[#080810]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort — moved alongside brand on mobile */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-white/30 text-[11px] tracking-widest uppercase shrink-0">
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-white/20 text-white text-[11px] tracking-widest uppercase px-3 py-2 rounded-full focus:outline-none focus:border-[#FF4D6D] cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="bg-[#080810]">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Condition — full-width row */}
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-[11px] tracking-widest uppercase shrink-0">
              Condition
            </span>
            <div className="flex gap-2">
              {CONDITIONS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={`text-[11px] tracking-widest uppercase px-3 py-2 rounded-full border transition-colors duration-200 ${
                    condition === c
                      ? 'bg-[#FF4D6D] border-[#FF4D6D] text-white'
                      : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result count */}
        <p className="text-white/30 text-[11px] tracking-widest uppercase mb-10">
          {filtered.length} {filtered.length === 1 ? 'Timepiece' : 'Timepieces'}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-32 text-white/20 text-xs tracking-[0.2em] uppercase">
            No timepieces match your selection
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filtered.map((watch, i) => (
              <WatchCard key={watch.slug} watch={watch} priority={i < 4} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
