import { Flex } from '@/shared/ui/Stack/Flex/Flex'
import { Button } from '@/shared/ui/Button/Button'
import { forwardRef } from 'react'
import {Spinner} from '@heroui/spinner'
import classes from './classes.module.scss'

export const MediaListSpinner = forwardRef<HTMLButtonElement>((_, ref) => {
  return (
    <Flex  justify={'center'} fill>
      <Button ref={ref} variant={'simple'}>
        <Spinner className={classes.spinner} color={'secondary'}/>
      </Button>
    </Flex>
  )
})