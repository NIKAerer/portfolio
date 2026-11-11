import { profile } from '../data'

// Première page du site. Le même composant est affiché dans l'écran du PC (inerte)
// puis en plein écran à la fin de la plongée (cliquable).
export default function ScreenPage({ interactive }) {
  const tab = interactive ? undefined : -1
  return (
    <div className="page">
      <div className="bar">
        <span className="logo">
          nikoloz<span>.dev</span>
        </span>
        <nav aria-label="Sections">
          <a href="#projets" tabIndex={tab}>Projets</a>
          <a href="#experience" tabIndex={tab}>Expérience</a>
          <a href="#contact" tabIndex={tab}>Contact</a>
        </nav>
      </div>
      <div className="hero-txt">
        <span className="eyebrow">{profile.role}</span>
        <h1>
          {profile.firstName} <em>{profile.lastName}</em>
        </h1>
        <div className="ctas">
          <a className="btn primary" href="#projets" tabIndex={tab}>Voir mes projets</a>
          <a className="btn" href={profile.cv} target="_blank" rel="noopener" tabIndex={tab}>Mon CV (PDF)</a>
        </div>
        <span className="status">Disponible</span>
      </div>
    </div>
  )
}
