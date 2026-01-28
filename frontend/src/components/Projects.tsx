import { useState, useEffect } from 'react'
import { Folder, Github, ExternalLink, Loader2 } from 'lucide-react'

const techColors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C#': '#178600',
}

export default function Projects() {
    const [projects, setProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch(
                    'https://api.github.com/users/R1zwana/repos?sort=updated&per_page=6'
                )
                if (!res.ok) throw new Error('Failed to fetch')
                const repos = await res.json()
                const filtered = repos.filter((r: any) => !r.fork).slice(0, 6)
                setProjects(filtered)
            } catch (err) {
                if (err instanceof Error) setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gradient">
                    Featured Projects
                </h2>
                <p className="text-center text-slate-400 mb-12">
                    A selection of my work from GitHub
                </p>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-violet-500 animate-spin mb-4" />
                        <p className="text-slate-400">Fetching projects from GitHub...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-slate-400 mb-4">Could not load projects.</p>
                        <a
                            href="https://github.com/R1zwana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Visit GitHub Profile
                        </a>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/R1zwana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        View All on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project }: { project: any }) {
    const lang = project.language || 'Code'
    const langColor = techColors[lang] || '#8b5cf6'

    return (
        <div className="glass-card flex flex-col h-full group hover:-translate-y-2 hover:border-violet-500/50 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
                <Folder className="w-10 h-10 text-violet-400" />
                <div className="flex items-center gap-3">
                    <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    {project.homepage && (
                        <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {project.description || 'No description available.'}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/30">
                    <span className="text-sm font-mono" style={{ color: langColor }}>
                        {lang}
                    </span>
                    <span className="text-xs text-slate-500">
                        Updated {new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                </div>
            </div>
        </div>
    )
}
