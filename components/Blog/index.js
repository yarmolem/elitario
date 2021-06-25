import React from 'react'
import Image from 'next/image'

// Terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import BlogCard from '@/components/BlogCard'

const Blog = () => {
  return (
    <Box
      py={{ base: 16 }}
      bgSize="contain"
      bgPosition="center"
      bgImage="url(/images/heroPattern2.webp)"
    >
      <Heading>Tendencias en el blog</Heading>

      <SimpleGrid mt={16} gap={10} maxW={{ base: '80%' }} mx="auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </Box>
  )
}

export default Blog
