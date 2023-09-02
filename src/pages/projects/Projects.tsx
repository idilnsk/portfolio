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
      width: 700,
      height: 520,
      detail: "A dynamic movie platform driven by the MovieDB API, facilitating users to explore a vast selection of films. Beyond securely authenticating, users have the capability to curate personal watchlists and actively engage by adding or deleting comments on individual movies. The platform further enhances user interaction through a quiz feature, where a set of 5 questions, randomly picked from a pool of 20, are presented for engagement. Leveraging RESTful APIs, all user data—including login credentials, watchlists, comments, and quiz interactions—are seamlessly integrated and stored in a MongoDB database.",
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
      width: 700,
      height: 520,
      button1: {
        text: "View Source",
        link: "https://github.com/user/movies-app",
      },
      button2: {
        text: "Visit Site",
        link: "https://movies-app.example.com",
      },
    },
    {
      src: "/RaM-App.png",
      alt: "Image of RaM App",
      title: "Rick and Morty App",
      width: 700,
      height: 520,
      button1: {
        text: "View Source",
        link: "https://github.com/user/movies-app",
      },
      button2: {
        text: "Visit Site",
        link: "https://movies-app.example.com",
      },
    },
    {
      src: "/Weather-App.png",
      alt: "Image of Weather App",
      title: "Weather App",
      width: 700,
      height: 520,
      button1: {
        text: "View Source",
        link: "https://github.com/user/movies-app",
      },
      button2: {
        text: "Visit Site",
        link: "https://movies-app.example.com",
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
    <div className="px-10 pt-10">
      <h2 className="mb-4 text-2xl text-center">My Projects</h2>

      <div className="relative flex flex-col justify-center items-center h-[650px]">
        {images.map((image, index) => (
          <div
            key={index}
            style={{ 
              opacity: index === activeIndex ? '1' : '0', 
              pointerEvents: index === activeIndex ? 'auto' : 'none' 
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex flex-col justify-center items-center transition-opacity duration-500"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="rounded-xl"
              />
            </div>
            <p className="font-mukta mb-2 text-center pt-4 px-20 leading-loose">{image.title}</p>

            <p className="font-mukta mb-2 text-center pt-4 px-20 leading-loose">{image.detail}</p>

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

        <button
          onMouseEnter={() => setHoverEffect(true)}
          onMouseLeave={() => setHoverEffect(false)}
          onClick={prevSlide}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ${
            hoverEffect ? "opacity-75" : "opacity-100"
          }`}
        >
          Prev
        </button>
        <button
          onMouseEnter={() => setHoverEffect(true)}
          onMouseLeave={() => setHoverEffect(false)}
          onClick={nextSlide}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 ${
            hoverEffect ? "opacity-75" : "opacity-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
