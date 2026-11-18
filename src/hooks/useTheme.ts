import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import type { ThemeContextValue } from '../types'

export default function useTheme(): ThemeContextValue {
  const contexto = useContext(ThemeContext)

  if (contexto === undefined) {
    throw new Error('useTheme debe utilizarse dentro de ThemeProvider.')
  }

  return contexto
}