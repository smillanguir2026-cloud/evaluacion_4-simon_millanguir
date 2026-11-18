import ProjectCard from '../components/ProjectCard'
import GitHubProjects from '../components/GitHubProjects'
import { proyectos } from '../data/portafolioData'
import './ProjectsPage.css'

export default function ProjectsPage() {
  return (
    <section className="section projects">
      <h2 className="section__title projects__title">
        Trabajos del Semestre
      </h2>

      <div className="projects__grid">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>

      <GitHubProjects />
    </section>
  )
}