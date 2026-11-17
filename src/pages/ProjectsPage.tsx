import ProjectCard from '../components/ProjectCard'
import GitHubProjects from '../components/GitHubProjects'
import { proyectos } from '../data/portafolioData'

export default function ProjectsPage() {
  return (
    <section className="section trabajos">
      <h2>Trabajos del Semestre</h2>

      <div className="grid-trabajos">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>

      <GitHubProjects />
    </section>
  )
}