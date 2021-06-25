import React from 'react'

// Terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import BlogCard from '@/components/BlogCard'

const PublicacionesRecientes = () => {
  return (
    <Box
      py={{ base: 16 }}
      bgSize="contain"
      bgPosition="center"
      bgImage="url(/images/heroPattern2.webp)"
    >
      <Heading>Publicaciones Recientes</Heading>

      <SimpleGrid mt={16} gap={10} maxW={{ base: '80%' }} mx="auto">
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </Box>
  )
}

export default PublicacionesRecientes
