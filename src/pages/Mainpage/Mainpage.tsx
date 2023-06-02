import About from "../../components/About/About.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Landing from "../../components/Landing/Landing.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import Skills from "../../components/Skills/Skills.tsx";
import Work from "../../components/Work/Work.tsx";
function Mainpage() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Mainpage;
