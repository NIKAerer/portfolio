import { useEffect, useRef, useState } from 'react'
import { projects } from '../data'

const slugFromHash = () => {
  const m = location.hash.match(/^#projet\/([\w-]+)$/)
  return m ? m[1] : null
}

// Page détaillée d'un projet, ouverte par l'adresse #projet/<slug> (le bouton retour la ferme).
export default function ProjectPage() {
  const [slug, setSlug] = useState(slugFromHash)
  const closeRef = useRef(null)
  const from = useRef(0)

  useEffect(() => {
    const sync = () => setSlug(slugFromHash())
    addEventListener('hashchange', sync)
    return () => removeEventListener('hashchange', sync)
  }, [])

  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (!project) return
    from.current = scrollY
    document.documentElement.classList.add('proj-open')
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') close() }
    addEventListener('keydown', onKey)
    return () => {
      removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('proj-open')
      scrollTo(0, from.current)
    }
  }, [project])

  function close() {
    // retour à la liste, à l'endroit où on était
    history.replaceState(null, '', location.pathname + location.search + '#projets')
    setSlug(null)
  }

  if (!project) return null
  const others = projects.filter((p) => p.slug !== project.slug)
  return (
    <div className="proj" role="dialog" aria-modal="true" aria-labelledby="proj-title">
      <div className="proj-in">
        <button className="proj-close" ref={closeRef} onClick={close}>← Retour aux projets</button>
        <p className="proj-kind">{project.kind}</p>
        <h2 id="proj-title">{project.name}</h2>
        <p className="proj-pitch">{project.pitch}</p>

        <div className="proj-actions">
          {project.links.map((l) => (
            <a className="btn primary" key={l.href} href={l.href} target="_blank" rel="noopener">{l.label} ↗</a>
          ))}
          {project.code && <a className="btn" href={project.code} target="_blank" rel="noopener">Code sur GitHub ↗</a>}
        </div>
        {project.codeNote && <p className="proj-note">{project.codeNote}</p>}

        {project.shots.length > 0 && (
          <div className="proj-shots">
            {project.shots.map((s) => (
              <figure key={s.src}>
                <img src={s.src} alt={s.alt} loading="lazy" />
                {s.caption && <figcaption>{s.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <div className="proj-cols">
          <section>
            <h3>Le projet</h3>
            {project.about.map((t) => <p key={t}>{t}</p>)}
          </section>
          <section>
            <h3>Technologies</h3>
            <p className="proj-stack">{project.stack.join(' · ')}</p>
          </section>
        </div>

        {project.credit && <p className="proj-credit">{project.credit}</p>}

        <nav className="proj-next" aria-label="Autres projets">
          {others.map((o) => (
            <a key={o.slug} href={`#projet/${o.slug}`}>Voir aussi : {o.name} →</a>
          ))}
        </nav>
      </div>
    </div>
  )
}
