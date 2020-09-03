import { useState } from 'react'

// importing localStorage into dark mode
import useLocalStorage from './useLocalStorage'

export default function useDarkMode(initialVal) {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialVal)
  return [darkMode, setDarkMode]
}