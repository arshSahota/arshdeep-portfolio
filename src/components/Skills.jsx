export default function Skills() {
  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-14">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <SkillBlock
            title="Frontend"
            skills={[
              "React",
              "JavaScript (ES6+)",
              "HTML5",
              "CSS3",
              "Responsive Design",
              "Component‑based Architecture",
            ]}
          />

          <SkillBlock
            title="Backend & Systems"
            skills={[
              "RESTful APIs",
              "Python",
              "Laravel (foundational)",
              "Authentication",
              "System Integration",
            ]}
          />

          <SkillBlock
            title="Databases & DevOps"
            skills={[
              "SQL",
              "MySQL",
              "MongoDB",
              "Docker",
              "Docker Compose",
              "Git",
            ]}
          />

        </div>
      </div>
    </section>
  )
}

/* --------- Helper Component --------- */

function SkillBlock({ title, skills }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}