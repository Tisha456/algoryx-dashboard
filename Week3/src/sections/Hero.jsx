import { motion } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-28 text-white"
    >
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
            <Sprout size={18} />
            Smart Agriculture 3D Experience
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Growing a
            <span className="block text-green-400">
              Smarter Future
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Discover how artificial intelligence, data analytics,
            automation and modern technology are transforming
            agriculture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
            >
              Explore Technology
              <ArrowRight size={18} />
            </a>

            <a
              href="#technology"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold transition hover:border-green-400 hover:text-green-400"
            >
              View Technology
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex h-[450px] items-center justify-center"
        >
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 shadow-2xl shadow-green-500/20">

            <div className="absolute h-64 w-64 rounded-full border border-green-300/20" />

            <div className="absolute h-48 w-48 rounded-full border border-green-300/20" />

            <div className="text-center">
              <div className="text-8xl">🌱</div>

              <p className="mt-4 text-sm font-semibold text-green-300">
                Smart Agriculture
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Powered by Technology
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;