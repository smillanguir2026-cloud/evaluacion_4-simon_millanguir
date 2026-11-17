export interface ProjectItem {
  id: number
  titulo: string
  descripcion: string
  tecnologias: string[]
  imagen?: string
  imagenAlt?: string
  urlProyecto?: string
}
export interface ContactFormData {
  nombre: string
  email: string
  mensaje: string
}
export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
}

export interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}