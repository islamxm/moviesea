import { FC } from "react"
import { Flex } from "../Flex/Flex"
import { VStackProps } from "../types"


export const VStack:FC<VStackProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      dir="column"
      {...props}
      >
      {children}
    </Flex>
  )
}