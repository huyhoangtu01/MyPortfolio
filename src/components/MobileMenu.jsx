import React from "react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    const menuItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-md z-50  
            flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${menuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}
        `}>
            <button 
                onClick={() => setMenuOpen(false)} 
                className={`absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 
                    focus:outline-none cursor-pointer transition-all duration-200 z-50 w-10 h-10 flex items-center justify-center
                    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                aria-label="Close Menu"
            >
                ×
            </button>
        
            <nav className="flex flex-col items-center">
                {menuItems.map((item, index) => (
                    <a 
                        key={item.href}
                        href={item.href} 
                        onClick={() => setMenuOpen(false)}
                        style={{
                            transitionDelay: menuOpen ? `${index * 50}ms` : '0ms'
                        }}
                        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ease-out
                            hover:text-blue-500 hover:scale-110 active:scale-95
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                        `}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    );
};

