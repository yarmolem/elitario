import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// terceros
import Slider from 'react-slidy'
import { Image as IMGC } from '@chakra-ui/image'
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Hooks
import useNumSlides from '@/utils/hooks/useNumSlides'

const breakpoints = {
  base: 2,
  ms: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 6
}

const BrandStack = () => {
  const [timer, setTimer] = useState(false)
  const numOfSlides = useNumSlides(breakpoints)
  const [actualSlide, setActualSlide] = useState(0)

  useEffect(() => {
    const timer = play()
    setTimer(timer)
    return () => clearTimeout(timer)
  }, [])

  const play = () => {
    return setInterval(() => {
      setActualSlide((state) => {
        if (state + 1 === 6) return 0
        return state + 1
      })
    }, 5000)
  }

  const reset = () => clearInterval(timer)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <Box mt={-1} w="full" bg="#000">
      <Box maxW="1200px" mx="auto" px={8} py={12}>
        {numOfSlides !== 6 ? (
          <Slider
            slide={actualSlide}
            imageObjectFit="contain"
            numOfSlides={numOfSlides}
            doAfterSlide={updateSlide}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <Box
                  key={i}
                  w="full"
                  pos="relative"
                  h={{ base: 100 }}
                  onTouchStart={reset}
                  onMouseEnter={reset}
                  onTouchEnd={() => setTimer(play())}
                  onMouseLeave={() => setTimer(play())}
                >
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={`/images/brand${i + 1}.png`}
                  />
                </Box>
              ))}
          </Slider>
        ) : (
          <SimpleGrid
            gap={{ xl: 5 }}
            templateColumns="repeat(6, minmax(0, 1fr))"
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <IMGC
                  key={i}
                  objectFit="contain"
                  src={`/images/brand${i + 1}.png`}
                  onTouchStart={reset}
                  onMouseEnter={reset}
                  onTouchEnd={() => setTimer(play())}
                  onMouseLeave={() => setTimer(play())}
                />
              ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  )
}

export default BrandStack
