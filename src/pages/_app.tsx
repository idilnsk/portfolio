import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../../components/Navigation/Navigation"
import About from "../pages/About/About";
import CVViewer from "../../components/CVViewer";
import Projects from "../pages/projects/Projects"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Navigation/>
  <About/>
  <CVViewer/>
  <Projects/>
  <Component {...pageProps} />
  </>
);
}
