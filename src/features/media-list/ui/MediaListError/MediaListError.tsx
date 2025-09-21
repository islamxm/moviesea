import { VStack } from "@/shared/ui/Stack/VStack/VStack"
import { FC } from "react"
import { Button } from "@/shared/ui/Button/Button"
import { Flex } from "@/shared/ui/Stack/Flex/Flex"
import { AiOutlineReload } from 'react-icons/ai'
import classes from './classes.module.scss'

type Props = {
  onRetry?: DefFunc
}

export const MediaListError: FC<Props> = ({
  onRetry
}) => {
  return (
    <Flex fill justify={'center'}>
      <Button onClick={onRetry} variant={'simple'}>
        <AiOutlineReload size={33} />
      </Button>
    </Flex>
  )
}