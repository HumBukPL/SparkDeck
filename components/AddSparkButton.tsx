import { Button } from './ui/button'
import { IconPlus } from '@tabler/icons-react'

export default function AddSparkButton() {
  return (
    <Button className="fixed right-8 bottom-8 rounded-full" aria-label="Add" size="addIcon">
      {/* The ! are needed because most probably the Shadcn UI Button component has its own icon size definitions*/}
      <IconPlus className="h-9! w-9!" stroke={3} />
    </Button>
  )
}
