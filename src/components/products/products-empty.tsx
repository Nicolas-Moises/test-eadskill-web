import { PackageOpen } from 'lucide-react'

export function ProductsEmpty() {
  return (
    <div className="relative col-span-full flex h-80 w-full flex-col items-center justify-center rounded-xl bg-muted p-12">
      <PackageOpen size={40} className="text-muted-foreground/70" />
      <h3 className="text-xl font-semibold">Nenhum produto encontrado</h3>
      <p className="text-sm text-muted-foreground">
        Não encontramos nenhum produto para estes filtros
      </p>
    </div>
  )
}
