import React from 'react'
import './home.css'
import profile from '../../assets/profile.png'

function Home() {
    return (
        <div className='home'>
          <img src={profile}alt=" "className='profile'></img>
       
          <h1>I'm Adithya,Msc computer science student</h1>
          <p>Iam Adithya Msc computer science student in kerala university...</p>
          <div className='home-action'>
          <div className='home-connect'>connect  me</div>
          <div className='resume'>my resume</div>        
        </div>
        </div>
      );
}

export default Home
