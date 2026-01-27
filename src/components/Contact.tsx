import { useState } from 'react'
import { Mail, Github, Send } from 'lucide-react'

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setStatusMessage('')

        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data.message || 'Failed to send message')

            setStatus('success')
            setStatusMessage('Message sent successfully! I will get back to you soon.')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            if (error instanceof Error) {
                setStatus('error')
                setStatusMessage(error.message)
            }
        } finally {
            setStatus('idle')
        }
    }

    return (
        <section id="contact" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="glass-card overflow-hidden grid lg:grid-cols-2">
                    {/* Left Side - Info */}
                    <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
                            Let's Connect
                        </h2>
                        <p className="text-white/90 mb-8 leading-relaxed">
                            I'm open to internships, entry-level developer roles, and
                            collaborative projects. If you have a project in mind or just
                            want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:batoolrida976@gamil.com"
                                className="flex items-center gap-4 text-white hover:translate-x-2 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-white/70">Email Me</div>
                                    <div className="font-semibold">batoolrida976@gamil.com</div>
                                </div>
                            </a>

                            <a
                                href="https://github.com/R1zwana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white hover:translate-x-2 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-white/70">Check my code</div>
                                    <div className="font-semibold">github.com/R1zwana</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                        {statusMessage && (
                            <div className={`p-4 rounded-lg mb-4 ${status === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                {statusMessage}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Message</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="How can I help you?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Sending...' : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
