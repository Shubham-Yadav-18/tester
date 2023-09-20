import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const UpadateProfile = () => {
    const{setUsername}=useContext(AppContext);
    const[newUsername,setNewUsername]=useState("");
  return (
    <div>
        <input onChange={(e)=>{
            setNewUsername(e.target.value);
        }}/>
        <button onClick={()=>{
            setUsername(newUsername);
        }}>Update Username</button>
    </div>
  )
}

export default UpadateProfile 
