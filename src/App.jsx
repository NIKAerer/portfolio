import Hero from './components/Hero'
import ProjectPage from './components/ProjectPage'
import { About, Contact, Experience, Projects, Skills } from './components/Sections'

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
      <ProjectPage />
    </>
  )
}
