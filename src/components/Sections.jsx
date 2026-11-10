import { experience, profile, projects, skills } from '../data'

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
          {(p.demo || p.code) && (
            <div className="links">
              {p.demo && <a href={p.demo} target="_blank" rel="noopener">Démo ↗</a>}
              {p.code && <a href={p.code} target="_blank" rel="noopener">Code ↗</a>}
            </div>
          )}
        </article>
      ))}
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <Label left="Expérience" right="2024 – 2025" />
      {experience.map((x) => (
        <article className="ed-row ed-exp" key={x.org}>
          <h3>{x.org}</h3>
          <span className="st">{x.role} · {x.place}</span>
          <p className="when">{x.periods.join(' · ')}</p>
          <p>{x.intro}</p>
          <ul className="features">
            {x.points.map((pt) => <li key={pt}>{pt}</li>)}
          </ul>
        </article>
      ))}
    </section>
  )
}

export function About() {
  return (
    <section id="apropos">
      <Label left="À propos" />
      <div className="ed-about">
        {profile.about.map((t) => <p key={t}>{t}</p>)}
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
            <dd>
              {g.items.join(' · ')}
              <span className="where">{g.where}</span>
            </dd>
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
      <p className="ed-pitch">Un poste de développeur web junior à pourvoir ?</p>
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
