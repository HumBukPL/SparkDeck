'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './ui/form'
import { addSparkFormSchema } from '@/shema/addSparkFormSchema'

export default function AddSparkForm() {
  const addSparkForm = useForm<z.infer<typeof addSparkFormSchema>>({
    resolver: zodResolver(addSparkFormSchema),
    defaultValues: {
      title: '',
      featuredWords: [''],
      image: '',
    },
  })

  const onSubmit = (data: z.infer<typeof addSparkFormSchema>) => {
    console.log(data)
  }

  return (
    <Form {...addSparkForm}>
      <form onSubmit={addSparkForm.handleSubmit(onSubmit)} className="space-y-4"></form>
    </Form>
  )
}
