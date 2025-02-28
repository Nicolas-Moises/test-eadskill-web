import { z } from 'zod'

export const productFormSchema = z.object({
  category: z.string().min(3, 'A categoria é obrigatória'),
  description: z
    .string({
      required_error: 'A descrição do produto é obrigatória.',
    })
    .min(2, 'A descrição do produto é obrigatória.'),
  image: z
    .string({
      required_error: 'Insira uma URL válida',
    })
    .url({
      message: 'Insira uma URL válida',
    }),
  price: z
    .string({
      required_error: 'O valor do produto é obrigatório.',
    })
    .min(2, 'O valor do produto é obrigatório.'),
  title: z
    .string({
      required_error: 'O nome do produto é obrigatório.',
    })
    .min(2, 'O nome do produto é obrigatório.')
    .max(30, 'O tílulo deve ter no máximo 30 caracteres.')
    .transform((text) => text.trim()),
})

export type ProductFormValues = z.infer<typeof productFormSchema>
