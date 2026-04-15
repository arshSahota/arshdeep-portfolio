import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ---------------- Reminder App ---------------- */}
          <motion.div
            className="bg-surface rounded-xl p-6 border border-surfaceBorder hover:border-primary/70 transition"
            whileHover={{ y: -6 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Reminder & Task Management Web App
            </h3>

            <p className="text-textMuted mb-4">
              A JavaScript‑based web application developed as an academic project,
              focused on task creation, reminders, and user‑friendly workflows.
            </p>

            <ul className="text-textMuted text-sm space-y-1 mb-4 list-disc list-inside">
              <li>Engineering focus: modular JavaScript design, input validation, and UI state managemen</li>
              <li>Built using JavaScript (ES6+), HTML, and CSS</li>
              <li>Implemented task creation, editing, and deletion logic</li>
              <li>Applied modular JavaScript patterns for maintainable code</li>
              <li>Focused on usability, validation, and clear UI behavior</li>
            </ul>

            <a
              href="https://github.com/arshSahota/FinalProject_2520"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-primary hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>

          {/* ---------------- CIT 3495 Microservices Project ---------------- */}
          <motion.div
            className="bg-surface rounded-xl p-6 border border-surfaceBorder hover:border-primary/70 transition"
            whileHover={{ y: -6 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Containerized Microservices Data & Analytics System
            </h3>

            <p className="text-textMuted mb-4">
              A containerized microservices system developed for CIT 3495,
              focused on data collection, authentication, analytics, and
              service‑to‑service communication.
            </p>

            <ul className="text-textMuted text-sm space-y-1 mb-4 list-disc list-inside">
              <li>Engineering focus: service separation, container orchestration, and data flow between services</li>
              <li>Designed a multi‑service architecture using Docker and Docker Compose</li>
              <li>Implemented web services for data entry and analytics visualization</li>
              <li>Built an authentication service to validate user access across services</li>
              <li>Integrated MySQL for transactional data and MongoDB for analytics results</li>
              <li>Developed analytics logic to compute metrics such as min, max, and average</li>
            </ul>

            <a
              href="https://github.com/rogerzhuang/acit3495-project1"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-primary hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
