import { Badge } from './ui/badge'
import { fallbackImageUrl } from '@/const/fallbackImageUrl'
import { Button } from './ui/button'
import { IconDots } from '@tabler/icons-react'

type CardProps = {
  title: string
  featuredWords: string[]
  image?: string
}

export function Card({ title, featuredWords, image }: CardProps) {
  const shouldShowImage = Boolean(image)
  const backgroundImage = shouldShowImage ? `url(${image})` : `url(${fallbackImageUrl})`

  return (
    <div
      className={
        'relative flex h-72 flex-col justify-end gap-1 overflow-hidden rounded-md border border-zinc-900 bg-cover bg-center p-3'
      }
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/75 to-transparent">
        <Button
          size="noLimit"
          variant="outline"
          className="absolute top-3 right-3 cursor-pointer rounded-full bg-black/30 p-0.5 backdrop-blur-md transition-transform duration-150 hover:scale-110 hover:bg-black/70"
        >
          <IconDots className="h-6! w-6!" />
        </Button>
      </div>
      <div className="z-10">
        <h4 className="text-md line-clamp-2 font-semibold text-white drop-shadow-md">{title}</h4>
        <div className="mt-1 flex flex-row gap-1">
          {featuredWords.map((word) => (
            <Badge key={word} variant="secondary" className="text-xs">
              {word}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
