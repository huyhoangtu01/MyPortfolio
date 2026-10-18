import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {

    const projects = [
        {
            title: "Event & Payment-Splitting App (Zudo)",
            description: "A full-stack app for events, participants, payments and payouts: itemized expense splitting, token-based payment links with short URLs, payment confirmation and payout tracking, phone/email sign-in, and automated SMS payment reminders. Built on a remote team with 60+ REST API routes and a 17-table PostgreSQL data model.",
            tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Redux Toolkit", "Firebase", "Twilio", "PWA"],
        },
        {
            title: "Portfolio",
            description: "A personal portfolio website to showcase my work, skills, projects and contact information.",
            tech: ["React", "TailwindCSS", "Vite"],
            link: "https://www.huythanhtran.dev/",
        },
    ];

    return (
        <section id = "projects" className = "min-h-screen flex items-center justify-center py-20" >
            <RevealOnScroll>
                <div className = "max-w-5xl mx-auto px-4">
                    <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, key) => (
                            <div key={key} className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className = "text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className = "flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <div className ="flex justify-between items-center">
                                        <a href={project.link} className =" text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project →
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
