export default function Experience() {
  return (
    <section className="bg-gray-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-16">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Experience & Education
        </h2>

        {/* ---------------- EXPERIENCE ---------------- */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">
            Professional Experience
          </h3>

          <ExperienceCard
            role="Software Developer"
            company="International Submarine Engineering"
            companyLink="https://www.ise.bc.ca/"
            location="Port Coquitlam, BC"
            period="2023 – 2024"
            bullets={[
              "Collected and analyzed user and system requirements to design and enhance internal software applications",
              "Developed front-end components and integrated them with backend services using modern development practices",
              "Performed debugging, defect analysis, and troubleshooting to improve system stability and performance",
              "Participated in peer code reviews and maintained clear technical documentation",
            ]}
          />

          <ExperienceCard
            role="Operations Assistant (Systems Support)"
            company="British Columbia Institute of Technology"
            companyLink="https://www.bcit.ca/"
            location="Burnaby, BC"
            period="2024 – Present"
            bullets={[
              "Supported and maintained enterprise applications used across departments, improving reliability and issue resolution workflows",
              "Troubleshot software issues and analyzed application behavior to resolve defects",
              "Worked with structured data, system configurations, and access controls",
              "Collaborated with technical teams to test system changes and validate deployments",
            ]}
          />

          <ExperienceCard
            role="Administrative Assistant"
            company="Sprott Shaw College"
            companyLink="https://www.sprottshaw.com/"
            location="Surrey, BC"
            period="2022 – 2023"
            bullets={[
              "Supported enterprise systems through accurate data entry and records management",
              "Maintained structured operational data used for reporting and audits",
              "Ensured compliance with system, security, and data-handling standards",
            ]}
          />
        </div>

        {/* ---------------- EDUCATION ---------------- */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">
            Education
          </h3>

          <EducationCard
            degree="Bachelor of Science in Applied Computer Science"
            school="British Columbia Institute of Technology (BCIT)"
            period="2025 – 2027 (Part‑Time)"
            details="Major: Network & Applications Development · GPA: 89%"
            link="https://www.bcit.ca/programs/applied-computer-science-network-security-applications-development-option-bachelor-of-science-full-time-part-time-867bbsc/"
          />

          <EducationCard
            degree="Computer Information Technology Diploma"
            school="British Columbia Institute of Technology (BCIT)"
            period="2022 – 2024"
            details="Major: Systems & Software · GPA: 90%"
            link="https://www.bcit.ca/programs/computer-information-technology-diploma-full-time-5540dipma/"
          />
        </div>

      </div>
    </section>
  )
}

/* ---------------- Helper Components ---------------- */

function ExperienceCard({ role, company, companyLink, location, period, bullets }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <h4 className="text-lg font-semibold">{role}</h4>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      <a
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-sm mb-3 inline-block hover:text-indigo-400 transition"
      >
        {company} · {location}
      </a>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
        {bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function EducationCard({ degree, school, period, details, link }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-indigo-400 transition"
        >
          {degree}
        </a>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      <p className="text-gray-400 text-sm">{school}</p>
      <p className="text-gray-400 text-sm mt-1">{details}</p>
    </div>
  )
}