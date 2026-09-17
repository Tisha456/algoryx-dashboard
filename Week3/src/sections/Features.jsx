import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Bot,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Crop Monitoring",
    description:
      "Monitor crop conditions and identify changes that may require attention.",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description:
      "Use intelligent recommendations to improve water efficiency in farming.",
  },
  {
    icon: Bot,
    title: "Automation",
    description:
      "Support farming operations with modern automation and intelligent systems.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Convert agricultural data into meaningful insights for better decisions.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Smart Solutions
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Intelligent Farming Features
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Explore technologies that can make modern agriculture
            smarter, more efficient and data-driven.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-green-400/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-green-400 transition-all group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;