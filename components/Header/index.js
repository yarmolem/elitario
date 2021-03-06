import React from 'react'
import Image from 'next/image'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { IconButton } from '@chakra-ui/button'
import { Box, Text, Link, Flex, HStack } from '@chakra-ui/layout'

// Iconos
import { PhoneIcon, FBIconPrimary, INSIconPrimary } from '@/assets/icons'

const Header = () => {
  return (
    <>
      <Flex
        p={1}
        zIndex="2"
        bg="#0D0D0D"
        align="center"
        justify="center"
        w={{ base: 'full' }}
      >
        <Flex
          align="center"
          w={{ base: 'full', lg: 1200 }}
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          <Box
            flex={1}
            maxW="90%"
            display="flex"
            align="center"
            pt={1}
            mx={{ base: 'auto', lg: 0 }}
          >
            <Icon
              mr={2}
              fill="#fff"
              as={PhoneIcon}
              transform={{ base: 'translateY(5px)' }}
            />
            <Text color="white" fontSize={{ base: 'sm', sm: 'md' }}>
              <Link href="tel:+3(800)2345-6789">+3(800)2345-6789</Link> 7 Days a
              week from 9:00 am to 7:00 pm
            </Text>
          </Box>
          <HStack
            my={2}
            maxW="90%"
            spacing={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx={{ base: 'auto', lg: 0 }}
          >
            <Text color="white" fontSize={{ base: 'sm', sm: 'md' }}>
              Siguenos
            </Text>
            <IconButton
              size="sm"
              variant="unstyled"
              icon={<Icon as={FBIconPrimary} w={5} h={5} />}
            />
            <IconButton
              size="sm"
              variant="unstyled"
              icon={<Icon as={INSIconPrimary} w={5} h={5} />}
            />
          </HStack>
        </Flex>
      </Flex>
      <Flex
        w="full"
        align="center"
        pos="relative"
        justify="center"
        bgSize="contain"
        // bgRepeat="repeat"
        bgPosition="center"
        h={{ base: '400px' }}
        bgImage="url(/images/heroPattern.webp)"
      >
        <Box
          mx="auto"
          pos="relative"
          w={{ base: '250px', sm: '350px' }}
          h={{ base: '200px', sm: '300px' }}
          transform="translateY(-20px)"
        >
          <Image src="/logo/logo-elitario.svg" layout="fill" />
        </Box>
      </Flex>
    </>
  )
}

export default Header
