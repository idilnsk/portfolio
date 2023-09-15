import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../../components/Navigation/Navigation";
import AboutPage from "../pages/about/About";
import CVViewer from "../../components/CVViewer";
import Projects from "../pages/projects/Projects";
import ContactForm from "../pages/contact/ContactForm";
import Footer from "../../components/Footer/Footer";
import SkillView from "../../components/Skill/SkillView";
import SpotlightOverlay from "../pages/front/Front";
import { useState, useEffect } from "react";
import LottieBackground from "../../LottieBackground";
import Router from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleNavigate = () => {
    setShowMainContent(true);
    setTimeout(() => {
        Router.push('/#about');
    }, 50);
};

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (hash || window.location.pathname !== '/') {
      setShowMainContent(true);

      setTimeout(() => {
        if (hash) {
          const sectionElement = document.getElementById(hash);
          if (sectionElement) {
            window.scrollTo({
              top: sectionElement.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }, 100); 
    }
  }, []);
  
  return (
    <>
      {!showMainContent && (
        <div className="entry-page">
          <SpotlightOverlay onNavigate={handleNavigate} />
        </div>
      )}

      {showMainContent && (
        <div className="main-content">
          <LottieBackground/>
          <Navigation />
          <div className="content">
          <div id="about">
            <AboutPage />
          </div>
          <div id="cvviewer">
            <CVViewer />
          </div>
          <div>
            <SkillView />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <ContactForm />
          </div>

          <Component {...pageProps} />
          <Footer />
        </div>
        </div>
      )}
    </>
  );
}
