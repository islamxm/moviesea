'use client'
import { FC, memo, ReactNode, useState, useRef, useEffect } from 'react'
import classes from './classes.module.scss'
import { Title } from '@/shared/ui/Title/Title'
import Link from 'next/link'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { cn, Mods } from '@/shared/lib/cn'
import moviePlaceholderImg from 'public/movie-placeholder.png'
import { AnimatePresence, motion } from 'framer-motion'
import { useStatus } from '@/shared/hooks/useStatus'
import Image from 'next/image'
import { MediaType } from '@/shared/api/types'
import { MediaBase } from '@/shared/api/types'
import { Url } from 'next/dist/shared/lib/router/router'

type Props = {
  data: MediaBase
  link: Url,
  topExtra?: ReactNode
  bottomExtra?: ReactNode
  withDetails?: boolean
}

export const Card: FC<Props> = memo(({
  data,
  link,
  topExtra,
  bottomExtra,
  withDetails,
}) => {
  const { isSuccess, isError, changeStatus } = useStatus()
  const imgRef = useRef<HTMLImageElement>(null)
  const [hovered, setHovered] = useState(false)

  const mods: Mods = {
    [classes.img_loaded]: isSuccess,
    [classes.img_empty]: isError
  }

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      changeStatus('isSuccess', true)
    }
  }, [imgRef])

  return (
    <Link href={link} className={classes.wrapper} onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)}>
        {topExtra && <div className={classes.top_extra}>{topExtra}</div>}
        <VStack gap={10}>
          <div className={classes.image}>
            <Image
              className={cn([classes.img_el], mods)}
              src={data?.image ? `${process.env.NEXT_PUBLIC_IMAGES_URL}w500${data.image}` : moviePlaceholderImg.src} alt={data.title}
              width={154}
              height={154}
              onLoad={() => changeStatus('isSuccess', true)}
              onError={() => changeStatus('isError', true)}
              loading='lazy'
              ref={imgRef}
            />
            {bottomExtra && <div className={classes.bottom_extra}>{bottomExtra}</div>}
            {/* <AnimatePresence>
              {hovered && <motion.div
                initial={{ transform: 'translateY(100%)' }}
                exit={{ opacity: 0 }}
                animate={{ transform: 'translateY(0)' }}
                className={classes.bottom_extra}>
              </motion.div>}
            </AnimatePresence> */}
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