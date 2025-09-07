import { Badge } from "@/shared/ui/Badge/Badge"
import classes from './classes.module.scss'


export const AdultBadge = () => {
  return (
    <Badge className={classes.wrapper}>
      18+
    </Badge>
  )
}