import { ChronologieContactPage } from '@/components/chronologie/ChronologieContactPage'
import { chronologieContactPage } from '@/content/chronologie/contact'
import { chronologieHome } from '@/content/chronologie/home'

export default function ContactNativePreviewPage() {
  return <ChronologieContactPage brand={chronologieHome.brand} footer={chronologieHome.footer} data={chronologieContactPage} />
}
