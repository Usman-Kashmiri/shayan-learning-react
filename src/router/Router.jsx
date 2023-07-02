import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DefaultLayout from '../pages/DefaultLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route/>
        </Route>
          <Route path='/gallery' element={<Contact/>} />
    </Routes>
  )
}

export default Router