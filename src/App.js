import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Profile from './pages/Profile'

export const AppContext=createContext();
const App = () => {
  const[username,setUsername]=useState("Shubham");
  return (
    <div>
      <AppContext.Provider value={{username,setUsername}}>
        <Router>
           <Navbar/>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<h1>Page is not found</h1>}/>
           </Routes>
        </Router>
        </AppContext.Provider>
    </div>
  )
}

export default App
