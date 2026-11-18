import type { ProjectCardProps } from '../types'
import './ProjectCard.css'

export default function ProjectCard({ proyecto }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{proyecto.titulo}</h3>

      {proyecto.imagen && (
        <img
          src={proyecto.imagen}
          alt={proyecto.imagenAlt ?? proyecto.titulo}
          className="project-card__image"
        />
      )}

      <p className="project-card__description">
        {proyecto.descripcion}
      </p>

      <ul
        className="project-card__tags"
        aria-label="Tecnologías y etiquetas del proyecto"
      >
        {proyecto.tecnologias.map((tecnologia) => (
          <li key={tecnologia} className="project-card__tag">
            {tecnologia}
          </li>
        ))}
      </ul>

      {proyecto.urlProyecto && (
        <a
          href={proyecto.urlProyecto}
          className="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      )}
    </article>
  )
}