import type { ReactNode } from 'react'
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
export interface ProjectCardProps {
  proyecto: ProjectItem
}
export type Theme = 'light' | 'dark'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export interface ThemeProviderProps {
  children: ReactNode
}