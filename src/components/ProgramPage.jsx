import ArticleSidebar from './ArticleSidebar'
import PageHero from './PageHero'
import '../styles/starter.css'

function RichSection({ id, title, paragraphs = [], bullets }) {
  return (
    <section className="rte anchor" id={id || undefined}>
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {bullets?.length > 0 && (
        <ul>
          {bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

function ProgramPage({ data }) {
  const { name, tagline, overview, sections = [] } = data

  return (
    <article>
      <PageHero
        crumbs={[
          { label: 'Programs & Services', to: '/programs' },
          { label: name },
        ]}
        title={name}
        lede={tagline}
      />

      <div className="page-body page-body--with-nav">
        <ArticleSidebar />
        <div>
          {overview && (
            <RichSection
              title="Overview"
              paragraphs={overview.paragraphs}
              bullets={overview.bullets}
            />
          )}
          {sections.map((s) => (
            <RichSection
              key={s.id}
              id={s.id}
              title={s.title}
              paragraphs={s.paragraphs}
              bullets={s.bullets}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProgramPage
