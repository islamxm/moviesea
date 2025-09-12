'use client'
import { FC, memo, ReactNode, useState } from 'react'
import classes from './classes.module.scss'
import { Title } from '@/shared/ui/Title/Title'
import Link from 'next/link'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { cn, Mods } from '@/shared/lib/cn'
import moviePlaceholderImg from 'public/movie-placeholder.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useStatus } from '@/shared/hooks/useStatus'

type Props = {
  topExtra?: ReactNode
  bottomExtra?: ReactNode
  withDetails?: boolean
  data?: any
}

export const MovieCard: FC<Props> = memo(({
  topExtra,
  bottomExtra,
  withDetails,

  data
}) => {
  const { isSuccess, isError, changeStatus } = useStatus()

  const [hovered, setHovered] = useState(false)

  const mods: Mods = {
    [classes.img_loaded]: isSuccess,
    [classes.img_empty]: isError
  }

  return (

    <Link href={'#'} className={classes.wrapper} onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)}>
      {topExtra && <div className={classes.top_extra}>{topExtra}</div>}
      <VStack gap={10}>
        <div className={classes.image}>
          <img
            className={cn([classes.img_el], mods)}
            src={data?.poster_path ? `${process.env.NEXT_PUBLIC_IMAGES_URL}w500${data.poster_path}` : moviePlaceholderImg.src} alt="some alt"
            width={154}
            height={154}
            onLoad={() => changeStatus('isSuccess', true)}
            onError={() => changeStatus('isError', true)}
            loading='lazy'
          />
          {bottomExtra && <div className={classes.bottom_extra}>{bottomExtra}</div>}
          <AnimatePresence>
            {hovered && <motion.div
              initial={{ transform: 'translateY(100%)' }}
              exit={{ opacity: 0 }}
              animate={{ transform: 'translateY(0)' }}
              className={classes.bottom_extra}>



            </motion.div>}
          </AnimatePresence>

        </div>
        <div className={classes.title}>
          <Title className={classes.title_el} textAlign={'left'} level={6}>
            {data.title}
          </Title>
        </div>
      </VStack>


      {/* absolute pos, collapse when hover */}
      {withDetails && (
        <div className={classes.details}>
          {/* детали надо загружать при наведении, выводится информация об актерах, режиссерах, жанрах и тд, то есть немного подробная инфа по фильму */}
        </div>
      )}
    </Link>
  )
})