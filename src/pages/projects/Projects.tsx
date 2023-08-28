import {FC} from "react";
import Image from "next/image"


const Projects: FC = ()=>{
    return (
        <div className="px-10">
            <h2 className="mb-4 text-2xl">
                My Projects
            </h2>
            <div className="flex flex-col space-y-5"> 
            <div className="flex justify-between">
            <div className="w-1/2 px-5 flex justify-center items-center">
                <div className="max-w-s hover:scale-105 transform transition-transform duration-300 hover:brightness-110 rounded-lg overflow-hidden shadow-md hover:shadow-xl">
                <Image 
                src="/movies-app.png"
                layout="responsive"
                alt="Image of Movies App"
                width={150}
                height={110}/>
            </div>
            </div>
            <div className="w-1/2 px-5 flex justify-center items-center">
            <div className="max-w-s hover:scale-105 transform transition-transform duration-300 hover:brightness-110 rounded-lg overflow-hidden shadow-md hover:shadow-xl">
            <Image 
                src="/Turio-App.png"
                layout="responsive"
                alt="Image of Movies App"
                width={150}
                height={110}/>
            </div>
            </div>
            </div>
            <div className="flex justify-between">
            <div className="w-1/2 px-5 flex justify-center items-center">
            <div className="max-w-s hover:scale-105 transform transition-transform duration-300 hover:brightness-110 rounded-lg overflow-hidden shadow-md hover:shadow-xl">
            <Image 
                src="/RaM-App.png"
                layout="responsive"
                alt="Image of Movies App"
                width={100}
                height={110}/>
            </div>
            </div>
            <div className="w-1/2 px-5 flex justify-center items-center">
            <div className="max-w-s hover:scale-105 transform transition-transform duration-300 hover:brightness-110 rounded-lg overflow-hidden shadow-md hover:shadow-xl">
            <Image 
                src="/Weather-App.png"
                layout="responsive"
                alt="Image of Movies App"
                width={150}
                height={110}/>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Projects;