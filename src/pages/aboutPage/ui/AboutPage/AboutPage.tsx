'use client'
import { Title } from '@/shared/ui/Title/Title'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Container } from '@/shared/ui/Container/Container'
import { motion } from 'framer-motion'


export const AboutPage = () => {
  
  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <Container>
        <VStack align={'start'} gap={25}>
          
          <Title textAlign='left'>About</Title>
          <p>
            Web app created with love
          </p>
          
        </VStack>
      </Container>
    </motion.div>
  )
}