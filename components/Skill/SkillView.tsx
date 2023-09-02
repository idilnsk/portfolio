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
        <div className="mt-8 flex justify-around flex-wrap">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredCardIndex(idx)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <CardFlip
                isFlipped={hoveredCardIndex === idx}
                flipDirection="horizontal"
              >
                {/* Front side of the card */}
                <div className={`cardContainer ${styles.cardContainer}`}>
                  <div className={`text-4xl ${styles.text4xl}`}>
                    {skill.icon}
                  </div>
                </div>
  
                {/* Back side of the card */}
                <div className={`cardContainer ${styles.cardContainer}`}>
                  <div className={`font-medium ${styles.fontMedium}`}>
                    {skill.name}
                  </div>
                </div>
              </CardFlip>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default SkillView;
