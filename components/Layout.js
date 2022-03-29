import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

function Layout({children}) {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>
  )
}

export default Layout