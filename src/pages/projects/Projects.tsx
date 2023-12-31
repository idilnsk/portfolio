import { FC, useState,useEffect } from "react";
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; 


const Projects: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverEffect, setHoverEffect] = useState(false);
  const images = [
    {
      src: "/movies-app.png",
      alt: "Image of Movies App",
      title: "My Movies App",
      detail:
        "A dynamic movie platform driven by the MovieDB API, facilitating users to explore a vast selection of films. Beyond securely authenticating, users have the capability to curate personal watchlists and actively engage by adding or deleting comments on individual movies. The platform further enhances user interaction through a quiz feature, where a set of 5 questions, randomly picked from a pool of 20, are presented for engagement. Leveraging RESTful APIs, all user data—including login credentials, watchlists, comments, and quiz interactions—are seamlessly integrated and stored in a MongoDB database.",
      summary: [
        {
          title: "Technologies",
          content:
            "NextJS, RESTful API, Router, MongoDB, MovieDB API, Daisy UI, TailwindCSS, NextAuth.",
        },
        {
          title: "Backend and Data Management",
          content: "RESTful APIs, MongoDB.",
        },
        {
          title: "Platform Description",
          content: "A dynamic movie platform driven by the MovieDB API.",
        },
        {
          title: "Features",
          list: [
            "User authentication for secure access.",
            "Ability to add and remove movies from personal watchlists.",
            "Commenting on movies with the option to delete comments.",
            "Engaging quiz feature for user interaction.",
          ],
        },
      ],
      button1: {
        text: "View Source",
        link: "https://github.com/idilnsk/movies-app",
      },
      button2: {
        text: "Visit Site",
        link: "https://movies-app-tawny-nine.vercel.app/",
      },
    },
    {
      src: "/Turio-App.png",
      alt: "Image of Turio App",
      title: "Turio App",
      detail:
        "The Tourio App serves as a traveler's digital diary, letting users curate and manage a list of sights to visit. Utilizing RESTful APIs for CRUD operations (Create, Read, Update, Delete) and backed by MongoDB, the app ensures seamless addition, modification, and deletion of travel entries.",
      summary: [
        {
          title: "Technologies",
          content:
            "NextJS, RESTful API, MongoDB",
        },
        {
          title: "Backend and Data Management",
          content: "RESTful APIs, MongoDB.",
        },
        {
          title: "Platform Description",
          content: "A traveler's digital diary designed to curate and manage must-visit sights and experiences.",
        },
        {
          title: "Features",
          list: [
            "Enables users to create and maintain a list of sights and attractions.",
            "Offers CRUD operations for managing travel entries.",
            "Ensures seamless addition, modification, and removal of travel plans.",
          ],
        },
      ],
      button1: {
        text: "View Source",
        link: "https://github.com/idilnsk/turio-app",
      },
      button2: {
        text: "Visit Site",
        link: "https://turio-app-idilnsk.vercel.app/",
      },
    },
    {
      src: "/RaM-App.png",
      alt: "Image of RaM App",
      title: "Rick and Morty App",
      detail:
        "This is a mobile app dedicated to  Rick and Morty. Using a REST API, it displays character cards with details about each character. The app includes a search bar to easily find specific characters and a pagination system to navigate through them.",
      summary: [
        {
          title: "Technologies",
          content:
            "JavaScript, RESTful APIs",
        },
        {
          title: "Backend and Data Management",
          content: " REST API",
        },
        {
          title: "Platform Description",
          content: "A dedicated mobile app showcasing Rick and Morty characters.",
        },
        {
          title: "Features",
          list: [
            "Displays detailed character cards sourced from a REST API.",
            "Provides an intuitive search bar for users to find specific characters.",
            "Incorporates a pagination system, allowing easy navigation through various characters.",
          ],
        },
      ],
      button1: {
        text: "View Source",
        link: "https://github.com/idilnsk/Rick-and-Morty-app",
      },
      button2: {
        text: "Visit Site",
        link: "https://rick-and-morty-app-cyan.vercel.app/",
      },
    },
    {
      src: "/Weather-App.png",
      alt: "Image of Weather App",
      title: "Weather App",
      detail:
        "This React app fetches current weather data from an API and, based on the conditions, presents a list of activities suitable for good or bad weather. Users can add or delete activity suggestions, showcasing basic CRUD (Create, Read, Update, Delete) operations. The primary aim of the app is to filter and display activities depending on the prevailing weather conditions.",
      summary: [
        {
          title: "Technologies",
          content:
            "React, Weather Data API, CRUD functionalities",
        },
        {
          title: "Backend and Data Management",
          content: "weather data API,CRUD operations ",
        },
        {
          title: "Platform Description",
          content: "A user-interactive weather and activity tracking app.",
        },
        {
          title: "Features",
          list: [
            "Retrieves real-time weather conditions via an API.",
            "Users can manually add activities suitable for good or bad weather.",
            "Users can categorize activities based on weather conditions by selecting good weather avtivity tickbox.",
            "Provides CRUD (Create, Read, Update, Delete) functionalities for user-suggested activities.",
          ],
        },
      ],
      button1: {
        text: "View Source",
        link: "https://github.com/idilnsk/Weather-Activities-App",
      },
      button2: {
        text: "Visit Site",
        link: "https://weather-3ya5r4fo9-idilnsk.vercel.app/",
      },
    },
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    let loadedImagesCount = 0;
    const totalImages = images.length;

    images.forEach(image => {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
          loadedImagesCount++;
          if (loadedImagesCount === totalImages) {
              setImagesLoaded(true);
          }
      };
  });
}, []);
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="px-10 pt-10 relative">
      <h2 className="mb-4 text-2xl text-center font-mukta text-white">My Projects</h2>
      <div>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              //opacity: index === activeIndex ? "1" : "0",
              height: index === activeIndex ? "auto" : "0",
              pointerEvents: index === activeIndex ? "auto" : "none",
            }}
            className="flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="relative inline-block p-4">
              <Image 
                src={image.src}
                alt={image.alt}
                width={700}
                height={520}
                objectFit="cover"
                layout="fixed"  
                className="rounded-xl transition-opacity duration-500 shadow-gradient"
                style={{
                  opacity: index === activeIndex ? "1" : "0",
                  visibility: index === activeIndex ? "visible" : "hidden",
                  transition:
                    "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                }}
  
              />
              <div className="button-container flex justify-center mt-4">
              <button
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
                onClick={prevSlide}
                className={`mt-4 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-full  pr-4 ${
                  hoverEffect ? "opacity-75" : "opacity-100"
              }`}
              >
                <IoIosArrowBack  size="1.5em" color="white" /> 
              </button>
              <button
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
                onClick={nextSlide}
                className={`mt-4 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-full pl-4 ${
                  hoverEffect ? "opacity-75" : "opacity-100"
              }`}
              >
                 <IoIosArrowForward size="1.5em" color="white" /> 
              </button>
              </div>
            </div>
                <div className="flex-container px-4 md:px-20">
            <p className="font-mukta mb-2 text-center text-white text-sm sm:text-base pt-4 px-4 md:px-20">
              {image.title}
            </p>

            <p className="font-mukta mb-2 text-center text-white leading-tight sm:leading-normal pt-4 px-4 md:px-20 text-sm">
              {image.detail}
            <div className="justify-center flex space-x-4 z-10 pt-10">
              {image.button1 && (
                <a
                  href={image.button1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mukta gradient-button text-base"
                >
                  {image.button1.text}
                </a>
              )}
              {image.button2 && (
                <a
                  href={image.button2.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mukta gradient-button text-base"
                >
                  {image.button2.text}
                </a>
              )}
            </div>
            </p>
            </div>
            <div className="font-mukta text-white mb-2 text-left leading-tight sm:leading-normal pt-4 px-4 md:px-20 text-sm">
              {image.summary.map((section, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="font-bold mb-2">{section.title}</h4>
                  {section.content && <p>{section.content}</p>}
                  {section.list && (
                    <ul className="list-disc list-inside">
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
