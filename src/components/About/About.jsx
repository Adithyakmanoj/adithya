import React from 'react'
import './about.css'
import profile from '../../assets/profile.png'

function About() {
    return (
      <section className="about-me">
      <h1>About Me</h1>
      <img src={profile} alt="Your Name" className="profile-img" />
      <h2>ADITHYA K M</h2>
      <p>Age: 22</p>
      <p>Email: adithyakmanoj@gmail.com</p>

      <p>
      I'm Adithya KM, an MSc Computer Science student at Kerala University with a strong interest
        in software development and web technologies. Currently, I'm working as a Python Fullstack
        intern, where I get hands-on experience with both frontend and backend development.
        I enjoy building efficient and scalable applications that offer seamless user experiences.</p>

      <h3>Education</h3>
      <p>Msc Computer Science, kerala University</p>

      <h3>Skills</h3>
      <p>JavaScript, React, HTML, CSS, python</p>
    </section>
      );
}

export default About
