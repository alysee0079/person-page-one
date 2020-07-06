import React from 'react'
import Header from '../header/Header'
import Container from '../container/Container'
import Footer from '../footer/Footer'
import { BrowserRouter } from 'react-router-dom'

export default function Layout () {
  return (
    <BrowserRouter>
      <Header />
      <Container />
      <Footer />
    </BrowserRouter>
  )
}
