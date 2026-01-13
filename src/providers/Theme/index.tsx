'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import { themeLocalStorageKey } from './shared'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Force light mode only
  const [theme] = useState<Theme>('light')

  const setTheme = useCallback(() => {
    // Theme is locked to light mode - do nothing
    return null
  }, [])

  useEffect(() => {
    // Force light mode and remove any stored preferences
    document.documentElement.setAttribute('data-theme', 'light')
    window.localStorage.removeItem(themeLocalStorageKey)
  }, [])

  return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
