import { useEffect, useRef, useState } from 'react'
import { startPlayer } from '../hero/player'
import ScreenPage from './ScreenPage'

const BASE = import.meta.env.BASE_URL + 'sequence/'

export default function Hero() {
  const r = useRef({})
  const ref = (name) => (node) => { r.current[name] = node }
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => startPlayer(r.current, { base: BASE, onProgress: setProgress, onReady: () => setReady(true) }), [])

  const skip = () => {
    const { track } = r.current
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    scrollTo({ top: track.offsetTop + track.offsetHeight - innerHeight, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="track" ref={ref('track')}>
      <div className="sticky" ref={ref('sticky')}>
        <canvas className="seq" ref={ref('canvas')} aria-hidden="true" />
        <img
          className="fallback"
          ref={ref('fallback')}
          src={import.meta.env.BASE_URL + 'bureau.webp'}
          alt="Le bureau de Nikoloz : néon à son nom, étagère de mangas, écran éteint et poster SCROLL"
        />
        <div className="stage">
          <div className="layer" ref={ref('screenLayer')}>
            <div className="screen" ref={ref('screen')} aria-hidden="true">
              <div className="screen-in" ref={ref('screenIn')}>
                <ScreenPage interactive={false} />
              </div>
            </div>
          </div>
          <div className="layer" ref={ref('posterLayer')}>
            <div className="u2560" ref={ref('poster')}>
              <div className="poster-glow" />
              <div className="poster-chevron">
                <svg viewBox="0 0 24 24" fill="none" stroke="#f2c48d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="vignette" />
        <div className="full" ref={ref('full')} inert>
          <ScreenPage interactive />
        </div>
        <div className="veil" ref={ref('veil')} />
        <div className={'loader' + (ready ? ' done' : '')} role="status" aria-live="polite">
          <span className="loader-name">nikoloz<span>.dev</span></span>
          <span className="loader-bar"><i style={{ transform: `scaleX(${Math.max(progress, 0.04)})` }} /></span>
          <span className="loader-txt">{ready ? 'Bureau prêt' : 'J’allume le bureau…'}</span>
        </div>
        <div className="ui">
          <button className="skip" ref={ref('skip')} type="button" onClick={skip}>Passer l’intro</button>
          <div className="hint-drag" ref={ref('hintDrag')}><i />Glisse pour regarder</div>
          <div className="hint-scroll" ref={ref('hintScroll')}>Fais défiler<b /></div>
        </div>
      </div>
    </div>
  )
}
