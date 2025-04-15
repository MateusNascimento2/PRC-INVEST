import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import About from '../components/About/About'
import Negociacao from '../components/Negociacao/Negociacao'
import Depoimentos from '../components/Depoimentos/Depoimentos'
import VendaPrecatorio from '../components/VendaPrecatorio/VendaPrecatorio'
import Map from '../components/Map/Map'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Negociacao />
      <Depoimentos />
      <VendaPrecatorio />
      <Map />
      <Footer />
    </>
  )
}
