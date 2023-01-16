import React from 'react'
import FirstHeader from '../Component/FirstHeader'
import Footer from '../Component/Footer'
import Navigation from '../Component/Navigation'
import Story from '../Component/Story'

const Home = () => {
  return (
    <>
        <Navigation/>
        <FirstHeader/>
        <Story/>
        <Footer/>
    </>
  )
}

export default Home