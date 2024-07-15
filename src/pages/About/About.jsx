import React from "react";
import "./About.css";
import Resume from "../../assets/Aarya_s_Resume.pdf";

function About() {
  return (
    <div className="about">
      <div className="download">
        <div>
          <p>Download my resume</p>

          <a href={Resume} download="Resume" target="_blank">
            <button>Download</button>
            
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
