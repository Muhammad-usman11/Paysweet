import React from 'react'
import { Route, Routes } from "react-router-dom"



import Userlogin from './components/Userlogin'
import UserSignUp from './components/UserSignUp'
import Invoices from './components/Invoices'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    
  
    <Navbar/>

    <Routes>
      <Route path="/"  element={<Userlogin />} />
      <Route path="/login"  element={<Userlogin />} />
      <Route path="/signup"  element={<UserSignUp />} />
      <Route path="/invoices"  element={<Invoices />} />
        
    </Routes>


    <Footer/>

    </>
  )
}

export default App