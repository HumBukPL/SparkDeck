'use client'

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
import { addSparkFormSchema } from '@/schema/addSparkFormSchema'
import type { AddSparkFormSchema } from '@/schema/addSparkFormSchema'
import { Input } from './ui/input'
import { TagsInput } from './TagsInput'
import { ImageInput } from './ImageInput'
import { Button } from './ui/button'
import { saveSparkToLocal } from '@/utils/sparkUtils'
import { useRouter } from 'next/navigation'

export function AddSparkForm() {
  const history = useRouter()
  const addSparkForm = useForm<AddSparkFormSchema>({
    resolver: zodResolver(addSparkFormSchema),
    defaultValues: {
      title: '',
      featuredWords: [],
      image: '',
    },
  })

  //TODO: replace with DB logic later
  const onSubmit = (data: AddSparkFormSchema) => {
    console.log('Submitted data:', data)
    saveSparkToLocal(data)
    history.push('/')
    addSparkForm.reset()
  }

  const handleClear = () => {
    addSparkForm.reset()
  }

  return (
    <div className="mx-auto w-full max-w-md md:max-w-lg">
      <Form {...addSparkForm}>
        <form onSubmit={addSparkForm.handleSubmit(onSubmit)}>
          <FormField
            control={addSparkForm.control}
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
            control={addSparkForm.control}
            name="featuredWords"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Featured Words</FormLabel>
                <FormControl>
                  <TagsInput value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormDescription>
                  Provide featured words for your Spark. Try to describe it with three words.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={addSparkForm.control}
            name="image"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Picture of your Spark</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormDescription>Provide an image for your Spark (optional).</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="my-8 flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={handleClear}
              disabled={addSparkForm.formState.isSubmitting || !addSparkForm.formState.isDirty}
            >
              Clear
            </Button>
            <Button disabled={!addSparkForm.formState.isValid} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
