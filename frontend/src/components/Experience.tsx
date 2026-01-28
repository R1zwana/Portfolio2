const experiences = [
    {
        title: 'Nextcloud Onboarding',
        company: 'Educ Alliance',
        period: 'Current',
        description:
            'Working on onboarding and implementation processes related to Nextcloud, supporting digital collaboration systems.',
    },
    {
        title: 'UI/UX Design Intern',
        company: 'Educ Think Lab',
        period: '7 Months',
        description:
            'Worked on user interfaces, usability improvements, and user-centered design solutions. Gained deep insights into user-focused design principles.',
    },
    {
        title: 'English Language Instructor',
        company: 'Previous Role',
        period: 'Past',
        description:
            'Taught English language and communication skills, strengthening leadership, presentation, and mentoring abilities.',
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gradient">
                    Experience
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-16 rounded-full" />

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent" />

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.title}
                            className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-4 border-violet-500 z-10" />

                            {/* Content */}
                            <div
                                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                                    }`}
                            >
                                <div className="glass-card p-6 hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <span className="text-violet-400 font-semibold text-sm">
                                            {exp.company}
                                        </span>
                                    </div>
                                    <span className="inline-block text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full mb-4">
                                        {exp.period}
                                    </span>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
