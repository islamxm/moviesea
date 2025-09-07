import { Badge } from "@/shared/ui/Badge/Badge";
import classes from './classes.module.scss'
import { FC } from "react";

type Props = {
  value: number
}

export const VoteAverageBadge:FC<Props> = ({
  value
}) => {
  return (
    <Badge className={classes.wrapper}>
      {value} 
    </Badge>
  )
}