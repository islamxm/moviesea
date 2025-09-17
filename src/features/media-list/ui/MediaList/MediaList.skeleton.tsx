import { CardSkeleton } from "@/shared/ui/Card/Card.skeleton"
import { HStack } from "@/shared/ui/Stack/HStack/HStack"

export const MediaListSkeleton = () => {
  return (
    <HStack fill col={3} wrap gap={20}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </HStack>
  )
}