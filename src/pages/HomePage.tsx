import perfil from '../assets/images/perfil.jpg'
import './HomePage.css'

export default function HomePage() {
  return (
    <section className="section about">
      <h2 className="section__title about__title">Sobre mí</h2>

      <div className="about__content">
        <img
          src={perfil}
          alt="Fotografía de perfil de Simón Millanguir"
          className="about__image"
        />

        <p className="about__description">
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