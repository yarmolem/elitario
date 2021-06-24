import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { useInView } from 'react-intersection-observer'
import { Box, Text, HStack, Link, Flex } from '@chakra-ui/layout'

// Componentes
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import HeroSlider from '@/components/HeroSlider'
import BrandStack from '@/components/BrandStack'
import Publicidad from '@/components/Publicidad'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import ProductosRecientes from '@/components/ProductosRecientes'
import ProductosDestacados from '@/components/ProductosDestacados'
import PublicacionesRecientes from '@/components/PublicacionesRecientes'

// Iconos
import { PhoneIcon, FBIconPrimary, INSIconPrimary } from '@/assets/icons'

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <div>
      <Head>
        <title>Elitario</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Box p={1} w="full" zIndex="2" bg="#0D0D0D">
        <Box mx="auto" maxW="90%" display="flex" align="center">
          <Icon
            fill="#fff"
            as={PhoneIcon}
            transform={{ base: 'translateY(5px)' }}
          />
          <Text color="white" fontSize={{ base: 'sm' }}>
            <Link href="tel:+3(800)2345-6789">+3(800)2345-6789</Link> 7 Days a
            week from 9:00 am to 7:00 pm
          </Text>
        </Box>
        <HStack
          my={2}
          mx="auto"
          maxW="90%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white" fontSize={{ base: 'sm' }}>
            Siguenos
          </Text>
          <IconButton
            size="sm"
            variant="unstyled"
            icon={<Icon as={FBIconPrimary} fontSize={20} />}
          />
          <IconButton
            size="sm"
            variant="unstyled"
            icon={<Icon as={INSIconPrimary} fontSize={20} />}
          />
        </HStack>
      </Box>
      <Flex
        w="full"
        align="center"
        pos="relative"
        justify="center"
        h={{ base: '400px' }}
        bgImage="url(/patterns/HeroPattern.svg)"
      >
        <Box
          mx="auto"
          pos="relative"
          w={{ base: '250px' }}
          h={{ base: '200px' }}
          transform="translateY(-20px)"
        >
          <Image src="/logo/index.svg" layout="fill" />
        </Box>
      </Flex>
      <MobileNav {...{ onOpen }} />
      <HeroSlider />
      <BrandStack />
      <ProductosRecientes />
      <Publicidad />
      <ProductosDestacados />
      <Publicidad />
      <Blog />
      <PublicacionesRecientes />
      <PorQueElegirnos />
      <Footer />

      <Sidebar {...{ isOpen, onClose }} />
    </div>
  )
}

export default Home
