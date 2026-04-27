import { ChronologieAboutPage } from '@/components/chronologie/ChronologieAboutPage'
import { chronologieAboutPage } from '@/content/chronologie/about'
import { chronologieHome } from '@/content/chronologie/home'

export default function AboutPage() {
  return <ChronologieAboutPage brand={chronologieHome.brand} footer={chronologieHome.footer} data={chronologieAboutPage} />
}
