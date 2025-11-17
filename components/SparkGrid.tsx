'use client'

import { Card } from '@/components/Card'
import { Spark } from '@/types/spark'
import { getSparksFromLocal } from '@/utils/sparkUtils'
import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { EditModal } from './EditModal'

export default function SparkGrid() {
  const [sparks, setSparks] = useLocalStorage<Array<Spark>>('sparks', [])
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editingSpark, setEditingSpark] = useState<Spark | null>(null)

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
          setEditModalOpen={setEditModalOpen}
          setEditingSpark={setEditingSpark}
        />
      ))}
      <EditModal
        title={editingSpark?.title || ''}
        image={editingSpark?.image || ''}
        featuredWords={editingSpark?.featuredWords || []}
        id={editingSpark?.id || ''}
        refetch={updateSparks}
        open={editModalOpen}
        setOpen={setEditModalOpen}
      />
    </div>
  )
}
