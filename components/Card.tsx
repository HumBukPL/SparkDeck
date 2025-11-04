import { Badge } from './ui/badge'
import { fallbackImageUrl } from '@/const/fallbackImageUrl'

type CardProps = {
  title: string
  featuredWords: string[]
  image?: string
}

export default function Card({ title, featuredWords, image }: CardProps) {
  const shouldShowImage = Boolean(image)
  const backgroundImage = shouldShowImage ? `url(${image})` : `url(${fallbackImageUrl})`

  return (
    <div
      className={
        'relative flex h-72 flex-col justify-end gap-1 overflow-hidden rounded-md border border-zinc-900 bg-cover bg-center p-3'
      }
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/75 to-transparent" />
      <div className="relative z-10">
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
