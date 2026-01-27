import { Github, Mail, ChevronDown } from 'lucide-react'

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <span className="inline-block text-violet-400 font-semibold text-lg mb-4 animate-fade-in-up">
                    Hi, I'm
                </span>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-4 text-gradient animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Rizwana<span className="text-violet-500">.</span>
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Final-Year CS Student & Full-Stack Developer
                </h2>

                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    I build practical, user-focused web applications and bring ideas to life through clean design and creative visuals.
                </p>

                <div className="flex items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#projects" className="btn-primary">
                        View My Work
                    </a>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/R1zwana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500 hover:-translate-y-1 transition-all duration-300"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="mailto:batoolrida976@gamil.com"
                            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500 hover:-translate-y-1 transition-all duration-300"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown size={20} />
            </a>
        </section>
    )
}
