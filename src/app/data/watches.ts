export type Watch = {
  slug: string
  brand: string
  model: string
  reference: string
  price: number
  condition: 'New' | 'Pre-Owned'
  movement: string
  caseSize: string
  caseMaterial: string
  waterResistance: string
  year: number
  image: string
  description: string
  braceletMaterial: string
  powerReserve: string
}

export const watches: Watch[] = [
  {
    slug: 'rolex-submariner-date-126610ln',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    price: 14200,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 3235',
    caseSize: '41mm',
    caseMaterial: 'Oystersteel',
    waterResistance: '300m / 1,000ft',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Rolex Submariner is the reference among divers\' watches. Robust and waterproof to a depth of 300 metres, the Submariner Date features the iconic Cerachrom bezel insert with engraved graduations. Worn by professionals and collectors alike, it represents the pinnacle of function and prestige.',
    braceletMaterial: 'Oystersteel Oyster bracelet',
    powerReserve: '70 hours',
  },
  {
    slug: 'breitling-navitimer-b01-chronograph',
    brand: 'Breitling',
    model: 'Navitimer B01 Chronograph 43',
    reference: 'AB0139211C1P1',
    price: 8950,
    condition: 'New',
    movement: 'Automatic, Breitling Calibre B01',
    caseSize: '43mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '30m / 100ft',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Navitimer is the quintessential pilot\'s watch. Introduced in 1952, it remains one of the most iconic chronographs ever created, featuring a circular slide rule for airspeed, fuel consumption, and flight time calculations. The Calibre B01 is entirely developed and produced in-house.',
    braceletMaterial: 'Leather strap, pin buckle',
    powerReserve: '70 hours',
  },
  {
    slug: 'jaeger-lecoultre-master-ultra-thin-moon',
    brand: 'Jaeger-LeCoultre',
    model: 'Master Ultra Thin Moon',
    reference: 'Q1368420',
    price: 12800,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 925/1',
    caseSize: '39mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '50m / 165ft',
    year: 2021,
    image:
      'https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Master Ultra Thin Moon embodies refined elegance and technical mastery. Its moonphase display is accurate to one day every 3,887 years. The case measures just 9.9mm in thickness — an achievement of haute horlogerie that is as wearable as it is impressive.',
    braceletMaterial: 'Alligator leather strap',
    powerReserve: '43 hours',
  },
  {
    slug: 'vacheron-constantin-patrimony',
    brand: 'Vacheron Constantin',
    model: 'Patrimony Contemporary',
    reference: '85180/000G-9230',
    price: 24500,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 2450 Q6/1',
    caseSize: '40mm',
    caseMaterial: '18k White Gold',
    waterResistance: '30m / 100ft',
    year: 2020,
    image:
      'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Patrimony embodies Vacheron Constantin\'s fine watchmaking traditions through absolute purity of design. The caseback features a sapphire crystal window revealing the skeletonized oscillating weight. A rare combination of minimalism and outstanding horological complexity.',
    braceletMaterial: 'Alligator leather strap, 18k white gold folding clasp',
    powerReserve: '40 hours',
  },
  {
    slug: 'audemars-piguet-royal-oak-15500',
    brand: 'Audemars Piguet',
    model: 'Royal Oak Selfwinding',
    reference: '15500ST.OO.1220ST.04',
    price: 32000,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 4302',
    caseSize: '41mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '50m / 165ft',
    year: 2021,
    image:
      'https://images.unsplash.com/photo-1618215650148-e8e61eae521c?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'Launched in 1972 as the world\'s first luxury sports watch crafted in steel, the Royal Oak remains one of the most coveted timepieces of all time. Designed by the legendary Gérald Genta, its distinctive octagonal bezel with exposed screws is instantly recognisable worldwide.',
    braceletMaterial: 'Integrated stainless steel bracelet',
    powerReserve: '70 hours',
  },
  {
    slug: 'hublot-big-bang-unico-king-gold',
    brand: 'Hublot',
    model: 'Big Bang Unico King Gold',
    reference: '441.OX.1180.RX',
    price: 19800,
    condition: 'New',
    movement: 'Automatic, UNICO HUB1242',
    caseSize: '42mm',
    caseMaterial: 'King Gold',
    waterResistance: '100m / 330ft',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1587865501868-36104829d7db?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Big Bang Unico is the synthesis of Hublot\'s Art of Fusion philosophy — contrasting materials, bold aesthetics, and in-house manufacture. The UNICO movement is fully developed and produced in Hublot\'s Nyon workshops, offering a flyback chronograph with column wheel.',
    braceletMaterial: 'Black rubber strap with King Gold deployant clasp',
    powerReserve: '72 hours',
  },
  {
    slug: 'patek-philippe-nautilus-5711',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    price: 89000,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 26-330 S C',
    caseSize: '40mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '120m / 395ft',
    year: 2019,
    image:
      'https://images.unsplash.com/photo-1619976396248-56d05beb2919?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Nautilus is one of the most sought-after sports watches in the world. Designed by Gérald Genta and introduced in 1976, the 5711 is the steel reference that commands extraordinary premiums on the secondary market. A genuine collector\'s trophy.',
    braceletMaterial: 'Integrated stainless steel bracelet',
    powerReserve: '45 hours',
  },
  {
    slug: 'tag-heuer-carrera-heuer-02',
    brand: 'TAG Heuer',
    model: 'Carrera Heuer-02',
    reference: 'CBN201A.FC6542',
    price: 5200,
    condition: 'New',
    movement: 'Automatic, Heuer-02',
    caseSize: '42mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '100m / 330ft',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Carrera is TAG Heuer\'s most storied timepiece, born from the legendary Carrera Panamericana road race. The in-house Heuer-02 movement is COSC-certified, offering outstanding precision alongside a column-wheel vertical clutch chronograph mechanism.',
    braceletMaterial: 'Stainless steel bracelet',
    powerReserve: '80 hours',
  },
  {
    slug: 'rolex-day-date-40-228238',
    brand: 'Rolex',
    model: 'Day-Date 40',
    reference: '228238',
    price: 41500,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 3255',
    caseSize: '40mm',
    caseMaterial: '18k Yellow Gold',
    waterResistance: '100m / 330ft',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1730757679771-b53e798846cf?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Day-Date is Rolex\'s most prestigious watch, historically worn by world leaders and icons of industry. Since its introduction in 1956, it has been crafted exclusively in precious metals. The Calibre 3255 is one of the most advanced self-winding movements Rolex has ever produced.',
    braceletMaterial: '18k Yellow Gold President bracelet',
    powerReserve: '70 hours',
  },
  {
    slug: 'iwc-portugieser-chronograph',
    brand: 'IWC',
    model: 'Portugieser Chronograph',
    reference: 'IW371601',
    price: 7800,
    condition: 'Pre-Owned',
    movement: 'Automatic, Calibre 69355',
    caseSize: '40.9mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '30m / 100ft',
    year: 2020,
    image:
      'https://images.unsplash.com/photo-1623052946389-f29990070f71?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Portugieser Chronograph is one of IWC\'s most elegant sports-dress watches. Its large, legible dial in the classic pocketwatch tradition, combined with superb lacquer finishing and a coin-edge case, makes it a timeless choice for the discerning collector.',
    braceletMaterial: 'Brown alligator leather strap, pin buckle',
    powerReserve: '68 hours',
  },
  {
    slug: 'panerai-luminor-marina-pam01313',
    brand: 'Panerai',
    model: 'Luminor Marina',
    reference: 'PAM01313',
    price: 9200,
    condition: 'New',
    movement: 'Manual-winding, Calibre P.6000',
    caseSize: '44mm',
    caseMaterial: 'Brushed Stainless Steel',
    waterResistance: '300m / 1,000ft',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1618215650201-8d552591218d?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Luminor Marina\'s bold design reflects Panerai\'s deep naval heritage. Originally developed for the Italian Navy, it features the legendary crown-protecting bridge and an in-house Swiss manufacture movement. A statement piece unlike any other.',
    braceletMaterial: 'Brown leather strap, tang buckle',
    powerReserve: '72 hours',
  },
  {
    slug: 'omega-seamaster-aqua-terra',
    brand: 'Omega',
    model: 'Seamaster Aqua Terra',
    reference: '220.10.41.21.01.001',
    price: 6100,
    condition: 'New',
    movement: 'Automatic, Calibre 8900',
    caseSize: '41mm',
    caseMaterial: 'Stainless Steel',
    waterResistance: '150m / 500ft',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=800&h=900&auto=format&fit=crop&q=80',
    description:
      'The Seamaster Aqua Terra combines maritime heritage with contemporary elegance. Its Co-Axial Master Chronometer movement achieves the highest standard of precision and magnetic resistance, certified by METAS to withstand fields exceeding 15,000 gauss.',
    braceletMaterial: 'Stainless steel bracelet',
    powerReserve: '60 hours',
  },
]

export function getWatchBySlug(slug: string): Watch | undefined {
  return watches.find((w) => w.slug === slug)
}

export function getRelatedWatches(slug: string, brand: string): Watch[] {
  return watches.filter((w) => w.brand === brand && w.slug !== slug).slice(0, 3)
}

export const BRANDS = [...new Set(watches.map((w) => w.brand))].sort()
