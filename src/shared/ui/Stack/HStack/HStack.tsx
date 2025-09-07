import { FC } from "react"
import { Flex } from "../Flex/Flex"
import { HStackProps } from "../types"

export const HStack: FC<HStackProps> = ({
  children,
  ...props
}) => {
  

  return (
      <Flex
        dir="row"
        {...props}
      >
        {children}
      </Flex>
  )
}