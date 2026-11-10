import Hero from './components/Hero'
import { About, Contact, Experience, Footer, Projects, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
