import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">
      <motion.div
        className="max-w-5xl w-full text-center space-y-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-400"
          variants={fadeUp}
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          variants={fadeUp}
        >
          Arshdeep{" "}
          <span className="text-indigo-400">Kaur</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-300"
          variants={fadeUp}
        >
          Software Engineer · Systems · Cloud
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed"
          variants={fadeUp}
        >
          I enjoy building software at the intersection of engineering, cloud platforms, and operational systems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          variants={fadeUp}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium shadow-md"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}
