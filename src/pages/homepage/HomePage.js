import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import Categories from '../../components/categories/Categories'
import OurStory from '../../components/ourstory/OurStory'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <Categories/>
    <OurStory/>
    <Footer/>
    </>
  )
}

export default HomePage