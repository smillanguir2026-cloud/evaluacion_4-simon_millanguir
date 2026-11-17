import { useState } from 'react'
import type { FormEvent } from 'react'
import type { ContactFormData } from '../types'

export default function ContactPage() {
  const [formulario, setFormulario] = useState<ContactFormData>({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const [error, setError] = useState<string>('')
  const [borradorUrl, setBorradorUrl] = useState<string>('')

  function actualizarCampo(
    campo: keyof ContactFormData,
    valor: string,
  ): void {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }))

    setError('')
    setBorradorUrl('')
  }

  function prepararMensaje(evento: FormEvent<HTMLFormElement>): void {
    evento.preventDefault()

    const nombre = formulario.nombre.trim()
    const email = formulario.email.trim()
    const mensaje = formulario.mensaje.trim()

    if (!nombre || !email || !mensaje) {
      setError('Completa todos los campos con información válida.')
      setBorradorUrl('')
      return
    }

    const destinatario = 'smillanguir2026@alu.uct.cl'
    const asunto = encodeURIComponent(`Nuevo mensaje de contacto de ${nombre}`)
    const cuerpo = encodeURIComponent(
      `De: ${nombre} (${email})\n\nMensaje:\n${mensaje}`,
    )

    setError('')
    setBorradorUrl(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`,
    )
  }

  return (
    <section className="section contacto">
      <h2>Contacto</h2>

      <form className="form-contacto" onSubmit={prepararMensaje}>
        <p className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            autoComplete="name"
            required
            placeholder="Ej. Simón Millanguir"
            value={formulario.nombre}
            onChange={(evento) =>
              actualizarCampo('nombre', evento.target.value)
            }
          />
        </p>

        <p className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="nombre@correo.com"
            value={formulario.email}
            onChange={(evento) =>
              actualizarCampo('email', evento.target.value)
            }
          />
        </p>

        <p className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            placeholder="Escribe tu mensaje aquí..."
            value={formulario.mensaje}
            onChange={(evento) =>
              actualizarCampo('mensaje', evento.target.value)
            }
          />
        </p>

        <button type="submit" className="btn-submit">
          Preparar mensaje
        </button>

        {error && <p role="alert">{error}</p>}

        <p role="status" aria-live="polite">
          {borradorUrl &&
            'Mensaje preparado. Ábrelo en Gmail para revisarlo y enviarlo.'}
        </p>

        {borradorUrl && (
          <a
            href={borradorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-proyecto"
          >
            Abrir borrador en Gmail
          </a>
        )}
      </form>
    </section>
  )
}