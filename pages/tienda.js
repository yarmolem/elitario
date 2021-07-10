import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { useDisclosure } from '@chakra-ui/media-query'

import Tienda from '@/sections/Tienda'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import SearchModal from '@/components/SearchModal'

const tienda = () => {
  const modal = useDisclosure()
  const sidebar = useDisclosure()

  const [loadChunk, setLoadChunk] = useState(false)

  useEffect(() => {
    if (modal.isOpen || sidebar.isOpen) setLoadChunk(true)
  }, [modal.isOpen, sidebar.isOpen])

  return (
    <>
      <Head>
        <title>Elitario | Tienda</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* FIRTS LOAD */}
      <Header />
      <MobileNav {...{ modal, sidebar }} />
      <Tienda />
      <Footer />
      {/* LOAD LATER */}
      {loadChunk ? <Sidebar {...sidebar} /> : null}
      {loadChunk ? <SearchModal {...modal} /> : null}
    </>
  )
}

export default tienda
