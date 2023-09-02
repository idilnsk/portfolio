import { FC } from "react";


interface SkillProps {
    skillName: string;
    icon: JSX.Element;  
  }
  
  const Skill: FC<SkillProps> = ({ skillName, icon }) => {
    return (
      <div className="skill-item flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 cursor-pointer">
        <div className="skill-icon mb-2 text-gray-700">
          {icon}
        </div>
        <span className="text-sm font-medium">{skillName}</span>
      </div>
    );
  };

  export default Skill;