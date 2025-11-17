'use client'

import { Card } from '@/components/Card'
import { Spark } from '@/types/spark'
import { getSparksFromLocal } from '@/utils/sparkUtils'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export default function SparkGrid() {
  const [sparks, setSparks] = useLocalStorage<Array<Spark>>('sparks', [])

  const updateSparks = () => {
    const storedSparks = getSparksFromLocal()
    setSparks(storedSparks)
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {sparks.map((spark) => (
        <Card
          id={spark.id}
          key={spark.title}
          title={spark.title}
          featuredWords={spark.featuredWords}
          image={spark.image}
          refetch={updateSparks}
        />
      ))}
    </div>
  )
}
