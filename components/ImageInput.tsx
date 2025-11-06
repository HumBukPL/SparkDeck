'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { IconX } from '@tabler/icons-react'

type ImageInputProps = {
  onChange: (value: string) => void
}

// ImageInput for uploading an image file (jpeg, png, webp) max size 10MB
// component allows user to clear the selected image with an "X" button
export function ImageInput({ onChange }: ImageInputProps) {
  const [image, setImage] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (file.size > 10 * 1024 * 1024) {
          alert('File size exceeds 10MB limit')
          return
        }
        const result = reader.result as string
        setImage(result)
        onChange(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setImage(null)
    onChange('')
  }

  return (
    <div>
      {image ? (
        <div className="flex justify-center">
          <div className="relative">
            {/* The img component is totally fine here, because the image is user-uploaded */}
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Selected" className="max-h-52 object-cover" />
            <Button
              className="absolute top-1.5 right-1.5 rounded-full"
              size="icon"
              variant="destructive"
              onClick={clearImage}
            >
              <IconX />
            </Button>
          </div>
        </div>
      ) : (
        <Input type="file" accept="image/*" onChange={handleFileChange} className="cursor-pointer" />
      )}
    </div>
  )
}
