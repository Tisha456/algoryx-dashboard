import { motion } from "framer-motion";
import {
  Database,
  Brain,
  Lightbulb,
  UserCheck,
  Sprout,
} from "lucide-react";

const steps = [
  {
    icon: Sprout,
    number: "01",
    title: "Data Collection",
    description:
      "Agricultural information is collected from different sources.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data Processing",
    description:
      "Collected information is organized and prepared for analysis.",
  },
  {
    icon: Brain,
    number: "03",
    title: "AI Analysis",
    description:
      "Intelligent algorithms analyze patterns and agricultural conditions.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Smart Recommendation",
    description:
      "The system generates useful recommendations from the analyzed data.",
  },
  {
    icon: UserCheck,
    number: "05",
    title: "Farmer Action",
    description:
      "Farmers use the insights to make informed agricultural decisions.",
  },
];

function HowItWorks() {
  return (
    <section
      id="technology"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            The Process
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            How Smart Agriculture Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            From collecting agricultural information to taking
            smarter actions, technology connects every step.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-7 top-8 hidden h-[calc(100%-60px)] w-px bg-green-400/30 md:block" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-green-400/40"
                >

                  {/* Number/Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-400 text-slate-950">
                    <Icon size={25} />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-sm font-bold text-green-400">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-1 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;