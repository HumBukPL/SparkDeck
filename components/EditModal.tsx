'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { fallbackImageUrl } from '@/const/fallbackImageUrl'
import { editSparkFormSchema, EditSparkFormSchema } from '@/schema/editSparkFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { TagsInput } from './TagsInput'
import { ImageInput } from './ImageInput'
import { useEffect } from 'react'
import { DialogTitle } from '@radix-ui/react-dialog'
import { updateSparkInLocal } from '@/utils/sparkUtils'

type EditModalProps = {
  title: string
  image?: string
  featuredWords: string[]
  id: string
  refetch: () => void
  open: boolean
  setOpen: (open: boolean) => void
}

export function EditModal({ title, image, featuredWords, id, refetch, open, setOpen }: EditModalProps) {
  const editSparkForm = useForm<EditSparkFormSchema>({
    resolver: zodResolver(editSparkFormSchema),
    defaultValues: {
      title: title,
      featuredWords: featuredWords,
      image: image,
    },
  })

  useEffect(() => {
    editSparkForm.reset({
      title,
      featuredWords,
      image,
    })
  }, [title, featuredWords, image, editSparkForm])

  //TODO: replace with DB logic later
  const onSubmit = (data: EditSparkFormSchema) => {
    console.log('Submitted data:', data)
    updateSparkInLocal({ id, ...data })
    refetch()
    setOpen(false)
    editSparkForm.reset(data)
  }

  const shouldShowImage = Boolean(image)
  const backgroundImage = shouldShowImage ? `url(${image})` : `url(${fallbackImageUrl})`

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="border-2 border-zinc-900 bg-cover bg-center p-0 sm:max-w-[425px]"
        style={{ backgroundImage }}
      >
        <div className="bg-linear-to-t from-black via-black/80 to-black/90 p-5">
          <DialogHeader>
            <DialogTitle className="mb-4 font-semibold text-white">Edit your Spark</DialogTitle>
          </DialogHeader>
          <Form {...editSparkForm}>
            <form onSubmit={editSparkForm.handleSubmit(onSubmit)}>
              <FormField
                control={editSparkForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="My Spark" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editSparkForm.control}
                name="featuredWords"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Featured Words</FormLabel>
                    <FormControl>
                      <TagsInput value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormDescription>Edit your featured words (up to 3)</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editSparkForm.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Picture of your Spark</FormLabel>
                    <FormControl>
                      <ImageInput onChange={field.onChange} value={field.value} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-6">
                <Button type="submit" disabled={!editSparkForm.formState.isDirty}>
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
