'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { IconX } from '@tabler/icons-react'
import { MAX_FEATURED_WORDS_LENGTH } from '@/const/maxFeaturedWordsLength'

type TagsInputProps = {
  value: string[]
  onChange: (tags: string[]) => void
  maxTags?: number
}

export function TagsInput({ value = [], onChange, maxTags = 3 }: TagsInputProps) {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',') {
      e.preventDefault()
      const newTag = inputValue.trim()

      if (!newTag) return
      if (value.includes(newTag)) return setError('This tag already exists')
      if (newTag.length > MAX_FEATURED_WORDS_LENGTH) {
        setError(`Tag is too long (max ${MAX_FEATURED_WORDS_LENGTH} chars)`)
        return
      }
      if (value.length >= maxTags) {
        setError(`You can only add up to ${maxTags} tags`)
        return
      }

      onChange([...value, newTag])
      setInputValue('')
      setError(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)
    if (val.length > MAX_FEATURED_WORDS_LENGTH) {
      setError(`Tag is too long (max ${MAX_FEATURED_WORDS_LENGTH} chars)`)
    } else {
      setError(null)
    }
  }

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag))
    setError(null)
  }

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          'border-input flex flex-wrap items-center gap-2 rounded-md border bg-transparent p-2',
          value.length >= maxTags && 'opacity-70'
        )}
      >
        {value.map((tag) => (
          <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-2 py-1 text-sm">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-muted-foreground hover:text-foreground"
            >
              <IconX size={16} />
            </button>
          </Badge>
        ))}
        {value.length < maxTags && (
          <Input
            type="text"
            placeholder={value.length > 0 ? '' : 'Add featured words (separate with comma)'}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={MAX_FEATURED_WORDS_LENGTH + 1}
            disabled={value.length >= maxTags}
            className={cn(
              'flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0',
              error && 'text-red-500 placeholder:text-red-400'
            )}
          />
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
