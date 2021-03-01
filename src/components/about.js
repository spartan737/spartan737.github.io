import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              I graduated from Nanyang Junior Collge in 2019 with 88.75 rankpoint. My CCA was Interact Club and as the committee member of a student-initiated project - Silver Friends, I was responsible for coordinating regular visits to an elderly care centre.
              <br></br>
              <br></br>
              I'm currently in NS now. My unit in NS is Singapore Computer Vision Unit (SCVU), which specialises in training models and data analysis for Intelligence purposes.
              <br></br>
              <br></br>
              I started learning programming about 1.5 years ago and I enjoyed it! I started with Python first, then I moved on to HTML, CSS & JavaScript and currently, I'm learning C. During my free time, I enjoy building and maintaining side projects to learn new skills and technologies.
              <br></br>
              <br></br>
              I hope to take up a computing related degree, perhaps Business Analytics or Computer Science, in university.  
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" className="about_img"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
