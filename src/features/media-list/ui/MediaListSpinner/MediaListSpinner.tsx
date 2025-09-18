import { Flex } from '@/shared/ui/Stack/Flex/Flex'
import { Button } from '@/shared/ui/Button/Button'
import { forwardRef } from 'react'

export const MediaListSpinner = forwardRef<HTMLButtonElement>((_, ref) => {
  return (
    <Flex  justify={'center'}>
      <Button ref={ref} variant={'simple'}>Loading...</Button>
    </Flex>
  )
})