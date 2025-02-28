/* eslint-disable no-use-before-define */
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  transformNumberToPrice,
  transformPriceToNumber,
} from '@/helpers/format-price'
import { productFormSchema, ProductFormValues } from '@/schemas/product.schema'
import { updateProduct } from '@/services/products'
import { Product } from '@/types/products'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

interface UpdateProductProps {
  product: Product
  setOpen?: (open: boolean) => void
}

export function UpdateProduct({ product, setOpen }: UpdateProductProps) {
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    values: {
      title: product?.title ?? '',
      category: product?.category ?? '',
      description: product?.description ?? '',
      image: product?.image ?? '',
      price: product?.price ? transformNumberToPrice(product.price) : '',
    },
  })

  const handleUpdateProductFn = async (data: ProductFormValues) => {
    const priceParsed = transformPriceToNumber(data.price)

    if (priceParsed <= 0) {
      setError('price', {
        message: 'O valor do produto não pode ser 0',
      })
      return
    }

    await updateProduct(product.id, {
      ...data,
      price: priceParsed,
    })
  }

  const { mutateAsync: handleUpdateProduct, isPending } = useMutation({
    mutationFn: handleUpdateProductFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-by-id'] })
      toast.success('O produto foi atualizado com sucesso!')
      setOpen?.(false)
    },
    onError: () => {
      toast.error(
        'Ocorreu um problema ao atualizar o produto. Tente novamente mais tarde.',
      )
    },
  })

  return (
    <form
      className="@container/update-form space-y-4"
      onSubmit={handleSubmit((data) => handleUpdateProduct(data))}
    >
      <div className="@2xl/update-form:grid-cols-2 grid gap-4">
        <div className="space-y-2.5">
          <Label htmlFor="title">Nome do Produto</Label>
          <Input
            placeholder="Digite o nome do produto"
            id="title"
            {...register('title')}
          />
          {errors.title ? (
            <p className="text-xs text-red-500">{errors.title.message}</p>
          ) : null}
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="price">Preço</Label>
          <div className="relative">
            <Input
              placeholder="Digite o valor do produto"
              id="price"
              type="text"
              className="peer pe-12 ps-10"
              {...register('price', {
                onChange: (e) => {
                  let value = e.target.value.replace(/\D/g, '')
                  value = (Number(value) / 100).toFixed(2)
                  const formattedValue = value
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                  e.target.value = formattedValue
                  return formattedValue
                },
              })}
            />
            <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
              R$
            </span>
            <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
              BRL
            </span>
          </div>
          {errors.price ? (
            <p className="text-xs text-red-500">{errors.price.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="description">Descrição do Produto</Label>
        <Textarea
          id="description"
          placeholder="Insira uma breve descrição sobre o produto"
          {...register('description')}
        />
        {errors.description ? (
          <p className="text-xs text-red-500">{errors.description.message}</p>
        ) : null}
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="image_url">URL da Imagem</Label>
        <Input
          placeholder="Digite uma URL"
          id="image_url"
          {...register('image')}
        />
        {errors.image ? (
          <p className="text-xs text-red-500">{errors.image.message}</p>
        ) : null}
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="category">Categoria</Label>
        <Input
          id="category"
          readOnly
          disabled
          className="capitalize"
          placeholder="Escolha uma Categoria"
          {...register('category')}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        Atualizar Produto
      </Button>
    </form>
  )
}
