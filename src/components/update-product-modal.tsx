import { Pencil } from 'lucide-react'
import { useState } from 'react'

import { Product } from '@/types/products'

import { UpdateProduct } from './forms/update-product'
import { Button } from './ui/button'
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'

interface UpdateProductModalProps {
  product: Product
}

export function UpdateProductModal({ product }: UpdateProductModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Pencil size={16} />
          Editar
        </Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>Editar Produto</DrawerTitle>
          <DrawerDescription className="mt-1 text-sm">
            Edite as informações do produto, mas lembre-se: a categoria não pode
            ser alterada.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <UpdateProduct setOpen={setOpen} product={product} />
        </DrawerBody>
        <DrawerFooter className="mt-6">
          <DrawerClose asChild>
            <Button
              className="mt-2 w-full sm:mt-0 sm:w-fit"
              variant="secondary"
            >
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
