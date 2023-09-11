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
import {useState} from "react";


export default function App({ Component, pageProps }: AppProps) {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleNavigate = () => {
    setShowMainContent(true);
  };
  return (
    <>
        {!showMainContent && (
        <div className="entry-page">
          <SpotlightOverlay onNavigate={handleNavigate} />
        </div>
      )}

      {showMainContent && (
        <div className="main-content">
          <Navigation />

      <div  id="about">
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
      )}
    </>
  );
}
