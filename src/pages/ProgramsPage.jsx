import PageHero from '../components/PageHero'
import ProgramsIntroSection from '../components/ProgramsIntroSection'
import ProgramsServicesSection from '../components/ProgramsServicesSection'
import { LOREM_LONG } from '../data/placeholders'
import '../styles/starter.css'

function ProgramsPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Programs & Services' }]}
        title="Programs & Services"
        lede={LOREM_LONG}
      />

      <ProgramsIntroSection />

      <ProgramsServicesSection showViewAll={false} />
    </article>
  )
}

export default ProgramsPage
