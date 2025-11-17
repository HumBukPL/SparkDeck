//For now all data will be stored in local storage

import { Spark } from '@/types/spark'

// TYPES ONLY FOR FUNCTIONS BELOW
type saveSparkToLocalType = {
  title: string
  featuredWords: string[]
  image?: string
}

export function saveSparkToLocal(data: saveSparkToLocalType) {
  const existingSparks = JSON.parse(localStorage.getItem('sparks') || '[]')
  existingSparks.push({ ...data, id: Date.now().toString() })
  localStorage.setItem('sparks', JSON.stringify(existingSparks))
}

export function getSparksFromLocal(): Spark[] {
  const sparks = JSON.parse(localStorage.getItem('sparks') || '[]')
  return sparks
}

export function deleteSparkFromLocal(id: string) {
  const existingSparks = JSON.parse(localStorage.getItem('sparks') || '[]')
  const updatedSparks = existingSparks.filter((spark: Spark) => spark.id !== id)
  localStorage.setItem('sparks', JSON.stringify(updatedSparks))
}

export function updateSparkInLocal(updatedSpark: Spark) {
  const existingSparks = JSON.parse(localStorage.getItem('sparks') || '[]')
  const updatedSparks = existingSparks.map((spark: Spark) =>
    spark.id === updatedSpark.id ? updatedSpark : spark
  )
  localStorage.setItem('sparks', JSON.stringify(updatedSparks))
}
