import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Terceros
import { Box, Stack, Link, Text } from '@chakra-ui/layout'

// data
import { navigation } from '@/navegation/index'

const Footer = () => {
  const { pathname } = useRouter()

  return (
    <Box mt={-1} as="footer" bg="#111111" pt={10} pb={20}>
      <Box
        mx="auto"
        pos="relative"
        w={{ base: '250px' }}
        h={{ base: '180px' }}
        transform="translateY(-20px)"
      >
        <Image src="/logo/logo-elitario.svg" layout="fill" />
      </Box>

      <Stack
        mx="auto"
        align="center"
        justify={{ md: 'center' }}
        spacing={{ base: 2, md: 8 }}
        maxW={{ base: '90%', md: '900px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        {navigation.map(({ id, name, path, active }, i) => (
          <Box key={id} pointerEvents={active ? 'unset' : 'none'}>
            <NextLink href={path}>
              <Link
                w="full"
                textAlign="center"
                textTransform="uppercase"
                mx={{ base: 'auto', md: 0 }}
                fontSize={{ base: '3xl', md: '2xl' }}
                color={
                  active
                    ? pathname === path
                      ? 'primary.500'
                      : 'white'
                    : 'gray.500'
                }
              >
                {name}
              </Link>
            </NextLink>
          </Box>
        ))}
      </Stack>
      <Text
        mt={{ base: 5, xl: 10 }}
        textAlign="center"
        fontSize="lg"
        color="white"
      >
        <Text as="span" color="primary.500">
          Zemez{'  '}
        </Text>
        &copy;. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
