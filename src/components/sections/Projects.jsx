import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
        <section id = "projects" className = "min-h-screen flex items-center justify-center py-20" >
            <RevealOnScroll>
                <div className = "max-w-5xl mx-auto px-4">
                    <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <div> 
                                <h3 className="text-xl font-bold mb-2"> Portfolio </h3>
                                <p className = "text-gray-400 mb-4">
                                    A personal portfolio website to showcase my work, skills, and projects, contact information.
                                </p>
                                <div className = "flex flex-wrap gap-2 mb-4">
                                    {["React", "Tailwindcss"].map((tech,key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className ="flex justify-between items-center">
                                    <a href="https://www.huythanhtran.dev/" className =" text-blue-400 hover:text-blue-300 transtion-colors my-4">
                                    {" "}
                                    View Project →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <div> 
                                <h3 className="text-xl font-bold mb-2"> Portfolio </h3>
                                <p className = "text-gray-400 mb-4">
                                    about project1
                                </p>
                                <div className = "flex flex-wrap gap-2 mb-4">
                                    {["React", "Tailwindcss"].map((tech,key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className ="flex justify-between items-center">
                                    <a href="https://www.google.com/search?sca_esv=ca5690578bab1f18&rlz=1C1ONGR_enUS1152US1152&q=portfolio&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBsxayPSIAqObp_AgjkUGqekYoUzDaOcDDjQfK4KpR2OIJg0p8GjEafhVsU6UZNT2tUhHTA_XMhcunRVhbh9fJ-E_NpOwc0V4M-pxQ-VRkNVBLtVA39i8pg8uW6jlEtLtrbdNHgWLD-vHAmoqmNrKak2sYhiqpsjYUvt_8vhjtkMNrZWABg&sa=X&ved=2ahUKEwjFpIj-1Z-MAxVDEVkFHetzAOoQtKgLegQIKBAB&biw=1920&bih=945&dpr=1" className =" text-blue-400 hover:text-blue-300 transtion-colors my-4">
                                    {" "}
                                    View Project →
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <div> 
                                <h3 className="text-xl font-bold mb-2"> Portfolio </h3>
                                <p className = "text-gray-400 mb-4">
                                    about project1
                                </p>
                                <div className = "flex flex-wrap gap-2 mb-4">
                                    {["React", "Tailwindcss"].map((tech,key) => (
                                        <span key={key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className ="flex justify-between items-center">
                                    <a href="https://www.google.com/search?sca_esv=ca5690578bab1f18&rlz=1C1ONGR_enUS1152US1152&q=portfolio&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBsxayPSIAqObp_AgjkUGqekYoUzDaOcDDjQfK4KpR2OIJg0p8GjEafhVsU6UZNT2tUhHTA_XMhcunRVhbh9fJ-E_NpOwc0V4M-pxQ-VRkNVBLtVA39i8pg8uW6jlEtLtrbdNHgWLD-vHAmoqmNrKak2sYhiqpsjYUvt_8vhjtkMNrZWABg&sa=X&ved=2ahUKEwjFpIj-1Z-MAxVDEVkFHetzAOoQtKgLegQIKBAB&biw=1920&bih=945&dpr=1" className =" text-blue-400 hover:text-blue-300 transtion-colors my-4">
                                    {" "}
                                    View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
