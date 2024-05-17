import { Separator } from '@radix-ui/react-separator'
import { IconHome, IconPizza, IconToolsKitchen2 } from '@tabler/icons-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <IconPizza className="h-6 w-6" stroke={1} />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <IconHome stroke={1.5} className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink to="/orders">
            <IconToolsKitchen2 stroke={1.5} className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
