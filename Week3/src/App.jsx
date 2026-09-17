import Navbar from "./components/Navbar";
import ModelViewer from "./components/ModelViewer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* 3D Earth Section */}
        <section
          id="model"
          className="bg-slate-950 px-6 py-24 text-white"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                Algoryx 3D Asset
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Explore Our Planet
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                Interact with a 3D Earth model and explore the
                connection between technology, agriculture and our planet.
              </p>
            </div>

            <ModelViewer />

          </div>
        </section>

        {/* Benefits Section */}
        <Benefits />

        {/* Call To Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;