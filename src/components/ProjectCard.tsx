import type { ProjectItem } from '../types'

export default function ProjectCard({ proyecto }: { proyecto: ProjectItem }) {
  return (
    <article className="card-trabajos">
      <h3>{proyecto.titulo}</h3>

      {proyecto.imagen && (
        <img
          src={proyecto.imagen}
          alt={proyecto.imagenAlt ?? proyecto.titulo}
          className="img-trabajo"
        />
      )}

      <p>{proyecto.descripcion}</p>

      <ul className="badges" aria-label="Tecnologías y etiquetas del proyecto">
        {proyecto.tecnologias.map((tecnologia) => (
          <li key={tecnologia} className="badge">
            {tecnologia}
          </li>
        ))}
      </ul>

      {proyecto.urlProyecto && (
        <a
          href={proyecto.urlProyecto}
          className="btn-proyecto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      )}
    </article>
  )
}