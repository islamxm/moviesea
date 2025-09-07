import { MovieCardSkeleton } from "../MovieCard/MovieCard.skeleton"
import { HStack } from "@/shared/ui/Stack/HStack/HStack"

export const MovieListSkeleton = () => {
  return (
    <HStack fill col={3} wrap gap={20}>
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
    </HStack>
  )
}