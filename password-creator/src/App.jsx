import { useState, useCallback } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import Weathercard from './components/weathercard'

function App() {


  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col justify-center items-center">
      <Weathercard ></Weathercard>

      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
