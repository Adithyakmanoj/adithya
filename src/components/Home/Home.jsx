import React from 'react'
import './home.css'
import profile from '../../assets/profile.png'

function Home() {
    return (
        <div className='home'>
          <img src={profile}alt=" "className='profile'></img>
       
          <h1>I'm Adithya,Python developer</h1>
          <p>I'm a Python full-stack developer skilled in creating responsive web applications with a focus on seamless front-end experiences and robust back-end solutions using frameworks like Django and Flask. I prioritize clean, scalable code and user-centered designs to deliver impactful, high-performance applications.</p>
          <div className='home-action'>
          <div className='home-connect'>connect  me</div>
          <div className='resume'>my resume</div>        
        </div>
        </div>
      );
}

export default Home
