import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage1 from './stores/pages/LandingPage1'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import ACPage from './stores/pages/ACPage'
import MobilesSingle from './Singles/MobilesSingle'
import UserCart from './Singles/UserCart'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage1 />} />
        <Route path='/abc' element={<Kitchen />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/watches' element={<WatchPage />} />
        <Route path='/menf' element={<MenPage />} />
        <Route path='/womenf' element={<WomenPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/AC' element={<ACPage />} />
        <Route path='/mobiles/:id' element={<MobilesSingle/>}/>
        <Route path='/cart' element = {<UserCart />} />
      </Routes>
    </div>
  )
}

export default App
