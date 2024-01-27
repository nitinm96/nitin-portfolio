import React from 'react'
import profilePic from '../../assets/profile-pic.jpeg'

function HomeMobile() {
  return (
    <>
      <div>
        <img src={profilePic} width={250} className='rounded-full' />
      </div>
    </>
  )
}

export default HomeMobile