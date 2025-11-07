'use client'

import { Card } from '@/components/Card'
import { Spark } from '@/types/spark'
import { getSparksFromLocal } from '@/utils/sparkUtils'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export default function SparkGrid() {
  const [sparks] = useLocalStorage<Array<Spark>>('sparks', [])


  // const [sparks, setSparks] = useState<Array<Spark>>([])
  // useEffect(() => {
  //   const featchSparks = async () => {
  //     const storedSparks = getSparksFromLocal()
  //     setSparks(storedSparks)
  //   }
  //   featchSparks()
  // }, [])

  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {sparks.map((spark) => (
        <Card
          id={spark.id}
          key={spark.title}
          title={spark.title}
          featuredWords={spark.featuredWords}
          image={spark.image}
        />
      ))}
    </div>
  )
}
