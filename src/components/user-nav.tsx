import { ChevronDownIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

export function UserNav() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage
              src="https://github.com/Nicolas-Moises.png"
              alt="Profile image"
            />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col gap-1">
          <div className="text-lg font-medium">Olá, Nicolas</div>
          <span className="text-sm text-muted-foreground">
            nicolas@gmail.com
          </span>
        </div>
      </PopoverContent>
    </Popover>
  )
}
