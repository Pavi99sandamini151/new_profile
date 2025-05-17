import React from "react";
import resumeData from "../assets/data/experience.json";

export const Skills: React.FC<any> = () => {
  const { skills } = resumeData;

    return (
        <div className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      <section className="skill">
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    )
};
