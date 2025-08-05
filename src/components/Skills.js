import React from "react";

function Skills() {
  const skills = [
  "HTML5", 
  "CSS3", 
  "JavaScript", 
  "React.js", 
  "Bootstrap", 
  "Git & GitHub", 
  "MySQL"
];

  
  return (
    <section id="skills" className="section">
      <h2>Skills</h2><br></br>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
