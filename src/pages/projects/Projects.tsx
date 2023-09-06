import { FC, useState } from "react";
import Image from "next/image";

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
          title: "Platform Description:",
          content: "A dynamic movie platform driven by the MovieDB API.",
        },
        {
          title: "Features:",
          list: [
            "User authentication for secure access.",
            "Ability to add and remove movies from personal watchlists.",
            "Commenting on movies with the option to delete comments.",
            "Engaging quiz feature for user interaction.",
          ],
        },
        {
          title: "Backend and Data Management:",
          content: "RESTful APIs, MongoDB.",
        },
        {
          title: "Technologies:",
          content:
            "NextJS, API, Router, MongoDB, MovieDB API, Daisy UI, TailwindCSS, NextAuth.",
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
          title: "Platform Description:",
          content: "A dynamic movie platform driven by the MovieDB API.",
        },
        {
          title: "Features:",
          list: [
            "User authentication for secure access.",
            "Ability to add and remove movies from personal watchlists.",
            "Commenting on movies with the option to delete comments.",
            "Engaging quiz feature for user interaction.",
          ],
        },
        {
          title: "Backend and Data Management:",
          content: "RESTful APIs, MongoDB.",
        },
        {
          title: "Technologies:",
          content:
            "NextJS, API, Router, MongoDB, MovieDB API, Daisy UI, TailwindCSS, NextAuth.",
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
          title: "Platform Description:",
          content: "A dynamic movie platform driven by the MovieDB API.",
        },
        {
          title: "Features:",
          list: [
            "User authentication for secure access.",
            "Ability to add and remove movies from personal watchlists.",
            "Commenting on movies with the option to delete comments.",
            "Engaging quiz feature for user interaction.",
          ],
        },
        {
          title: "Backend and Data Management:",
          content: "RESTful APIs, MongoDB.",
        },
        {
          title: "Technologies:",
          content:
            "NextJS, API, Router, MongoDB, MovieDB API, Daisy UI, TailwindCSS, NextAuth.",
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
          title: "Platform Description:",
          content: "A dynamic movie platform driven by the MovieDB API.",
        },
        {
          title: "Features:",
          list: [
            "User authentication for secure access.",
            "Ability to add and remove movies from personal watchlists.",
            "Commenting on movies with the option to delete comments.",
            "Engaging quiz feature for user interaction.",
          ],
        },
        {
          title: "Backend and Data Management:",
          content: "RESTful APIs, MongoDB.",
        },
        {
          title: "Technologies:",
          content:
            "NextJS, API, Router, MongoDB, MovieDB API, Daisy UI, TailwindCSS, NextAuth.",
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

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="px-10 pt-4">
      <h2 className="mb-4 text-2xl text-center">My Projects</h2>
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
            <div className="relative inline-block">
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={520}
                objectFit="cover"
                className="rounded-xl border border-gray-300 transition-opacity duration-500"
                style={{
                  opacity: index === activeIndex ? "1" : "0",
                  visibility: index === activeIndex ? "visible" : "hidden",
                  transition:
                    "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                }}
              />
              <button
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
                onClick={prevSlide}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full pr-4 ${
                  hoverEffect ? "opacity-75" : "opacity-100"
                }`}
              >
                Prev
              </button>
              <button
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
                onClick={nextSlide}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full pl-4 ${
                  hoverEffect ? "opacity-75" : "opacity-100"
                }`}
              >
                Next
              </button>
            </div>

            <p className="font-mukta mb-2 text-center pt-4 px-20 leading-loose">
              {image.title}
            </p>

            <p className="font-mukta mb-2 text-center pt-4 px-20 leading-loose text-sm">
              {image.detail}
            </p>
            <div className="font-mukta mb-2 text-center pt-4 px-20 leading-loose text-sm">
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

            <div className="flex space-x-4 z-10">
              {image.button1 && (
                <a
                  href={image.button1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {image.button1.text}
                </a>
              )}
              {image.button2 && (
                <a
                  href={image.button2.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {image.button2.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
