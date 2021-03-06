import React, { useEffect, useState } from 'react'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { Flex } from '@chakra-ui/layout'
import { ButtonGroup } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'

// Componentes
import DesktopNav from './DesktopNav'
import { UserMenu, ShoppingMenu } from './Menus'
import IconButton from '@/components/Button/IconButton'

// Iconos
import { BarsIcon, SearchIcon } from '@/assets/icons'

const MobileNav = ({ modal, sidebar }) => {
  const [scrollY, setScrollY] = useState(0)
  const [isMD] = useMediaQuery('(max-width: 52em)')

  useEffect(() => {
    const onChange = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onChange)
    return () => window.removeEventListener('scroll', onChange)
  }, [])

  const hasScroll = scrollY > 300

  return (
    <Flex
      mb={8}
      top={0}
      mx="auto"
      mt="-120px"
      pos="sticky"
      py={{ base: 5 }}
      zIndex="9"
      justify="center"
      transition="all 0.3s ease"
      w={{ base: 'full', lg: 'full' }}
      bg={hasScroll ? 'surfaceCards.900' : 'transparent'}
    >
      <Flex
        w="full"
        justify="space-between"
        maxW={{ base: '90%', xl: '1200px' }}
      >
        <IconButton
          onClick={sidebar.onOpen}
          display={{ base: 'flex', lg: 'none' }}
          icon={<Icon as={BarsIcon} fill="#fff" />}
        />
        <DesktopNav {...{ hasScroll }} />
        <ButtonGroup isAttached={isMD} spacing={{ base: 0, md: 5 }}>
          <IconButton
            onClick={modal.onOpen}
            icon={<Icon as={SearchIcon} fill="#fff" />}
          />

          <ShoppingMenu />
          <UserMenu />
        </ButtonGroup>
      </Flex>
    </Flex>
  )
}

export default MobileNav
