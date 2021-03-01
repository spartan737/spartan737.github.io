import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

import resume from "../resume-updated.pdf"

const Promotion = () => {
  return (
    <div className="section" id="resume">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>Resume</h1>
          </Fade>
          <p>Click <a href={resume} target="_blank" rel="noopener noreferrer">here</a> to view my resume.</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
