import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
          
        </Routes>

      </Router>
           
    </>
  )
}

export default App
