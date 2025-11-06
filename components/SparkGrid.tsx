'use client'

import { Card } from '@/components/Card'
import { Spark } from '@/types/spark'
import { getSparksFromLocal } from '@/utils/addSparkUtils'
import { useEffect, useState } from 'react'

export default function SparkGrid() {
  const [sparks, setSparks] = useState<Array<Spark>>([])
  useEffect(() => {
    const featchSparks = async () => {
      const storedSparks = getSparksFromLocal()
      setSparks(storedSparks)
    }
    featchSparks()
  }, [])

  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {sparks.map((spark) => (
        <Card
          key={spark.title}
          title={spark.title}
          featuredWords={spark.featuredWords}
          image={spark.image}
        />
      ))}
    </div>
  )
}
