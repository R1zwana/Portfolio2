import { Github, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/80 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-xl font-bold font-heading">
                    Rizwana<span className="text-violet-500">.</span>
                </div>

                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Rizwana. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/R1zwana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="mailto:batoolrida976@gamil.com"
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
