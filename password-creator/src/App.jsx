import { useState, useCallback } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import Weathercard from './components/weathercard'


function App() {

  const[location, setLocation]=useState("London")
  console.log(location);
  return (
    <div>
      <NavBar setLocationProps={setLocation} ></NavBar>

      <div className="flex flex-col justify-center items-center">
      <Weathercard locationProps={location} ></Weathercard>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
