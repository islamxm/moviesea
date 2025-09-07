'use client'
import { FC, PropsWithChildren, useEffect } from 'react'
import classes from './classes.module.scss'
import { AppHeader } from '@/widgets/app-header'
import { useInitialData } from '@/shared/hooks/useInitialData'
import { rtkApi } from '@/shared/api/rtkApi'
import { Button } from '@/shared/ui/Button/Button'
import { useLocation } from '@/entites/location'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  useInitialData()
  useLocation()

  const resetApi = () => rtkApi.util.resetApiState()

  return (
    <div className={classes.wrapper}>
      <AppHeader />
      <div className={classes.content}>{children}</div>

      {/* --------------------temp-------------------- */}
      {/* <Button onClick={resetApi} className={classes.temp} buttonSize={'extra_sm'}>reset api</Button> */}
    </div>
  )
}