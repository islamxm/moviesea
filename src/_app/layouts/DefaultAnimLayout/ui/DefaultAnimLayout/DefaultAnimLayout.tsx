'use client'
import { FC, PropsWithChildren } from "react";
import {motion} from 'framer-motion'

type Props = PropsWithChildren & {
  className?: string
}

export const DefaultAnimLayout:FC<Props> = ({children, className}) => {

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}>
      {children}
    </motion.div>
  )
}