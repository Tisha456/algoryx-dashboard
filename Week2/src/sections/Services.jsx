import { motion } from "framer-motion";
import { Code, BarChart3, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern and responsive websites built with powerful technologies.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn business data into useful insights and better decisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Create smooth and user-friendly mobile experiences.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold mb-3">
            WHAT WE DO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide simple, modern and technology-driven solutions
            to help businesses grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition bg-white dark:bg-gray-800"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}