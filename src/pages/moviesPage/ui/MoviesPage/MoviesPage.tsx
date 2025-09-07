'use client'
import classes from './classes.module.scss'
import { Title } from '@/shared/ui/Title/Title'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Container } from '@/shared/ui/Container/Container'
import { MovieLists } from '@/entites/movie'
import { useEffect, useState } from 'react'
import { SelectMovieList } from '@/features/select-movie-list'
import { motion } from 'framer-motion'

import { NowPlayingMovies } from '../NowPlayingMovies/NowPlayingMovies'
import { PopularMovies } from '../PopularMovies/PopularMovies'
import { UpcomingMovies } from '../UpcomingMovies/UpcomingMovies'
import { TopRatedMovies } from '../TopRatedMovies/TopRatedMovies'
import { useLocation } from '@/_app/providers/LocationProvider/hooks/useLocation'

export const MoviesPage = () => {
  const [movieListType, setMovieListType] = useState<MovieLists>('now-playing')
  const loc = useLocation()

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.wrapper}>
      <Container>
        <VStack align={'start'} gap={25}>
          
          <Title textAlign='left'>Movies</Title>
          
          <SelectMovieList
            onSelectList={setMovieListType}
            value={movieListType}
          />
          
          {movieListType === 'now-playing' && <NowPlayingMovies />}

          {movieListType === 'popular' && <PopularMovies />}

          {movieListType === 'top-rated' && <TopRatedMovies />}
          
          {movieListType === 'upcoming' && <UpcomingMovies />}
        
        </VStack>
      </Container>
    </motion.div>
  )
}