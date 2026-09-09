import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 font-semibold mb-4"
        >
          WELCOME TO ALGORYX
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Build. Innovate.
          <span className="text-blue-600"> Grow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Transform your ideas into modern digital experiences
          with powerful technology and creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}