import { CircleAlert, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

export function ProductsError() {
  return (
    <div className="relative col-span-full flex h-80 w-full flex-col items-center justify-center rounded-xl bg-muted p-12">
      <CircleAlert size={40} className="text-red-500/70" />
      <h3 className="text-xl font-semibold">Erro ao buscar produtos</h3>
      <p className="text-sm text-muted-foreground">
        Recarregue a página ou entre em contato com{' '}
        <Link href="#" className="text-primary hover:underline">
          nosso suporte
        </Link>
      </p>
      <Button className="mt-6">
        <RefreshCcw size={5} />
        Recarregar
      </Button>
    </div>
  )
}
