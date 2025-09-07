'use client'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import classes from './classes.module.scss'
import { AppLogo } from '@/shared/ui/AppLogo/AppLogo'
import { cn, Mods } from '@/shared/lib/cn'
import { useScrolled } from '@/shared/hooks/useScrolled'
import { useEffect, useMemo, useRef } from 'react'
import { useDispatch } from '@/shared/hooks/useStore'
import { appHeaderActions } from '../../model/appHeaderSlice'
import { AppNavigation } from '@/features/app-navigation'
import { HeaderUserButton } from '@/features/header-user-button'
import { SelectLocation } from '@/features/select-location'

export const AppHeader = () => {
  const dispatch = useDispatch()
  const { isScrolled } = useScrolled()
  const ref = useRef<HTMLDivElement>(null)

  const mods: Mods = useMemo(() => ({
    [classes.scrolled]: isScrolled
  }), [isScrolled])

  useEffect(() => {
    if (ref.current) {
      dispatch(appHeaderActions.updateHeaderHeight(ref.current.scrollHeight))
    }
  }, [ref])

  return (
    <header ref={ref} className={cn([classes.wrapper], mods)}>
      <HStack align={'center'} fill justify={'between'}>
        <AppLogo isLink size={60} />
        <HStack gap={20} align={'center'}>
          <SelectLocation/>
          <AppNavigation />
          <HeaderUserButton isAuth/>
        </HStack>
      </HStack>
    </header>
  )
}