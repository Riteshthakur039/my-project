import React from 'react'
import Hero from './Hero'
import Trend from './Trend'
import Offer from './Offer'
import Badges from './badges'
// import Blog from './Blog'
import Portfolio from './Portfolio'
import Accordion from './Accordion'
import Swiperlogo from './Swiperlogo'



const Home = () => {
  return (
    <>
      <Hero />
      <Swiperlogo />
      <Trend />
      <Offer />
      <Badges />
      <Portfolio />
      {/* <Blog /> */}
      <Accordion />
      
    </>
  )
}

export default Home
