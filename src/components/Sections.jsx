import { education, experience, profile, projects, skills } from '../data'

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
      <Label left="Projets" />
      {projects.map((p) => (
        <a className="ed-row" key={p.slug} href={`#projet/${p.slug}`}>
          <h3>{p.name}</h3>
          <span className="st">{p.kind}</span>
          <p>{p.pitch}</p>
          <ul className="features">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <div className="stack">
            {p.stack.map((s, i) => (
              <span key={s}>{i > 0 && <i>/</i>}{s}</span>
            ))}
          </div>
          {p.shots[0] && <img className="cover" src={p.shots[0].src} alt="" decoding="async" />}
          <span className="more">Voir le projet →</span>
        </a>
      ))}
    </section>
  )
}

// une ligne par entrée : dates à gauche, « poste · structure », ce qui a été fait, technos
function Entry({ when, title, sub, text, points, tags }) {
  return (
    <article className="ed-entry">
      <span className="when">{when}</span>
      <div>
        <h3>{title}</h3>
        {sub && <p className="sub">{sub}</p>}
        {text && <p>{text}</p>}
        {points && <ul>{points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
        {tags && <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>}
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <Label left="Expérience et formation" />
      {experience.map((x) => (
        <Entry key={x.org} when={x.when} title={`${x.role} · ${x.org}`} sub={`${x.place} · ${x.periods}`} text={x.text} points={x.points} tags={x.tags} />
      ))}
      {education.map((e) => (
        <Entry key={e.title} when={e.when} title={e.title} sub={`${e.where} · ${e.note}`} text={e.text} />
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
      <Label left="Contact" />
      <a className="big" href={`mailto:${profile.email}`}>Contactez-moi <span aria-hidden="true">→</span></a>
      <p className="addr">
        <span>{profile.email}</span>
        <a href={profile.github} target="_blank" rel="noopener">github.com/NIKAerer ↗</a>
        <a href={profile.cv} target="_blank" rel="noopener">CV (PDF) ↗</a>
      </p>
    </section>
  )
}
