'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IconDots, IconEdit, IconTrash, IconX } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

export function CardMenu() {
  const [isOpen, setIsOpen] = useState(false)
  //TODO: implement functionality for edit and delete buttons
  return (
    <div
      className={cn(
        'p-none absolute top-3 right-3 flex items-center justify-end overflow-hidden rounded-full bg-black/40 backdrop-blur-md transition-all duration-300',
        isOpen ? 'w-30' : 'w-8'
      )}
    >
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          size="icon"
          className="cursor-pointer rounded-full border-none bg-black/20 p-0.5 text-white transition-transform hover:scale-110 hover:bg-black/40"
        >
          <IconDots className="h-6! w-6!" />
        </Button>
      ) : (
        <div className="flex w-full items-center justify-around bg-black/40">
          <Button
            variant="ghost"
            size="icon"
            className="text-white transition-transform hover:scale-110 hover:bg-transparent"
          >
            <IconEdit className="h-5! w-5!" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white transition-transform hover:scale-110 hover:bg-transparent"
          >
            <IconTrash className="h-5! w-5!" />
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white transition-transform hover:scale-110 hover:bg-transparent"
          >
            <IconX className="h-5! w-5!" />
          </Button>
        </div>
      )}
    </div>
  )
}
