import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-semibold mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Have an idea? Send us a message and let's discuss it.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-2">
              Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>

            <textarea
              required
              rows="5"
              placeholder="Write your message"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-center text-green-600 font-medium">
              Message submitted successfully!
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
}