import { useState } from 'react'

// importing localStorage into dark mode
import useLocalStorage from './useLocalStorage'

export default function useDarkMode(initialVal) {
  const [someValue, setSomeValue] = useLocalStorage('darkmode', initialVal)
  return [someValue, setSomeValue]
}