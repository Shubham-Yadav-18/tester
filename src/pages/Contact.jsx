import React, { useContext } from 'react'
import { AppContext } from '../App'

const Contact = () => {
    const {username}=useContext(AppContext)
  return (
    <div>
      <h1>This is contact page and user is {username}</h1>
    </div>
  )
}

export default Contact
