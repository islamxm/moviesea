'use client'
import { LoginUser } from '@/features/user/auth/login'
import classes from './classes.module.scss'
import { useSelector } from '@/shared/hooks/useStore'
import { checkType } from '@/shared/lib/checkType'

export const LoginPageComponent = () => {
  const { headerHeight } = useSelector(s => s.appHeaderReducer)

  if (checkType(headerHeight, 'number')) {
    return (
      <div style={{ minHeight: `calc(100vh - ${headerHeight}px)` }} className={classes.wrapper}>
        <div className={classes.form}>
          <LoginUser />
        </div>
      </div>
    )
  }

  return null
}