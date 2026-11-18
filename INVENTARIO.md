# Inventario de migración E2 → React

**Autor:** Simón Pedro Millanguir Zambrano.  
**Asignatura:** Desarrollo de Frontend (ICINF1107).  
**Evaluación:** N.º 4 - Proyecto Integrado Final.

## 1. Origen y referencia visual

El proyecto de origen es el portafolio de la Evaluación 2, desarrollado con HTML, CSS y JavaScript en la carpeta portafolio-personal-simon-millanguir. El trabajo de React se mantiene en un repositorio independiente.

[Ver captura del portafolio original](docs/captura-e2.png)

La referencia incluye la presentación personal, los trabajos del semestre y el formulario de contacto. La comparación debe realizarse con el tema claro, que conserva la identidad visual original.

## 2. Mapeo de secciones y componentes

| Elemento de la E2 | Destino en React | Transformación realizada |
|---|---|---|
| Encabezado con nombre y presentación | src/components/Navbar.tsx | Encapsulación en un componente con estilos propios |
| Menú con enlaces a secciones | src/components/Navbar.tsx | Sustitución de anclas por NavLink e indicación de ruta activa |
| Sección Sobre mí | src/pages/HomePage.tsx | Conversión a vista React conservando fotografía y presentación |
| Sección Trabajos del semestre | src/pages/ProjectsPage.tsx | Composición de tarjetas a partir de una lista de datos |
| Tarjetas de trabajos | src/components/ProjectCard.tsx | Componente reutilizable que recibe un proyecto mediante props tipadas |
| Textos y etiquetas de los trabajos | src/data/portafolioData.ts | Separación de los datos estáticos del JSX |
| Formulario de contacto | src/pages/ContactPage.tsx | Campos controlados, validación y mensajes gestionados con estado |
| Script de preparación del correo | src/pages/ContactPage.tsx | Sustitución del acceso directo al DOM por eventos y estado de React |
| Pie de página | src/components/Footer.tsx | Componente independiente con identificación del autor y universidad |
| Hoja CSS del portafolio | src/portafolio.css y hojas por componente | Separación de reglas comunes y específicas con nomenclatura BEM |
| Fotografía e imagen de la lectura | src/assets/images | Importación de los recursos desde módulos TS y TSX |
| Proyecto Simon's Store | public/simons-store | Conservación del sitio HTML independiente y de su enlace |

## 3. Contenido y diseño conservados

- Nombre, universidad, carrera y presentación personal.
- Fotografía de perfil y portada de la lectura.
- Información de los tres trabajos del semestre.
- Acceso al proyecto Simon's Store.
- Campos de nombre, correo electrónico y mensaje.
- Finalidad de preparar un mensaje dirigido al correo del autor.
- Paleta azul del tema claro, tipografía del sistema, tarjetas, bordes y distribución adaptable.

Los ajustes de arquitectura responden a los requisitos de React y navegación SPA. El tema oscuro y la sección de GitHub son ampliaciones del portafolio.

## 4. Navegación y composición

La E2 mostraba todas las secciones en un documento y utilizaba enlaces con fragmentos para desplazarse hasta ellas. La versión React utiliza BrowserRouter, Routes y Route para asociar cada vista con una dirección:

| Ruta | Componente |
|---|---|
| / | HomePage |
| /trabajos | ProjectsPage |
| /contacto | ContactPage |
| Cualquier ruta no definida | NotFoundPage |

Navbar y Footer permanecen fuera de Routes para mostrarse en todas las vistas. NavLink identifica el enlace activo y mantiene disponible la navegación al inicio. La página 404 ofrece un enlace de retorno.

## 5. Migración de la interactividad de contacto

El script original utilizaba getElementById para leer los campos y addEventListener para registrar el envío. Después construía una dirección de Gmail y abría una ventana.

En ContactPage, useState almacena los campos, el error y la dirección del borrador. Los controles utilizan value y onChange, y el formulario utiliza onSubmit con preventDefault.

La validación combina campos obligatorios y formato de correo de HTML con una comprobación de valores vacíos tras aplicar trim. Los mensajes utilizan role="alert" y role="status".

La versión React muestra una confirmación y un enlace explícito para abrir Gmail. El usuario revisa y envía el borrador allí; la aplicación no afirma que el correo ya se haya enviado ni necesita un backend propio.

En el index.html de la E2 revisado, el script de contacto era la interacción JavaScript identificada. No se atribuyen al original filtros, modo oscuro ni menú hamburguesa que no se encontraban en ese archivo.

## 6. Tipado y organización de datos

Las interfaces compartidas se encuentran en src/types/index.ts:

- ProjectItem: datos de los trabajos.
- ProjectCardProps: propiedades del componente de tarjeta.
- ContactFormData: campos del formulario.
- GitHubRepo: campos utilizados de la respuesta de GitHub.
- FetchState: datos, carga y error de una consulta.
- Theme, ThemeContextValue y ThemeProviderProps: estado y propiedades del contexto de tema.

Los trabajos se declaran en portafolioData.ts y se renderizan mediante map. Sus identificadores se utilizan como key. Los campos opcionales permiten mostrar imágenes y enlaces únicamente cuando existen.

## 7. Refactorización de CSS con BEM

Los estilos específicos se distribuyen entre Navbar.css, Footer.css, ProjectCard.css, GitHubProjects.css, HomePage.css, ProjectsPage.css y ContactPage.css.

portafolio.css concentra variables, normalización, foco visible, estructura común, botones compartidos y ajustes del tema oscuro.

Ejemplos de la migración:

| Clase o selector anterior | Organización actual |
|---|---|
| header, logo y nav | navbar y elementos navbar__... |
| card-trabajos | project-card |
| img-trabajo | project-card__image |
| badges y badge de la tarjeta | project-card__tags y project-card__tag |
| sobre-mi-contenido | about__content |
| img-perfil | about__image |
| grid-trabajos | projects__grid |
| form-contacto | contact__form |
| form-group | contact__field |
| btn-submit | contact__button |

Se utiliza github-projects__status--error como modificador de estado. La clase section y su elemento section__title permiten compartir la presentación de las secciones.

## 8. Funcionalidades incorporadas en la E4

### API de GitHub

GitHubProjects consulta los repositorios públicos del autor y el repositorio Calculadora-Limites. La calculadora se coloca primero y se excluye mini-portafolio-prueba. Se evita duplicar la calculadora y se limita la salida a seis tarjetas.

Las tarjetas muestran nombre, descripción, lenguaje, estrellas y enlace al código. Se ofrecen textos alternativos para campos nulos.

useFetchApi centraliza fetch y useEffect, los estados de carga, datos y error, la comprobación de errores HTTP y la cancelación mediante AbortController. Una caché en memoria reutiliza respuestas exitosas por URL; no persiste al recargar ni deduplica peticiones en curso.

### Tema compartido

ThemeProvider mantiene el estado light o dark y lo publica mediante ThemeContext. useTheme utiliza useContext para acceder al valor y a la función de cambio.

El botón de Navbar permite alternar el tema e indica su estado con aria-pressed. Un efecto actualiza data-theme en el documento y CSS adapta los colores. El tema se mantiene al navegar; al recargar vuelve al modo claro.

Se utiliza Context porque la apariencia es una preferencia transversal, evitando estados de tema independientes en cada página.

### Identidad y navegación

Se incorporaron una página 404, la indicación de ruta activa y un favicon SVG con las iniciales SM.

## 9. Accesibilidad y adaptabilidad

Se conservaron las etiquetas semánticas y las asociaciones entre etiquetas y campos. En JSX se utilizan className y htmlFor. Las imágenes mantienen textos alternativos y los enlaces externos incorporan rel="noopener noreferrer".

Se añadieron mensajes de estado accesibles, indicación del tema, foco visible y la declaración lang="es" del documento. Las cuadrículas utilizan media queries y columnas con minmax para adaptarse a diferentes anchos.

Estos elementos describen la implementación; no constituyen por sí solos una certificación de conformidad WCAG. Los resultados de las pruebas manuales de teclado, ancho de 320 px y contraste deben registrarse en el README según lo observado.

## 10. Verificación y trazabilidad

Durante el desarrollo se ejecutaron npm run build y npm run lint sin errores. Deben repetirse sobre la versión final si se modifica el código.

El registro final de pruebas se documenta en README.md. La asistencia utilizada, las correcciones y la reflexión personal se declaran en uso_ia.md.