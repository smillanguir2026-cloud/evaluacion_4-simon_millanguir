import fabulaDisenador from '../assets/images/fabula-disenador.jpg'
import type { ProjectItem } from '../types'

export const proyectos: ProjectItem[] = [
  {
    id: 1,
    titulo:
      'Trabajo 1: Lectura - La Fábula del Diseñador Centrado en el Usuario',
    descripcion:
      'Lectura sobre el libro "La Fábula del Diseñador Centrado en el Usuario", enfocado en comprender mejor el rol del desarrollador Frontend y la experiencia de usuario.',
    tecnologias: ['UX / Investigación'],
    imagen: fabulaDisenador,
    imagenAlt:
      'Portada o ilustración de La Fábula del Diseñador Centrado en el Usuario',
  },
  {
    id: 2,
    titulo: "Trabajo 2: Simon's Store — Tienda Web",
    descripcion:
      'Desarrollo de un sitio e-commerce de muebles utilizando Flexbox para tarjetas de productos destacados y CSS Grid para la maquetación del catálogo.',
    tecnologias: ['HTML5', 'CSS Grid & Flexbox'],
    urlProyecto: '/simons-store/simons-store.html',
  },
  {
    id: 3,
    titulo: 'Trabajo 3: Portafolio Personal Web',
    descripcion:
      'Prototipo de interfaz profesional con altos estándares de accesibilidad WCAG y maquetación semántica.',
    tecnologias: ['Proyecto P2'],
  },
]