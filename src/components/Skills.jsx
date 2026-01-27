import { Code2, Layout, Server, Palette, Lightbulb, Users, GraduationCap, CheckCircle2 } from 'lucide-react'

const skillCategories = [
    {
        title: 'Languages',
        icon: Code2,
        skills: ['Python', 'C#', 'C++', 'Java', 'JavaScript'],
    },
    {
        title: 'Frontend',
        icon: Layout,
        skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: Server,
        skills: ['NestJS', 'Express.js', 'REST APIs', 'Node.js'],
    },
    {
        title: 'Design & Creative',
        icon: Palette,
        skills: ['UI/UX Design', 'Graphic Design (Basic)', 'Video Editing'],
    },
]

const softSkills = [
    { icon: Users, label: 'Communication' },
    { icon: GraduationCap, label: 'Teaching' },
    { icon: Lightbulb, label: 'Problem Solving' },
    { icon: CheckCircle2, label: 'Usability Focus' },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gradient">
                    Technical Arsenal
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-16 rounded-full" />

                {/* Skill Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="glass-card p-6 group hover:-translate-y-2 hover:border-violet-500/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <category.icon className="w-6 h-6 text-violet-400" />
                                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-slate-400 bg-slate-800/70 px-3 py-1.5 rounded-md group-hover:bg-violet-500/10 group-hover:text-slate-200 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills Bar */}
                <div className="glass-card p-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {softSkills.map((skill, index) => (
                        <div key={skill.label} className="flex items-center gap-2">
                            <skill.icon className="w-5 h-5 text-teal-400" />
                            <span className="text-slate-300 font-medium">{skill.label}</span>
                            {index < softSkills.length - 1 && (
                                <span className="hidden md:block text-slate-700 ml-6">/</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
