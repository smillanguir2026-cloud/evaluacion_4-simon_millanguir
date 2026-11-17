import useFetchApi from '../hooks/useFetchApi'
import type { GitHubRepo } from '../types'

const API_URL =
  'https://api.github.com/users/smillanguir2026-cloud/repos?sort=updated&per_page=6'

export default function GitHubProjects() {
  const { data: repositorios, loading, error } =
    useFetchApi<GitHubRepo[]>(API_URL)

  return (
    <section className="github-projects">
      <h2>Mis repositorios en GitHub</h2>

      {loading && (
        <p role="status" aria-live="polite">
          Cargando repositorios...
        </p>
      )}

      {error && (
        <p role="alert">
          No fue posible cargar los repositorios: {error}
        </p>
      )}

      {!loading && !error && repositorios && (
        <>
          {repositorios.length === 0 ? (
            <p>No hay repositorios públicos para mostrar.</p>
          ) : (
            <div className="grid-trabajos">
              {repositorios.map((repositorio) => (
                <article
                  key={repositorio.id}
                  className="card-trabajos"
                >
                  <h3>{repositorio.name}</h3>

                  <p>
                    {repositorio.description ??
                      'Este repositorio no tiene descripción.'}
                  </p>

                  <ul className="badges" aria-label="Datos del repositorio">
                    <li className="badge">
                      {repositorio.language ?? 'Sin lenguaje indicado'}
                    </li>
                    <li className="badge">
                      Estrellas: {repositorio.stargazers_count}
                    </li>
                  </ul>

                  <a
                    href={repositorio.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-proyecto"
                  >
                    Ver código de {repositorio.name}
                  </a>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}