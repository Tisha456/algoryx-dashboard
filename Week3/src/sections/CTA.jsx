import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-400/10 to-slate-950 p-10 text-center md:p-16"
        >
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-400/10 text-green-400">
            <Sparkles size={30} />
          </div>

          {/* Small Heading */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-green-400">
            Build the Future
          </p>

          {/* Main Heading */}
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Make Agriculture Smarter
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore how artificial intelligence, data analytics and
            modern technology can create a more efficient and
            sustainable future for agriculture.
          </p>

          {/* Button */}
          <a
            href="#home"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
          >
            Explore the Experience
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;