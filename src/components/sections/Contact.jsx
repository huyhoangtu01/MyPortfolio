import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {

    const [fromData, setFromData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = "service_w2xbuz7"
    const TEMPLATE_ID = "template_3v7h0vm"
    const PUBLIC_KEY = "wDUlzj6fPNPE5f0Lu"
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message sent successfully");
            setFromData({
                name: "",
                email: "",
                message: "",
            });
        }).catch(() => alert("Failed to send message"));
    };

    
    return (
        <section id = "contact" className = "min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className = "px-4 w-full min-w-[300px] md:w-[350px] sm:w-2/3 p-6">
                    <h2 className= "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                        Get in touch with me
                    </h2>
                    <form className = "space-y-6" onSubmit = {handleSubmit}>
                        <div className = "relative">
                            <input 
                            type = "text" 
                            id= "name" 
                            name ="name" 
                            value = {fromData.name}
                            required className = "w-full bg-white/5 border border-white/10 rounded px-4 px-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder = "Your Name..."      
                            onChange = {(e) => setFromData({...fromData, name: e.target.value})}
                            />
                        </div>

                        <div className = "relative">
                            <input 
                            type = "email" 
                            id= "email" 
                            name ="email" 
                            value = {fromData.email}
                            required className = "w-full bg-white/5 border border-white/10 rounded px-4 px-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder = "example@gmail.com..."                            
                            onChange = {(e) => setFromData({...fromData, email: e.target.value})}
                            />
                        </div>

                        <div className = "relative">
                            <textarea 
                            id= "message" 
                            name ="message" 
                            value = {fromData.message}
                            required 
                            rows = "5"
                            className = "w-full bg-white/5 border border-white/10 rounded px-4 px-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder = "Your Message..."                            
                            onChange = {(e) => setFromData({...fromData, message: e.target.value})}
                            />
                        </div>

                        <button 
                        type = "submit" 
                        className = "w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>


            </RevealOnScroll>
        </section>
    )
}
