import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2><br></br>
      <p>You can download my resume below:</p><br></br>
      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;