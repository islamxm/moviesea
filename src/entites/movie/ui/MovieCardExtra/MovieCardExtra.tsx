import { HStack } from "@/shared/ui/Stack/HStack/HStack"
import { FC, PropsWithChildren } from "react"

type Props = PropsWithChildren<{}>
export const MovieCardExtra:FC<Props> = ({
  children
}) => {

  return (
    <HStack gap={10} wrap>
      {children}
    </HStack>
  )
}