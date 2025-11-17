import { MAX_FEATURED_WORDS_LENGTH } from '@/const/maxFeaturedWordsLength'
import { z } from 'zod'

export const editSparkFormSchema = z.object({
  title: z.string().min(1, 'You must provide a title for the spark').max(50, 'Title is too long'),
  featuredWords: z
    .array(
      z
        .string()
        .min(1, 'Featured word cannot be empty')
        .max(MAX_FEATURED_WORDS_LENGTH, 'Featured word is too long')
    )
    .min(1, 'You must provide at least one featured word')
    .max(3, 'You can provide up to 3 featured words'),
  image: z.string().optional(),
})

export type EditSparkFormSchema = z.infer<typeof editSparkFormSchema>
