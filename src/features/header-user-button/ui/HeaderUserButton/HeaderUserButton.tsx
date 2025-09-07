import { Button } from '@/shared/ui/Button/Button'
import classes from './classes.module.scss'
import { FC } from 'react'

type HeaderUserButtonProps = {
  isAuth: boolean
}

export const HeaderUserButton: FC<HeaderUserButtonProps> = ({
  isAuth
}) => {
  if (!isAuth) {
    <Button style={{padding: 5}} variant={'simple'}>Log in</Button>
  }
  return (
    <Button style={{padding: 5}} variant={'simple'}>{`{UserName}`}</Button>
  )
}