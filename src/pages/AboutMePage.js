import React from 'react'
import avatar from '../images/avatar.jpg'
import '../styles/mainPage.css'

const AboutMePage = () => {
  return (
    <>
      <div className='about-me-wrapper'>
        <div className='main-text'>
          <div className = 'avatar-block'>
            <img src={avatar} className='avatar' alt='none'/>
            <h4>General information</h4>
            <p>Date of Birth: June 22, 1999</p>
            <p>Residence: Bishkek, Kyrgyzstan</p>
            <p>Citizenship: Kyrgyzstan</p>
            <h4>Education</h4>
            <p>Degree: bachelor (diploma with honor)</p>
            <p>Faculty: mathematical methods in economics</p>
            <p>Period of study: 2016 - 2020</p>
          </div>
          <div className='text-headers'>
            <h1>Hello!</h1>
            <h3>My name is Aleksei</h3>
            <h4>Middle BI Analyst</h4>
            <p>I possess the necessary skills and expertise in the field of processing, analysis and visualization of big data</p>
            <p>Passionate about report automation, dashboard design, processing and manipulating of high volume data</p>
            <p>3 years of commercial experiance</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMePage