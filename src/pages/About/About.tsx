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
        <p key={index} className="mb-4 pb-4 leading-relaxed">
          {para}
        </p>
      ))}
    </div>
  );
};

const aboutData = {
  title: "About me",
  paragraphs: [
    "Hi, I am Idil!",
    "I am a former sales person and full-stack developer based in Berlin.",
    "I started coding at the beginning of 2023 and completed an intensive 3 months full-stack bootcamp in August 2023. During this time I worked on diffferent projects like a weather app or journal app.  Not only I enjoyed creating new apps, but also debugging the errors and brining up different solutions",
    "Since the beginning of this year, particularly after commencing and successfully completing the bootcamp, I've become certain of my passion to forge a career in this field. My projects focus on both client side interfaces and server side integrations.  Ultimately, I aim to deepen my expertise in server-side logic and bring innovative app ideas to life ",
  ],
};
const AboutPage: FC = () => {
  return <About aboutInfo={aboutData} />;
};

export default AboutPage;
