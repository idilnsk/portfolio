import { FC } from "react";

const Navigation: FC = () => {

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
        <div>
            <nav>
                <ul className="font-mukta md:flex gap-8 p-6 uppercase bg-black bg-opacity-10 rounded-2xl items-center">
                    <li>
                        <span className="cursor-pointer" onClick={() => navigateToSection('about')}>
                            About
                        </span>
                    </li>
                    <li>
                        <span className="cursor-pointer" onClick={() => navigateToSection('projects')}>
                            Projects
                        </span>
                    </li>
                    <li>
                        <span className="cursor-pointer" onClick={() => navigateToSection('contact')}>
                            Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
