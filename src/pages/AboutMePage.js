import React from 'react'
import avatar from '../images/avatar.jpg'

const AboutMePage = () => {
  return (
    <>
      <div className='about-me-wrapper'>
        <div className='main-text'>
          <img src={avatar} className='avatar' alt='none'/>
          <div className='text-headers'>
            <h1>Hello! My name is Aleksei</h1>
          <h3>I'm middle BI Analyst</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMePage