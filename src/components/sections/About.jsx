import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["TypeScript", "JavaScript", "React", "Next.js", "Redux Toolkit", "TailwindCSS", "PWA"];
    const backendSkills = ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "Firebase Auth", "Twilio", "Python", "SQL", "Vitest", "Playwright"];

    const education = [
        {
            degree: "B.S. in Computer Science",
            school: "Western Governors University",
            period: "expected Dec 2026",
            coursework: "Java, software engineering",
        },
        {
            degree: "A.S. in Computer Science",
            school: "Tidewater Community College",
            period: "May 2023",
            coursework: "Object-oriented programming (C++), data structures and algorithm design, computer systems and low-level programming (C), scientific databases (SQLite3), software testing",
        },
    ];

    const experience = [
        {
            title: "Full-Stack Developer (Contract)",
            company: "Zudo",
            period: "Oct 2025 - Mar 2026",
            description: "Built a full-stack event and payment-splitting app with Next.js 16, React 19 and TypeScript on a remote team: 60+ REST API routes, a 17-table PostgreSQL data model with Prisma, payment collection and payout workflows, Firebase Authentication and Twilio SMS reminders, shipped as an installable PWA tested with Vitest and Playwright.",
        },
        {
            title: "AI Coding Trainer (Contract)",
            company: "Outlier AI, Inc.",
            period: "Oct 2023 - Oct 2024",
            description: "Trained AI models by labeling, classifying and giving feedback on code in Python, JavaScript, C++ and SQL. Debugged and evaluated AI-generated solutions for correctness and quality.",
        },
        {
            title: "AI Coding Trainer (Contract)",
            company: "Remotask",
            period: "Jun 2023 - Oct 2023",
            description: "Worked with the AI training team to refine task guidelines and improve workflow. Documented findings and reported common issues with suggestions to improve the model's coding skills.",
        },
    ];

    return (
        <section id ="about" className = "min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className = "max-w-3xl mx-auto px-4">
                    <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                    About Me
                    </h2>

                    <div className = "rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className = "text-gray-300 mb-6">
                            I'm a Computer Science student at Western Governors University (B.S., expected December 2026) with an A.S. in Computer Science and an ITIL 4 Foundation certification. I'm a full-stack developer who built a production-style event and payment-splitting app in Next.js, React and TypeScript, and I bring 16 months of remote experience evaluating and debugging AI-generated code in Python, JavaScript, C++ and SQL.
                        </p>

                        <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className = "text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className = "flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className = "text-xl font-bold mb-4">
                                    Backend & Testing
                                </h3>
                                <div className = "flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                            <h3 className = "text-xl mb-4">
                                🕮 Education
                            </h3>
                            <ul className = "list-disc list-inside text-gray-300 space-y-4">
                                {education.map((item, key) => (
                                    <li key={key}>
                                        <strong>{item.degree}</strong> - {item.school} ({item.period})
                                        <p className = "text-sm text-gray-400 mt-1">
                                            Coursework: {item.coursework}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <h3 className = "text-xl mt-6 mb-4">
                                📜 Certifications
                            </h3>
                            <ul className = "list-disc list-inside text-gray-300">
                                <li>
                                    <strong>ITIL 4 Foundation</strong> - IT Service Management (Jul 2025)
                                </li>
                            </ul>
                        </div>

                        <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                            <h3 className = "text-xl mb-4">
                                💼Work Experience
                            </h3>
                            <div className = "space-y-4 text-gray-300">
                                {experience.map((job, key) => (
                                    <div key={key}>
                                        <h4 className = "font-semibold">
                                            {job.title} at {job.company} ({job.period})
                                        </h4>
                                        <p className = "text-sm mt-1">
                                            {job.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
