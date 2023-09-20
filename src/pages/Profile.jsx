import React, { useContext } from 'react'
import { AppContext } from '../App';
import UpadateProfile from '../component/UpadateProfile';
const Profile = () => {
  const{username}=useContext(AppContext);
  return (
    <div>
        <h1>This is Profile of {username }</h1>
        <UpadateProfile/>
        
    </div>
  )
}

export default Profile
