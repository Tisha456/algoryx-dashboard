import { motion } from "framer-motion";
import {
  Droplets,
  TrendingUp,
  Eye,
  Leaf,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Water Efficiency",
    text: "Improve water management and reduce unnecessary resource usage.",
  },
  {
    icon: TrendingUp,
    title: "Higher Productivity",
    text: "Use intelligent insights to support better agricultural productivity.",
  },
  {
    icon: Eye,
    title: "Better Monitoring",
    text: "Monitor important agricultural conditions more effectively.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    text: "Support environmentally responsible and resource-efficient farming.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    text: "Turn agricultural information into meaningful decisions and actions.",
  },
];

function Benefits() {
  return (
    <section
      id="benefits"
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
            Why It Matters
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Benefits of Smart Agriculture
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Technology can help agriculture become more efficient,
            sustainable and informed.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center transition hover:-translate-y-2 hover:border-green-400/40"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Benefits;