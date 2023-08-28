import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../../components/Navigation/Navigation"
import About from "../pages/About/About";
import CVViewer from "../../components/CVViewer";
import Projects from "../pages/projects/Projects"
import ContactForm from "../pages/contact/ContactForm";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Navigation/>
  <About/>
  <CVViewer/>
  <Projects/>
  <ContactForm/>
  <Component {...pageProps} />
  </>
);
}
