import { useEffect, useRef } from 'react'

export default function About() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up')
                        entry.target.style.opacity = '1'
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" className="py-24 relative">
            <div ref={sectionRef} className="max-w-6xl mx-auto px-6 opacity-0">
                <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gradient">
                    About Me
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-16 rounded-full" />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-xl text-slate-300 font-medium leading-relaxed">
                            Passionate about building scalable, user-friendly, and visually polished software.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            I am a final-year Bachelor's student in Computer Science with a diverse background in education and design.
                            My professional journey began as an <span className="text-teal-400 font-medium">English Language Instructor</span>,
                            where I developed strong communication and mentoring skills that I now apply to collaborative development teams.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            Currently, I'm expanding my backend expertise with <span className="text-white font-medium">Express.js</span> while
                            leveraging my strong foundation in <span className="text-white font-medium">UI/UX Design</span>, gained during my 7-month
                            internship at Educ Think Lab. This unique blend of technical knowledge and design thinking allows me to create
                            applications that are not just functional, but intuitive and engaging.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            I'm also experienced in <span className="text-white font-medium">video editing</span> and <span className="text-white font-medium">graphic design</span>,
                            which strengthens my visual and user-experience skills.
                        </p>
                    </div>

                    {/* Code Block Visual */}
                    <div className="glass-card p-6 overflow-hidden">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                            <code>{`const developer = {
  name: "Rizwana",
  role: "Full-Stack Developer",
  education: "BS Computer Science",
  
  skills: {
    frontend: ["React", "Tailwind CSS"],
    backend: ["NestJS", "Express.js"],
    creative: ["UI/UX", "Video Editing"]
  },
  
  passion: ["Clean Code", "User Experience"],
  currentFocus: "Express.js & NestJS",
  
  buildFuture() {
    return this.skills.map(s => s.innovate());
  }
};`}</code>
                        </pre>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-16">
                    {[
                        { label: 'Final Year Student', value: 'CS' },
                        { label: '7 Months Experience', value: 'UI/UX' },
                        { label: 'Developer Focus', value: 'Full-Stack' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="text-2xl font-bold font-heading text-violet-400 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
