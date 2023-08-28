import { FC } from "react";

const About: FC= () =>{
    return (
        <div className=" font-mukta text-center mx-auto p-8 max-w-xl">
        <h2 className="mb-4 text-2xl">About me</h2>
        <p className="mb-4 pb-4 leading-relaxed">
         I am a former sales person and full-stack developer based in Berlin. 
        </p>
        <p className="mb-4 pb-4 leading-loose">
        I started coding at the beggining of 2023 and completed full-stack bootcamp in August 2023. During this time I worked on 
        diffferent projects like Weather app or Journal app.  Not only I enjoyed creating new apps, but also debugging the errors 
        and brining up different solutions. 
        </p>
        <p className="mb-4 pb-4 leading-loose">
        With this intense journey started with the new year, I know that I want to build up my career in this field. My projects focus on both client and server side. My long-term goal is betting better on the server side and bringing new app ideas alive. 
        </p>
        </div>
    )
}
export default About