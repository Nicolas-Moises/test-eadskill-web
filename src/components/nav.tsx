import { LINKS } from '@/constants/links'

import { NavItem } from './nav-item'

export function Nav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4">
        {LINKS.map(({ href, icon, label }, index) => (
          <li key={index}>
            <NavItem href={href} icon={icon} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
