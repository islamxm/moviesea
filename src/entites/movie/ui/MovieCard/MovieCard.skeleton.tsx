import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import { HStack } from "@/shared/ui/Stack/HStack/HStack"
import { VStack } from "@/shared/ui/Stack/VStack/VStack"
import classes from './classes.module.scss'

export const MovieCardSkeleton = () => {
  return (
    <Skeleton 
      width={'100%'} 
      className={classes.wrapper}
      >
      <VStack gap={10}>
        <Skeleton className={classes.image}>
          <Skeleton className={classes.image_el}/>
        </Skeleton>
        <Skeleton className={classes.title}>
          
        </Skeleton>
      </VStack>
    </Skeleton>
  )
}