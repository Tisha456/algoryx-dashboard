import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Timeline from "./sections/Timeline";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Timeline />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;