import { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type {
  Theme,
  ThemeContextValue,
  ThemeProviderProps,
} from '../types'

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme(): void {
    setTheme((actual) => (actual === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value: ThemeContextValue = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}