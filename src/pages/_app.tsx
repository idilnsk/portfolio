import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../../components/Navigation/Navigation";
import AboutPage from "../pages/about/About";
import CVViewer from "../../components/CVViewer";
import Projects from "../pages/projects/Projects";
import ContactForm from "../pages/contact/ContactForm";
import Footer from "../../components/Footer/Footer";
import SkillView from "../../components/Skill/SkillView";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />

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
    </>
  );
}
