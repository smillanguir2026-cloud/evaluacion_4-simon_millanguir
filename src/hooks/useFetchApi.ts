import { useEffect, useState } from 'react'
import type { FetchState } from '../types'

const cache = new Map<string, unknown>()

export default function useFetchApi<T>(url: string): FetchState<T> {
  const [estado, setEstado] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const controlador = new AbortController()

    async function consultar(): Promise<void> {
      if (cache.has(url)) {
        setEstado({
          data: cache.get(url) as T,
          loading: false,
          error: null,
        })
        return
      }

      setEstado({
        data: null,
        loading: true,
        error: null,
      })

      try {
        const respuesta = await fetch(url, {
          signal: controlador.signal,
        })

        if (!respuesta.ok) {
          throw new Error(
            respuesta.status === 403 || respuesta.status === 429
              ? 'GitHub limitó las consultas. Intenta más tarde.'
              : `No se pudieron cargar los datos (${respuesta.status}).`,
          )
        }

        const datos: T = await respuesta.json()

        if (controlador.signal.aborted) return

        cache.set(url, datos)

        setEstado({
          data: datos,
          loading: false,
          error: null,
        })
      } catch (error: unknown) {
        if (controlador.signal.aborted) return

        setEstado({
          data: null,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : 'Ocurrió un error al consultar la API.',
        })
      }
    }

    void consultar()

    return () => {
      controlador.abort()
    }
  }, [url])

  return estado
}