import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 py-4'
                    : 'py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold font-heading">
                    R<span className="text-violet-500">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-400 hover:text-white font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-sm py-2 px-4">
                        Get In Touch
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <nav className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 mt-4">
                    <div className="flex flex-col py-6 px-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white font-medium py-2"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}
