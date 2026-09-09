import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Business Owner",
    message:
      "Algoryx helped us turn our ideas into a simple and effective digital solution.",
  },
  {
    name: "Priya Verma",
    role: "Product Manager",
    message:
      "The experience was smooth, professional, and focused on our actual business needs.",
  },
  {
    name: "Rohan Patel",
    role: "Startup Founder",
    message:
      "A modern approach with excellent design and technology. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold mb-3">
            CLIENT STORIES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What People Say
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Feedback from people who experienced our solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "{testimonial.message}"
              </p>

              <h3 className="font-bold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}