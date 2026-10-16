import Hero from './components/Hero'
import { Contact, Footer, Parcours, Projects, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <Parcours />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
