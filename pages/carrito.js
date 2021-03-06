import React, { useEffect, useState } from 'react'
import d from 'next/dynamic'
import Head from 'next/head'

import { useDisclosure } from '@chakra-ui/hooks'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CarritoWrap from '@/sections/Carrito'
import MobileNav from '@/components/MobileNav'

// Dinamic imports
const Sidebar = d(() => import('@/components/Sidebar'), { ssr: false })
const SearchModal = d(() => import('@/components/SearchModal'), { ssr: false })

const Carrito = () => {
  const modal = useDisclosure()
  const sidebar = useDisclosure()

  const [loadChunk, setLoadChunk] = useState(false)

  useEffect(() => {
    if (modal.isOpen || sidebar.isOpen) setLoadChunk(true)
  }, [modal.isOpen, sidebar.isOpen])

  return (
    <div>
      <Head>
        <title>Elitario | Carrito</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <MobileNav {...{ modal, sidebar }} />

      <CarritoWrap />

      <Footer />
      {/* LOAD LATER */}
      {loadChunk ? <Sidebar {...sidebar} /> : null}
      {loadChunk ? <SearchModal {...modal} /> : null}
    </div>
  )
}

export default Carrito
