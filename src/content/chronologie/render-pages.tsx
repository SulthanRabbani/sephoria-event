import Link from 'next/link'

import { ChronologieRenderPage } from '@/components/chronologie/ChronologieRenderPage'

const baseNav = [
  { label: 'HOME', href: '/' },
  { label: 'COLLECTION', href: '/collection' },
  { label: 'JOURNAL', href: '/journal' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

function headerHotspots(activeHref: string) {
  const y = 20
  return [
    { label: 'Chronologie', href: '/', x: 64, y: 12, width: 112, height: 32 },
    ...baseNav.map((item, index) => {
      const positions = [451, 536, 675, 787, 880]
      const widths = [51, 105, 78, 59, 80]
      return {
        label: item.label,
        href: item.href,
        x: positions[index],
        y,
        width: widths[index],
        height: 24,
        current: item.href === activeHref,
      }
    }),
    { label: 'VISIT THE STORE', href: '/contact', x: 1172, y, width: 140, height: 24 },
  ]
}

const footerSemantics = (
  <footer>
    <p>Chronologie</p>
    <p>A curated atelier of fine timepieces. By appointment, by passion, by tradition.</p>
    <p>Discover</p>
    <Link href="/collection">Collection</Link>
    <Link href="/maisons">Maisons</Link>
    <Link href="/journal">Journal</Link>
    <Link href="/about">About</Link>
    <p>Boutique</p>
    <p>Plaza Indonesia, Level 2</p>
    <p>Jl. M.H. Thamrin Kav. 28–30</p>
    <p>Jakarta Pusat 10350</p>
    <p>Indonesia</p>
    <p>Contact</p>
    <a href="tel:+6281234567890">+62 812 3456 7890</a>
    <a href="mailto:concierge@chronologie.id">concierge@chronologie.id</a>
    <p>© 2026 Chronologie. All rights reserved.</p>
    <p>Authorised Pre-Owned Specialists</p>
  </footer>
)

export function HomeRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/homepage.png"
      imageAlt="Chronologie homepage design"
      width={1440}
      height={5601}
      hotspots={[
        ...headerHotspots('/'),
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 64, y: 703, width: 243, height: 50 },
        { label: 'EXPLORE COLLECTION', href: '/collection', x: 324, y: 703, width: 203, height: 50 },
        { label: 'BOOK A PRIVATE VIEWING', href: '/contact', x: 543, y: 3504, width: 354, height: 48 },
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 520, y: 4758, width: 250, height: 48 },
        { label: 'VISIT THE BOUTIQUE', href: '/contact', x: 788, y: 4758, width: 196, height: 48 },
      ]}
    >
      <main>
        <h1>Time, considered with intention.</h1>
        <p>A private atelier of rare and pre-owned timepieces from the world&apos;s most respected maisons.</p>
        <h2>A curated selection of exceptional timepieces</h2>
        <p>Submariner No-Date</p>
        <p>Ref. 5172G</p>
        <p>Cosmograph Daytona</p>
        <p>Calatrava Ultra-Thin</p>
        <p>Datejust 36</p>
        <p>Royal Oak</p>
        <h2>We do not sell watches. We curate them.</h2>
        <h2>An invitation to spend time with time.</h2>
        <h2>Insights on time, craftsmanship, and collecting</h2>
        <p>The Art of Collecting Vintage Rolex</p>
        <p>Inside Patek Philippe Craftsmanship</p>
        <p>What Defines a Modern Luxury Watch</p>
        <h2>Begin a quiet conversation.</h2>
        <Link href="/contact">Book a private viewing</Link>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function CollectionRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/collection.png"
      imageAlt="Chronologie collection page design"
      width={1440}
      height={2519}
      hotspots={[
        ...headerHotspots('/collection'),
        { label: 'ALL PIECES', href: '/collection', x: 389, y: 467, width: 95, height: 24, current: true },
        { label: 'DIVING INSTRUMENTS', href: '/collection', x: 516, y: 467, width: 176, height: 24 },
        { label: 'DRESS TIMEPIECES', href: '/collection', x: 724, y: 467, width: 153, height: 24 },
        { label: 'CHRONOGRAPHS', href: '/collection', x: 909, y: 467, width: 134, height: 24 },
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 96, y: 903, width: 250, height: 40 },
        { label: 'INQUIRE', href: '/collection/submariner-no-date', x: 834, y: 905, width: 90, height: 24 },
        { label: 'INQUIRE', href: '/collection/submariner-no-date', x: 1101, y: 905, width: 90, height: 24 },
        { label: 'INQUIRE', href: '/collection/submariner-no-date', x: 194, y: 1540, width: 90, height: 24 },
        { label: 'INQUIRE', href: '/collection/submariner-no-date', x: 647, y: 1540, width: 90, height: 24 },
        { label: 'INQUIRE', href: '/collection/submariner-no-date', x: 1091, y: 1540, width: 90, height: 24 },
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 531, y: 1966, width: 250, height: 48 },
        { label: 'VISIT THE BOUTIQUE', href: '/contact', x: 789, y: 1966, width: 196, height: 48 },
      ]}
    >
      <main>
        <h1>Each piece, a story worth telling.</h1>
        <p>The Collection</p>
        <p>A small, deliberate selection of timepieces refreshed weekly, available by private inquiry.</p>
        <p>ALL PIECES</p>
        <p>DIVING INSTRUMENTS</p>
        <p>DRESS TIMEPIECES</p>
        <p>CHRONOGRAPHS</p>
        <p>Rolex</p>
        <p>Submariner No-Date</p>
        <p>A study in restraint and precision</p>
        <p>Cosmograph Daytona</p>
        <p>Heritage Chronograph</p>
        <p>Calatrava Ultra-Thin</p>
        <p>Royal Oak Jumbo</p>
        <p>Datejust 36</p>
        <p>Portugieser Automatic</p>
        <h2>Begin a quiet conversation.</h2>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function ProductDetailRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/product-detail.png"
      imageAlt="Chronologie product detail page design"
      width={1440}
      height={2719}
      hotspots={[
        ...headerHotspots('/collection'),
        { label: 'CHECK AVAILABILITY VIA WHATSAPP', href: '/contact', x: 805, y: 504, width: 411, height: 48 },
        { label: 'SCHEDULE A PRIVATE VIEWING', href: '/contact', x: 805, y: 568, width: 411, height: 48 },
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 531, y: 2167, width: 250, height: 48 },
        { label: 'VISIT THE BOUTIQUE', href: '/contact', x: 789, y: 2167, width: 196, height: 48 },
      ]}
    >
      <main>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/collection">Collection</Link>
          <span>Submariner No-Date</span>
        </nav>
        <p>BELL &amp; ROSS</p>
        <h1>BR 05 BLACK CERAMIC</h1>
        <p>Ref. 124060</p>
        <p>Price</p>
        <p>$7,475</p>
        <h2>TECHNICAL DETAILS</h2>
        <p>Collection:</p>
        <p>URBAN</p>
        <p>Movement:</p>
        <p>Calibre BR-CAL.321-1 Automatic mechanical. 54-hour power reserve.</p>
        <p>YOU MAY ALSO CONSIDER</p>
        <p>BR 05 SKELETON BLACK CERAMIC</p>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function BrandRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/brand.png"
      imageAlt="Chronologie maisons page design"
      width={1440}
      height={1982}
      hotspots={[
        ...headerHotspots('/maisons'),
        { label: 'DISCOVER ROLEX', href: '/maisons/aerowatch', x: 96, y: 742, width: 156, height: 24 },
        { label: 'DISCOVER PATEK PHILIPPE', href: '/maisons/aerowatch', x: 754, y: 742, width: 208, height: 24 },
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 531, y: 1630, width: 250, height: 48 },
        { label: 'VISIT THE BOUTIQUE', href: '/contact', x: 789, y: 1630, width: 196, height: 48 },
      ]}
    >
      <main>
        <p>THE MAISONS</p>
        <h1>House we have the privilege to carry.</h1>
        <p>From the most established Genevan ateliers to independent masters - our maisons share one trait: an obsession with craft.</p>
        <p>The Collection</p>
        <p>A symbol of precision and enduring excellence.</p>
        <p>Discover Rolex</p>
        <p>Timeless innovation passed down through generations.</p>
        <p>Discover PATEK PHILIPPE</p>
        <p>ALL MAISONS</p>
        <p>Audemars Piguet</p>
        <p>Omega</p>
        <p>Cartier</p>
        <p>Vacheron Constantin</p>
        <p>A. Lange &amp; Söhne</p>
        <p>IWC</p>
        <p>Jaeger-LeCoultre</p>
        <p>Panerai</p>
        <h2>Begin a quiet conversation.</h2>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function BrandDetailRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/brand-detail.png"
      imageAlt="Chronologie brand detail page design"
      width={1440}
      height={2244}
      hotspots={[
        ...headerHotspots('/maisons'),
        { label: 'RESET', href: '/maisons/aerowatch', x: 102, y: 802, width: 78, height: 34 },
      ]}
    >
      <main>
        <h1>Aerowatch</h1>
        <p>Aerowatch was founded in 1910 in La Chaux-de-Fonds, Aerowatch saw itself as a symbol of modernity.</p>
        <p>Product Filter</p>
        <p>RESET</p>
        <p>Style</p>
        <p>Men</p>
        <p>Women</p>
        <p>bracelet</p>
        <p>Leather</p>
        <p>Stainless Steel</p>
        <p>dial</p>
        <p>Dark-coloured dial</p>
        <p>Light-coloured dial</p>
        <p>categories</p>
        <p>Movement</p>
        <p>Default Sorting</p>
        <p>BELL &amp; ROSS</p>
        <p>BR 03 Skeleton</p>
        <p>$ 6,375</p>
        <p>BR03A-WH-STPG/SCA</p>
        <p>$ 7,975</p>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function JournalRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/news.png"
      imageAlt="Chronologie journal page design"
      width={1440}
      height={1858}
      hotspots={[
        ...headerHotspots('/journal'),
        { label: 'EXPLORE ARTICLE', href: '/journal/the-art-of-collecting-vintage-rolex', x: 813, y: 733, width: 171, height: 24 },
        { label: 'EXPLORE ARTICLE', href: '/journal/the-art-of-collecting-vintage-rolex', x: 68, y: 1260, width: 171, height: 24 },
        { label: 'EXPLORE ARTICLE', href: '/journal/the-art-of-collecting-vintage-rolex', x: 756, y: 1260, width: 171, height: 24 },
      ]}
    >
      <main>
        <p>The Journal</p>
        <h1>Notes from the atelier.</h1>
        <p>Essays, dispatches and quiet observations on horology, craft, and the people who shape it.</p>
        <p>COLLECTING</p>
        <p>April 21, 2026</p>
        <p>The Art of Collecting Vintage Rolex</p>
        <p>Understanding the value beyond time: What makes a vintage Rolex more than just a watch...</p>
        <Link href="/journal/the-art-of-collecting-vintage-rolex">Explore Article</Link>
        <p>Inside Patek Philippe Craftsmanship</p>
        <p>What Defines a Modern Luxury Watch</p>
        <Link href="/journal/the-art-of-collecting-vintage-rolex">Explore Article</Link>
        <Link href="/journal/the-art-of-collecting-vintage-rolex">Explore Article</Link>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function JournalDetailRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/news-detail.png"
      imageAlt="Chronologie journal detail page design"
      width={1440}
      height={2264}
      hotspots={[
        ...headerHotspots('/journal'),
        { label: 'EXPLORE ARTICLE', href: '/journal/the-art-of-collecting-vintage-rolex', x: 68, y: 1626, width: 171, height: 24 },
        { label: 'EXPLORE ARTICLE', href: '/journal/the-art-of-collecting-vintage-rolex', x: 756, y: 1626, width: 171, height: 24 },
      ]}
    >
      <main>
        <p>1 Comments</p>
        <h1>The Art of Collecting Vintage Rolex</h1>
        <p>April 21, 2026 · 6 min read</p>
        <p>There is a particular kind of collector we have come to admire — one who buys rarely, slowly, and with a clarity of intent that borders on the monastic.</p>
        <p>Inside Patek Philippe Craftsmanship</p>
        <p>What Defines a Modern Luxury Watch</p>
        <Link href="/journal/the-art-of-collecting-vintage-rolex">Explore Article</Link>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function AboutRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/about.png"
      imageAlt="Chronologie about page design"
      width={1440}
      height={2967}
      hotspots={headerHotspots('/about')}
    >
      <main>
        <p>About Chronologie</p>
        <h1>A house built on patience, provenance, and quiet conviction.</h1>
        <p>Chronologie was founded in Jakarta as a destination for collectors who value the conversation as much as the acquisition. We are not a shop. We are an atelier.</p>
        <h2>Our Story</h2>
        <p>Chronologie was born from a single belief: that the right timepiece, presented in the right way, at the right moment, becomes an heirloom before it ever leaves the boutique.</p>
        <p>Vision</p>
        <p>To be Indonesia&apos;s most considered destination for fine timepieces.</p>
        <p>Mission</p>
        <p>To curate, authenticate, and present timepieces with absolute integrity.</p>
        <p>The Service</p>
        <h2>An expertise quietly given.</h2>
        <p>Personal Sourcing</p>
        <p>Full Authentication</p>
        <p>Private Viewings</p>
        <p>Aftercare</p>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}

export function ContactRenderPage() {
  return (
    <ChronologieRenderPage
      imageSrc="/chronologie/renders/contact.png"
      imageAlt="Chronologie contact page design"
      width={1440}
      height={1299}
      hotspots={[
        ...headerHotspots('/contact'),
        { label: 'INQUIRE VIA WHATSAPP', href: '/contact', x: 60, y: 682, width: 243, height: 50 },
        { label: 'GET DIRECTIONS', href: 'https://maps.google.com/?q=Plaza+Indonesia+Jakarta', x: 328, y: 682, width: 203, height: 50 },
      ]}
    >
      <main>
        <p>Boutique</p>
        <p>Plaza Indonesia</p>
        <p>Level 2, Unit 218 / Jl. M.H. Thamrin Kav. 28–30 / Jakarta Pusat 10350, Indonesia</p>
        <p>Hours</p>
        <p>Monday – Friday</p>
        <p>10.00 — 21.00</p>
        <p>Saturday – Sunday</p>
        <p>10.00 — 22.00</p>
        <p>Private viewings available outside opening hours.</p>
        <p>Contact</p>
        <a href="tel:+6281234567890">+62 812 3456 7890</a>
        <a href="mailto:concierge@chronologie.id">concierge@chronologie.id</a>
        <Link href="/contact">Inquire via WhatsApp</Link>
        <a href="https://maps.google.com/?q=Plaza+Indonesia+Jakarta">Get Directions</a>
      </main>
      {footerSemantics}
    </ChronologieRenderPage>
  )
}
