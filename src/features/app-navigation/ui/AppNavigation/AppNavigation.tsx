import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { NavLink } from '../NavLink/NavLink'
import classes from './classes.module.scss'
import { usePathname } from 'next/navigation'

const routes = [
  { href: '/movies', label: 'Movies' },
  { href: '/series', label: 'TV Series' },
  { href: '/about', label: 'About' },
]

export const AppNavigation = () => {
  const pathname = usePathname() || '/'

  return (
    <HStack gap={20} className={classes.wrapper}>
      {
        routes.map(navItem => (
          <NavLink
            key={navItem.href}
            isActive={pathname.startsWith(navItem.href)}
            href={navItem.href}>
            {navItem.label}
          </NavLink>
        ))
      }
    </HStack>
  )
}