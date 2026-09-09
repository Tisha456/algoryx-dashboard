import { motion } from "framer-motion";

const steps = [
  {
    year: "01",
    title: "Discover",
    description:
      "We understand your goals, requirements, and business challenges.",
  },
  {
    year: "02",
    title: "Plan",
    description:
      "We create a clear strategy and plan the right digital solution.",
  },
  {
    year: "03",
    title: "Build",
    description:
      "Our team develops and tests the solution using modern technology.",
  },
  {
    year: "04",
    title: "Grow",
    description:
      "We improve the solution and help you achieve long-term growth.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-3">
            OUR PROCESS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            How We Work
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold md:-translate-x-1/2 z-10">
                  {step.year}
                </div>

                <div className="ml-20 md:ml-0 md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}