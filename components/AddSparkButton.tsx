'use client'

import { Button } from './ui/button'
import { IconPlus } from '@tabler/icons-react'
import { useRouter, usePathname } from 'next/navigation'

export function AddSparkButton() {
  const history = useRouter()
  const pathname = usePathname()

  const handleButtonClick = () => {
    history.push('/addSpark')
  }

  // Can be string comparison because this is the only route we want to exclude
  const shouldRenderButton = pathname !== '/addSpark'

  if (!shouldRenderButton) {
    return null
  }

  return (
    <Button
      className="fixed right-8 bottom-8 rounded-full transition-transform duration-150 hover:scale-110"
      aria-label="Add"
      size="addIcon"
      onClick={handleButtonClick}
    >
      {/* The ! are needed because most probably the Shadcn UI Button component has its own icon size definitions*/}
      <IconPlus className="h-9! w-9!" stroke={3} />
    </Button>
  )
}
