import { education, experience, profile, projects, skills } from '../data'

const YEAR = new Date().getFullYear()

function Project({ p }) {
  return (
    <article className="projet">
      <div className="projet-head">
        <h3>{p.name}</h3>
        <span className="badge">{p.status}</span>
      </div>
      <p>{p.pitch}</p>
      <ul className="features">
        {p.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
      <div className="links">
        {p.demo && <a href={p.demo} target="_blank" rel="noopener">Démo ↗</a>}
        {p.code ? <a href={p.code} target="_blank" rel="noopener">Code ↗</a> : <span className="soon">Code bientôt public</span>}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projets">
      <span className="label">Projets</span>
      <h2>Ce que je construis</h2>
      <div className="projets">
        {projects.map((p) => <Project key={p.name} p={p} />)}
        <article className="projet wip">
          <h3>Projet 3</h3>
          <p>Un outil métier, pensé dès le départ avec tests, intégration continue et démo en ligne. Il arrive bientôt.</p>
        </article>
      </div>
    </section>
  )
}

export function Parcours() {
  return (
    <section id="parcours">
      <span className="label">Parcours</span>
      <h2>Expérience et formation</h2>
      <div className="parcours">
        <div className="col">
          <h3 className="col-title">Expérience</h3>
          {experience.map((x) => (
            <div className="entry" key={x.org}>
              <div className="entry-head">
                <strong>{x.role}</strong>
                <span>{x.org} · {x.place}</span>
              </div>
              {x.detail && <p className="muted">{x.detail}</p>}
              <p className="periods">{x.periods.join(' · ')}</p>
              <ul>{x.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="col">
          <h3 className="col-title">Formation</h3>
          {education.map((e) => (
            <div className="entry" key={e.title}>
              <div className="entry-head">
                <strong>{e.title}</strong>
                <span>{e.years}{e.note ? ` · ${e.note}` : ''}</span>
              </div>
              <p className="muted">{e.where}</p>
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
      <span className="label">Compétences</span>
      <h2>Ma boîte à outils</h2>
      <div className="skills">
        {skills.map((g) => (
          <div className="skill-group" key={g.group}>
            <h3>{g.group}</h3>
            <div className="tags">{g.items.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="label">Contact</span>
      <h2>On travaille ensemble ?</h2>
      <p>Je cherche un poste de développeur web junior en Île-de-France ou en télétravail. Écris-moi, je réponds vite.</p>
      <div className="ctas">
        <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
      </div>
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
