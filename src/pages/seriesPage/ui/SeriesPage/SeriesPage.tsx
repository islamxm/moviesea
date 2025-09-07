'use client'

import { SelectSeriesList } from '@/features/select-series-list'
import classes from './classes.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { SeriesList } from '@/entites/series/model'
import { Container } from '@/shared/ui/Container/Container'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Title } from '@/shared/ui/Title/Title'
import { AiringTodaySeries } from '../AiringTodaySeries/AiringTodaySeries'
import { PopularSeries } from '../PopularSeries/PopularSeries'
import { TopRatedSeries } from '../TopRatedSeries/TopRatedSeries'
import { OnTheAirSeries } from '../OnTheAirSeries/OnTheAirSeries'

export const SeriesPage = () => {
  const [seriesListType, setSeriesListType] = useState<SeriesList>('airing-today')

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.wrapper}
    >
      <Container>
        <VStack align={'start'} gap={25}>

          <Title textAlign='left'>Series</Title>

          <SelectSeriesList
            onSelectList={setSeriesListType}
            value={seriesListType}
          />

          {seriesListType === 'airing-today' && <AiringTodaySeries />}

          {seriesListType === 'popular' && <PopularSeries />}

          {seriesListType === 'top-rated' && <TopRatedSeries />}

          {seriesListType === 'on-the-air' && <OnTheAirSeries />}

        </VStack>
      </Container>
    </motion.div>
  )
}