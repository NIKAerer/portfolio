import { education, experience, profile, projects, skills } from '../data'

const YEAR = new Date().getFullYear()

// Style éditorial : la typo porte l'identité, une ligne par élément, des filets fins entre les lignes.
function Label({ left, right }) {
  return (
    <div className="ed-label">
      <span>{left}</span>
      {right && <span>{right}</span>}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projets">
      <Label left="Projets" right="2025 – 2026" />
      {projects.map((p) => (
        <article className="ed-row" key={p.name}>
          <h3>{p.name}</h3>
          <span className="st">● {p.status}</span>
          <p>{p.pitch}</p>
          <ul className="features">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <div className="stack">
            {p.stack.map((s, i) => (
              <span key={s}>{i > 0 && <i>/</i>}{s}</span>
            ))}
          </div>
          <div className="links">
            {p.demo && <a href={p.demo} target="_blank" rel="noopener">Démo ↗</a>}
            {p.code ? <a href={p.code} target="_blank" rel="noopener">Code ↗</a> : <span>Code bientôt public</span>}
          </div>
        </article>
      ))}
      <article className="ed-row soon">
        <h3>Projet 3</h3>
        <span className="st">○ Bientôt</span>
        <p>Un outil métier, pensé dès le départ avec tests, intégration continue et démo en ligne.</p>
      </article>
    </section>
  )
}

export function Parcours() {
  return (
    <section id="parcours">
      <Label left="Parcours" right="Paris · Rouen" />
      <div className="ed-cols">
        <div className="ed-col">
          <h4>Expérience</h4>
          {experience.map((x) => (
            <div className="ed-item" key={x.org}>
              <span className="when">{x.periods.join(' · ')}</span>
              <strong>{x.org}</strong>
              <p className="role">{x.role} · {x.place}</p>
              <ul>{x.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="ed-col">
          <h4>Formation</h4>
          {education.map((e) => (
            <div className="ed-item" key={e.title}>
              <span className="when">{e.years}{e.note ? ` · ${e.note}` : ''}</span>
              <strong>{e.title}</strong>
              <p className="role">{e.where}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="competences">
      <Label left="Compétences" />
      <dl className="ed-skills">
        {skills.map((g) => (
          <div key={g.group}>
            <dt>{g.group}</dt>
            <dd>{g.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="ed-cta">
      <Label left="Contact" right="Île-de-France · télétravail" />
      <a className="big" href={`mailto:${profile.email}`}>Écris-moi <span aria-hidden="true">→</span></a>
      <p className="addr">
        <span>{profile.email}</span>
        <a href={profile.github} target="_blank" rel="noopener">github.com/NIKAerer ↗</a>
      </p>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <span>© {YEAR} {profile.name}</span>
      <span>Bureau modélisé et rendu dans Blender · <a href="#credits">Crédits 3D</a></span>
      <p id="credits" className="credits">
        Textures et décors : Poly Haven (CC0). Certains objets du bureau proviennent de Sketchfab sous licence CC BY : leurs auteurs seront crédités ici.
      </p>
    </footer>
  )
}
