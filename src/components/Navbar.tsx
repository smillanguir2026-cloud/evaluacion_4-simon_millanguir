import { NavLink } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="navbar">
      <hgroup className="navbar__brand">
        <h1 className="navbar__title">
          Simón Millanguir Zambrano
        </h1>

        <p className="navbar__subtitle">
          Estudiante de Ingeniería Civil en Informática
        </p>
      </hgroup>

      <nav className="navbar__nav" aria-label="Navegación principal">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" end className="navbar__link">
              Sobre mí
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink to="/trabajos" className="navbar__link">
              Trabajos
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink to="/contacto" className="navbar__link">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="navbar__theme-button"
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
      >
        Tema oscuro
      </button>
    </header>
  )
}