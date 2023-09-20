import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div>
        <Router>
           <Navbar/>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<h1>Page is not found</h1>}/>
           </Routes>
        </Router>
    </div>
  )
}

export default App
