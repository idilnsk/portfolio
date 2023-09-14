import React, { FC, useState, useRef } from "react";
import { FaReact, FaJs, FaNode, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiCss3,
  SiNpm,
} from "react-icons/si";
import CardFlip from "react-card-flip";
import styles from "../../src/styles/effects.module.css";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "npm", icon: <SiNpm /> },
];

const SkillView: FC = () => {
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  
    return (
      <div className={styles.container}>
          <svg style={{ height: '0' }}>
        <linearGradient id="icon-gradient" x1="100%" y1="100%">
          <stop stopColor="#89CFF0" offset="0%" />
          <stop stopColor="#D8BFD8" offset="100%" />
        </linearGradient>
      </svg>
      <div className={styles.container} style={{paddingLeft: '5%', paddingRight: '5%'}}>
        <div className="py-8 flex justify-around flex-wrap">
          {skills.map((skill, idx) => (
            <div 
              key={skill.name}
              onMouseEnter={() => setHoveredCardIndex(idx)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <CardFlip
                isFlipped={hoveredCardIndex === idx}
                flipDirection="horizontal"
              >
                {/* Front side of the card */}
                <div className={`cardContainer ${styles.cardContainer}`}>
                  <div className={`text-4xl ${styles.text4xl} font-mukta`}>
                  {React.cloneElement(skill.icon, { style: { fill: 'url(#icon-gradient)' } })}
                  </div>
                </div>
                
  
                {/* Back side of the card */}
                <div className={`cardContainer ${styles.cardContainer}`}>
                  <div className={`font-medium ${styles.fontMedium} gradient-text font-bold`}>
                    {skill.name}
                  </div>
                </div>
              </CardFlip>
            </div>
          ))}
                      </div>

        </div>
      </div>
    );
  };

export default SkillView;
