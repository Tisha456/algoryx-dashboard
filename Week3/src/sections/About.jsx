import { motion } from "framer-motion";

function About() {
  const cards = [
    {
      icon: "🤖",
      title: "AI Powered",
      text: "Artificial intelligence can transform agricultural data into useful insights.",
    },
    {
      icon: "📊",
      title: "Data Driven",
      text: "Data analytics helps support smarter and more informed farming decisions.",
    },
    {
      icon: "🌍",
      title: "Sustainable",
      text: "Smart technology can improve resource efficiency and support sustainable farming.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            About the Future
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Technology Meets Agriculture
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Smart agriculture combines artificial intelligence,
            automation, data analytics and modern farming technologies
            to help farmers make better decisions and use resources
            more efficiently.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-800 p-7 transition hover:-translate-y-2 hover:border-green-400/40"
            >
              <div className="text-5xl">
                {card.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {card.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;