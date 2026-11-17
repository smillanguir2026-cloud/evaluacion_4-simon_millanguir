import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="header">
      <hgroup className="logo">
        <h1>Simón Millanguir Zambrano</h1>
        <p>Estudiante de Ingeniería Civil en Informática</p>
      </hgroup>

      <nav className="nav" aria-label="Navegación principal">
        <ul>
          <li>
            <NavLink to="/" end>Sobre mí</NavLink>
          </li>
          <li>
            <NavLink to="/trabajos">Trabajos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}