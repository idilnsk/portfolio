import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../../components/Navigation/Navigation"
import AboutPage from "../pages/About/About";
import CVViewer from "../../components/CVViewer";
import Projects from "../pages/projects/Projects"
import ContactForm from "../pages/contact/ContactForm";
import Footer from "../../components/Footer/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      
      <div id="about">
        <AboutPage />
      </div>
      
      {/* You can give more meaningful IDs if you want, I'm just going by the component names for simplicity */}
      <div id="cvviewer">
        <CVViewer />
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
