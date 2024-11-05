import React from 'react';
import './about.css';
import profile from '../../assets/profile.png';
import ug from '../../assets/ug.png';
import hse from '../../assets/hse.png';
import html from '../../assets/html.png';
import python from '../../assets/python.png';
import javascript from '../../assets/javascript.png';
import  react from '../../assets/react.png';
import  internship from '../../assets/internship.png';

function About() {
  return (
    <section className="about-me">
      <h1>About Me</h1>
      <img src={profile} alt="Adithya K M's profile picture" className="profile-img" />
      <h2>ADITHYA K M</h2>
      <p><strong>Age:</strong> 22</p>
      <p><strong>Email:</strong> <a href="mailto:adithyakmanoj@gmail.com">adithyakmanoj@gmail.com</a></p>
      <p>
      I'm a Python full-stack developer with a strong foundation in web development, currently advancing my knowledge through an MSc in Computer Science. My skills span both front-end and back-end technologies, allowing me to build seamless, user-friendly applications.  

On the front end, I work with HTML, CSS, and React to create responsive and interactive interfaces that adapt well to different devices. My focus is on designing intuitive layouts that enhance user engagement and accessibility.  

On the back end, I leverage Python and frameworks like Django to build secure, scalable applications. I work with databases like PostgreSQL and MongoDB to manage and retrieve data effectively, ensuring smooth functionality for end users.  

I am experienced with version control tools like Git and familiar with deploying applications on cloud platforms. I’m committed to writing clean, maintainable code and delivering high-quality, user-centered solutions. Through my work and studies, I strive to build impactful applications that solve real-world problems.
      </p>

      <h1>Education</h1>
      <div className="education">
        <ul className="education-list">
          <li className="education-item">
            <p>BSc Computer Science</p>
            <img src={ug} alt="BSc Computer Science" className='education_img'/>
          </li>
          <li className="education-item">
            <p>Plus Two</p>
            <img src={hse} alt="Plus Two" education_img />
          </li>
          <li className="education-item">
            <p>SSLC</p>
            <img src={hse} alt="SSLC" education_img />
          </li>
        </ul>
      </div>
      

      <h1>Skills</h1>
      <div className="skill">
        <ul className="skill-list">
          <li className="skill_item">
            <img src={html} alt="" className='skill_img'/>
          </li>
          <li className="skill_item">
            <img src={python} alt="SSLC" className='skill_img' />
          </li>
          <li className="skill_item">
            <img src={javascript} alt="SSLC" className='skill_img' />
          </li>
          <li className="skill_item">
            <img src={react} alt="SSLC" className='skill_img' />
          </li>

        </ul>
      </div>
      <h1>Internship Experience</h1>
      <img src={internship} alt="SSLC" className='internship_img' />
      <p>I completed an internship at Camerinfolks Pvt Ltd, where I gained hands-on experience in full-stack development. During my time there, I worked closely with a team to develop and enhance web applications, focusing on responsive front-end interfaces with HTML, CSS, and React. I also implemented back-end functionality using Python and Django, which allowed me to deepen my knowledge of application architecture and database management. This experience at Camerinfolks Pvt Ltd gave me valuable insight into agile development practices, strengthened my technical skills, and helped me grow as a collaborative team member.</p>
      
    </section>
  );
}

export default About;
