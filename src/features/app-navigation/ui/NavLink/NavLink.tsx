import { FC, PropsWithChildren, useEffect } from 'react'
import classes from './classes.module.scss'
import Link, {LinkProps} from 'next/link'
import { Styleable } from '@/shared/types/ui'
import { cn, Mods } from '@/shared/lib/cn'
import { usePathname } from 'next/navigation'

type NavLinkProps = 
LinkProps 
& Styleable
& PropsWithChildren
& {
  label?: string,
  isActive?: boolean
}

export const NavLink:FC<NavLinkProps> = ({
  label,
  children,
  className,
  style,
  isActive,
  ...props
}) => {
  const mods: Mods = {
    [classes.active]: isActive 
  }

  return (
    <Link 
      {...props} 
      className={cn([classes.wrapper, className], mods)}
      style={style}
      >
      {children || label}
    </Link>
  )
}
