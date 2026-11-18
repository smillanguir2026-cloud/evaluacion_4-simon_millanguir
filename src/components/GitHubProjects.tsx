import useFetchApi from '../hooks/useFetchApi'
import type { GitHubRepo } from '../types'
import './ProjectCard.css'
import './GitHubProjects.css'

const API_URL =
  'https://api.github.com/users/smillanguir2026-cloud/repos?sort=updated&per_page=6'

const CALCULADORA_URL =
  'https://api.github.com/repos/smillanguir2026-cloud/Calculadora-Limites'

export default function GitHubProjects() {
  const consultaRepos = useFetchApi<GitHubRepo[]>(API_URL)
  const consultaCalculadora = useFetchApi<GitHubRepo>(CALCULADORA_URL)

  const loading = consultaRepos.loading || consultaCalculadora.loading
  const error = consultaRepos.error || consultaCalculadora.error

  const otrosRepositorios = (consultaRepos.data ?? []).filter(
    (repositorio) =>
      repositorio.name.toLowerCase() !== 'mini-portafolio-prueba' &&
      repositorio.name.toLowerCase() !== 'calculadora-limites',
  )

  const repositorios: GitHubRepo[] = consultaCalculadora.data
    ? [consultaCalculadora.data, ...otrosRepositorios].slice(0, 6)
    : otrosRepositorios

  return (
    <section className="github-projects">
      <h2 className="section__title github-projects__title">
        Mis repositorios en GitHub
      </h2>

      {loading && (
        <p className="github-projects__status" role="status">
          Cargando repositorios...
        </p>
      )}

      {error && (
        <p
          className="github-projects__status github-projects__status--error"
          role="alert"
        >
          No fue posible cargar los repositorios: {error}
        </p>
      )}

      {!loading && !error && (
        <>
          {repositorios.length === 0 && (
            <p className="github-projects__status">
              No hay repositorios públicos para mostrar.
            </p>
          )}

          <div className="github-projects__grid">
            {repositorios.map((repositorio) => (
              <article key={repositorio.id} className="project-card">
                <h3 className="project-card__title">
                  {repositorio.name}
                </h3>

                <p className="project-card__description">
                  {repositorio.description ??
                    'Este repositorio no tiene descripción.'}
                </p>

                <ul
                  className="project-card__tags"
                  aria-label="Datos del repositorio"
                >
                  <li className="project-card__tag">
                    {repositorio.language ?? 'Sin lenguaje indicado'}
                  </li>
                  <li className="project-card__tag">
                    Estrellas: {repositorio.stargazers_count}
                  </li>
                </ul>

                <a
                  href={repositorio.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  Ver código de {repositorio.name}
                </a>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  )
}