export default function HomePage() {
  return (
    <section className="section sobre-mi">
      <h2>Sobre mí</h2>

      <div className="sobre-mi-contenido">
        <img
          src="/images/perfil.jpg"
          alt="Fotografía de perfil de Simón Millanguir"
          className="img-perfil"
        />

        <p>
          Soy estudiante de la Universidad Católica de Temuco y me estoy
          construyendo en desarrollo frontend. Busco satisfacer las necesidades
          del usuario creando el diseño más óptimo y con la mejor experiencia
          visual según cada cliente y sus criterios, siempre optimizando la
          estructura, la funcionalidad y el diseño.
        </p>
      </div>
    </section>
  )
}