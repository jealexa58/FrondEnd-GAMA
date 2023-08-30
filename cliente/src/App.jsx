import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EqupoPage from './pages/EqupoPage'
import PortafolioPage from './pages/PortafolioPage'
import ContactanosPage from './pages/ContactanosPage'


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route id='home' path='/' element={<HomePage/>}/>
        <Route id='equipo' path='/equipo' element={<EqupoPage/>} />
        <Route id='portafolio' path='/portafolio' element={<PortafolioPage/>} />
        <Route id='contactanos' path='/contactanos' element={<ContactanosPage/>} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
