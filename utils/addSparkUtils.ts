//For now all data will be stored in local storage

import { Spark } from '@/types/spark'

// For now save image as a data URL string
export function saveSparkToLocal(data: Spark) {
  const existingSparks = JSON.parse(localStorage.getItem('sparks') || '[]')
  existingSparks.push(data)
  localStorage.setItem('sparks', JSON.stringify(existingSparks))
}

export function getSparksFromLocal(): Spark[] {
  const sparks = JSON.parse(localStorage.getItem('sparks') || '[]')
  return sparks
}
