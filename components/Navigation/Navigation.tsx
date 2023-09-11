import { FC, useState } from "react";

const Navigation: FC = () => {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const navigateToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="h-[80px] flex items-center justify-center bg-fume transition-all duration-300">
            <nav>
                <ul className="font-mukta md:flex gap-8 p-6 uppercase items-center">
                    {['about', 'projects', 'contact'].map((section) => (
                        <li key={section} className="mx-4 relative">
                            <span 
                                className={`text-red-500 hover:text-darker-red hover:bg-darker-red cursor-pointer transition-transform transform scale-100 hover:scale-105 pb-1 ${
                                    activeLink === section ? 'text-opacity-100' : 'text-opacity-50'
                                }`}
                                onClick={() => navigateToSection(section)}
                                onMouseEnter={() => setActiveLink(section)}
                                onMouseLeave={() => setActiveLink(null)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                <span
                                    className="absolute left-0 bottom-[-2px] h-0.5 bg-red-500 rounded transition-all duration-300"
                                    style={{ width: activeLink === section ? '100%' : '0' }}
                                ></span>
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
