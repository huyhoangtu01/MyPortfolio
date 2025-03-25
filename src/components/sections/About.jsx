import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "TypeScript", "TailwindCSS"];
    const backendSkills = ["Node.js", " Python"];

    return (
        <section id ="about" className = "min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className = "max-w-3xl mx-auto px-4">
                    <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                    About Me
                    </h2>

                    <div className = "rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className = "text gray-300 mb-6">
                            I am a software engineer with a passion for building web and mobile applications thay doi trong about.jsx
                        </p>

                        <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className = "text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className = "flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className = "text-xl font-bold mb-4">
                                    Backend
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
                            <h3 className = "text-xl">
                                🕮 Education
                            </h3>
                            <ul className = "list-disc list-inside text-gray-300 space-y-2">
                                <dev>
                                    <li>
                                        <strong> A.S. in Computer Science</strong> - Tidewater Community College (2020 - 2023)
                                    </li>
                                    <li>
                                        Relavent Coursework: Computer Architecture, Algorithms and Structured Programming, Programming Fundamentals, Advanced Computer Science Topics...
                                    </li>
                                </dev>
                                <dev>
                                    <li>
                                        <strong> B.S in Computer Science</strong> - Western Governor University (expected Jun 2025)
                                    </li>
                                    <li>
                                        Relevant Courses: Computer Architecture, Algorithms and Structured Programming, Programming Fundamentals, Advanced Computer
                                        Science Topics
                                    </li>
                                </dev>
                            </ul>
                        </div>

                        <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                            <h3 className = "text-xl">
                                💼Work Experience
                            </h3>
                            <div className = "space-y-4 text-gray-300">
                                <div>
                                    <h4 className = "font-semibold">
                                        {" "}
                                        AI coding trainer At Outlier AI, Inc. (October 2023 - Present){" "}
                                    </h4>
                                    <div className = "list-disc list-inside space-y-2">
                                        <p>
                                            Participate in training AI by labeling, classifying and providing feedback on code, debug coding solutions and
                                            other coding tasks.
                                        </p>
                                        <p>
                                            Review completed tasks and provide feedback when necessary. Maintain high standards in coding to ensure AI
                                            models receive quality training data.
                                        </p>
                                    </div>
                                </div>

                                
                                <div>
                                    <h4 className = "font-semibold">
                                    AI coding trainer at Remotask (June 2023 - October 2023)
                                    </h4>
                                    <div className = "list-disc list-inside space-y-2">
                                        <p>
                                        Collaborative Improvement: Work closely with the Remotask AI training team to refine task guidelines, resolve ambiguities, and suggest improvements to the task workflow. Contribute to knowledge-sharing sessions with other trainers to ensure a consistent approach.
                                        </p>
                                        <p>
                                        Documentation: Document processes, findings, and feedback to improve the accuracy and effectiveness of AI
                                        training tasks. Create reports on common issues and suggestions for enhancing the AI model’s coding skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
