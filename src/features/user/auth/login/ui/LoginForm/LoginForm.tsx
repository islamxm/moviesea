import classes from './classes.module.scss'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Button } from '@/shared/ui/Button/Button'
import {Input} from '@/shared/ui/Input/Input'
import { Title } from '@/shared/ui/Title/Title'

export const LoginForm = () => {
  return (
    <VStack gap={40} className={classes.wrapper}>
      <Title textAlign={'left'}>Login</Title>
      <VStack gap={16}>
        <Input placeholder='Email' type={'email'}/>
        <Input placeholder='Password' type={'password'}/>
      </VStack>
      <Button>Login</Button>
    </VStack>
  )
}