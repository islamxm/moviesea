import { VStack } from "@/shared/ui/Stack/VStack/VStack"
import { FC } from "react"
import { Button } from "@/shared/ui/Button/Button"
import { Flex } from "@/shared/ui/Stack/Flex/Flex"

type Props = {
  onRetry?: DefFunc
}

export const MediaListError: FC<Props> = ({
  onRetry
}) => {
  return (
    <Flex justify={'center'} className={classes.wrapper}>
      <Button onClick={onRetry} variant={'simple'}>
        <VStack align="center" gap={10}>
          <span className={classes.icon}></span>
          <span className={classes.label}>
            An error occured
          </span>
        </VStack>
      </Button>
    </Flex>
  )
}