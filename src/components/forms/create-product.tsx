'use client'
/* eslint-disable no-use-before-define */

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ImageUp } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Textarea } from '@/components/ui/textarea'
import { transformPriceToNumber } from '@/helpers/format-price'
import { useGetCategories } from '@/hooks/use-get-categories'
import { cn } from '@/lib/utils'
import { productFormSchema, ProductFormValues } from '@/schemas/product.schema'
import { createProduct } from '@/services/products'

export function CreateProduct() {
  const [isValidImage, setIsValidImage] = useState(false)
  const { data: categories, isError, isLoading } = useGetCategories()

  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    watch,
    control,
    reset,
    setError,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: '',
      category: '',
      description: '',
      image: '',
      price: '',
    },
  })

  const handleCreateProductFn = async (data: ProductFormValues) => {
    const priceParsed = transformPriceToNumber(data.price)

    if (priceParsed <= 0) {
      setError('price', {
        message: 'O valor do produto não pode ser 0',
      })
      return
    }

    await createProduct({
      ...data,
      price: priceParsed,
    })
  }

  const { mutateAsync: handleCreateProduct, isPending } = useMutation({
    mutationFn: handleCreateProductFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-by-id', 'products'] })
      reset()
      toast.success('O produto foi cadastrado com sucesso!')
    },
    onError: () => {
      toast.error(
        'Ocorreu um problema ao cadastrar o produto. Tente novamente mais tarde.',
      )
    },
  })

  const imageUrl = watch('image')
  const imageUrlInvalid = getFieldState('image').invalid

  return (
    <>
      <div className="w-full space-y-2.5">
        <Label>Preview</Label>
        <div
          className={cn(
            'flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-muted p-6',
            {
              'bg-white': imageUrl && isValidImage && !imageUrlInvalid,
            },
          )}
        >
          {imageUrl && isValidImage && !imageUrlInvalid ? (
            <img
              src={imageUrl}
              alt="Image to upload"
              className="h-full w-auto object-contain"
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <ImageUp size={40} />
              <span className="text-muted-foreground">Imagem do produto</span>
            </div>
          )}
        </div>
      </div>
      <form
        className="@container/create-form space-y-4"
        onSubmit={handleSubmit((data) => handleCreateProduct(data))}
      >
        <div className="@2xl/create-form:grid-cols-2 grid grid-cols-1 gap-4">
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
            {...register('image', {
              onChange: (e) => {
                const url = e.target.value
                if (url) {
                  const img = new Image()
                  img.onload = () => setIsValidImage(true)
                  img.onerror = () => setIsValidImage(false)
                  img.src = url
                } else {
                  setIsValidImage(false)
                }
              },
            })}
          />
          {errors.image ? (
            <p className="text-xs text-red-500">{errors.image.message}</p>
          ) : null}
        </div>

        <div className="space-y-2.5">
          <Label>Categoria</Label>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent className="w-[--radix-select-trigger-width]">
                  {isLoading && <Skeleton className="h-10 w-full" />}
                  {isError && (
                    <span className="p-2 text-red-500">
                      Houve um erro ao buscar as categorias
                    </span>
                  )}
                  {categories &&
                    categories.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.category ? (
            <p className="text-xs text-red-500">{errors.category.message}</p>
          ) : null}
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={isPending}>
            Cadastrar Produto
          </Button>
        </div>
      </form>
    </>
  )
}
