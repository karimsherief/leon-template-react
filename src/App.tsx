import { useEffect } from "react";
import {
  About,
  Contact,
  Features,
  Footer,
  Landing,
  Navbar,
  Portfolio,
  Services,
} from "./components";
import AOS from "aos";
export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
