import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section">
      <h2>404: página no encontrada</h2>
      <p>La dirección que visitaste no existe en este portafolio.</p>

      <Link to="/" className="btn-proyecto">
        Volver al inicio
      </Link>
    </section>
  )
}