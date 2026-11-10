import Hero from './components/Hero'
import { About, Contact, Experience, Footer, Projects, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
