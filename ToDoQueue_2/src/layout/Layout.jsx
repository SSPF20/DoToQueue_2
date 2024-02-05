//React libraries
import {Outlet, useNavigation} from 'react-router-dom'

//Components
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Header from '../components/Header'

import React from 'react'

const Layout = () => {
  return (
    <div className='Layout'>
        <Header />
        <Menu />
        <main className='Main'>
            {
                navigation.state === "loading" &&(
                    <div className='Loading'>Loading...</div>
                ) 
            }
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout