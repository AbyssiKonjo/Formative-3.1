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
        <div className='list-wrapper'>
          <div className='qualifications-container'>
            <h4>Qualifications</h4>
            <ul>
              <li>Lvl 6 Web & UX Diploma (In progress)</li>
              <li>Lvl 5 Web & Graphic Diploma </li>
              <li>Lvl 4 Creative Media Certificate</li>
            </ul>
          </div>
          <div className='skills-container'>
            <h4>My Skills</h4>
            <ul>
              <li>Figma</li>
              <li>Adobe</li>
              <li>Creating Personas</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
