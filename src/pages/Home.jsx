import React, { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
    const {username}=useContext(AppContext)
  return (
    <div>
       <h1>This is home page and user is {username}</h1>
    </div>
  )
}

export default Home
