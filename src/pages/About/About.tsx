import { FC } from "react";

interface AboutProps {
  aboutInfo: {
    title: string;
    paragraphs: string[];
  };
}

const About: FC<AboutProps> = ({ aboutInfo }) => {
    return (
        <div className="font-mukta text-center mx-auto p-8 max-w-xl">
        <h2 className="mb-4 text-2xl">{aboutInfo.title}</h2>
        {aboutInfo.paragraphs.map((para, index) => (
          <p key={index} className="mb-4 pb-4 leading-relaxed">{para}</p>
        ))}
        </div>
    );
}

const aboutData = {
    title: "About me",
    paragraphs: [
      "I am a former sales person and full-stack developer based in Berlin.",
      "I started coding at the beginning of 2023 and completed full-stack bootcamp in August 2023. During this time I worked on diffferent projects like Weather app or Journal app.  Not only I enjoyed creating new apps, but also debugging the errors and brining up different solutions",
      "With this intense journey started with the new year, I know that I want to build up my career in this field. My projects focus on both client and server side. My long-term goal is betting better on the server side and bringing new app ideas alive. "
    ]
  };
  export const AboutPage: FC = () => {
    return <About aboutInfo={aboutData} />;
  }
  
  export default AboutPage;