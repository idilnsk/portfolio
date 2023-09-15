import { FC, useState } from "react";

const Navigation: FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      window.location.hash = sectionId;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 h-auto md:h-[80px] flex items-center justify-start pl-1 md:pl-6 transition-all duration-300">
      <nav>
        <ul className="font-mukta flex flex-col md:flex-row gap-4 md:gap-8 p-6 items-center">
          {["about", "projects", "contact"].map((section) => (
            <li key={section} className="md:mx-4 relative">
              <a
                href={`#${section}`}
                className={` gradient-button border-2 border-white  text-white px-3 py-1 rounded-md cursor-pointer transition-transform transform scale-100 hover:scale-105 pb-1 ${
                  activeLink === section
                    ? "text-opacity-100"
                    : "text-opacity-50"
                } hover:box-shadow-[0px,0px,5px,#FF6B6B,0px,0px,10px,#FF6B6B,0px,0px,10px,#FF6B6B]`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(section);
                }}
                onMouseEnter={() => setActiveLink(section)}
                onMouseLeave={() => setActiveLink(null)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              <style jsx>{`
        a {
            color: black; 
            opacity: 1;
        }
     
    `}</style>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
