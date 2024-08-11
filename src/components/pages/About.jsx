import React from 'react'

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='intro'>
          <div className='text-wrapper'>
            <h1>Hi I'm Nia</h1>
            <h2>Developer of this website</h2>
          </div>
          <p>This website was created for my Formative 3.1, using what we have learned so far in REACT and the skills we've picked up from the start of the course. The aim of this formative is to create a single-page application using a News API that allows users to view and browse the retrieved item from an external API.</p>
          <br />
          <h3>They should be able to:</h3>
          <ul>
            <li>View Article List</li>
            <li>View About Page (on the developer & this project)</li>
          </ul>
          <br/>
          <p>I'm currently studying Web UX at Yoobee College. Not sure which aspect I'll go into just quite yet, if it will frontend or backend development. We will just have to wait and see. I enjoy coding and the satisfaction I get from nailing a pice of code that was giving me trouble. Currently learning react and have enjoyed what I've learnt so far.</p>
        </div>
      </div>
    </>
  )
}

export default About
