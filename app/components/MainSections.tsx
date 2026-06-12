import { ShieldCheck, Globe, Server, Bot, Laptop, Cpu, CheckCircle, ExternalLink } from "lucide-react";

export default function MainSections() {
    return (
        <>
            <section id="about" className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block">
                                About Vyteq
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                                Merging Elite Software Engineering with Business Strategy
                            </h2>
                            <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                                At Vyteq, we construct secure, scalable web products and custom AI backends that help businesses grow. We do not just construct generic templates—we architect high-conversion digital experiences engineered with security from the ground up.
                            </p>
                            <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                                Led by systems architects, we design, program, and support tailored solutions ranging from high-speed client acquisition networks to custom AI databases.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                                <span className="text-4xl font-extrabold text-blue-950 block mb-1">100%</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">SLA Compliance</span>
                                <p className="text-xs text-slate-400 mt-1">High fidelity code with strict latency bounds.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                                <span className="text-4xl font-extrabold text-blue-950 block mb-1">24/7</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">AI Workflows</span>
                                <p className="text-xs text-slate-400 mt-1">Intelligent bots handling background tasks automatically.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                                <span className="text-4xl font-extrabold text-blue-950 block mb-1">2x</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Client Lead Speed</span>
                                <p className="text-xs text-slate-400 mt-1">Engineered with fast UI elements.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                                <span className="text-4xl font-extrabold text-blue-950 block mb-1">100%</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">NDA Shielded</span>
                                <p className="text-xs text-slate-400 mt-1">Strict business confidentiality on code repositories.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-3">Our Core Offerings</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Expertise Engineered for Scale</h2>
                        <p className="text-slate-500 mt-4 text-sm sm:text-base">Explore our software services and customized technology solutions configured for modern enterprise requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/70 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-950 text-2xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">Web Development</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">High-conversion brand portals, modern landing pages, and interactive client spaces programmed using Next.js, React, and server-side layouts. Fully responsive, secure, and SEO optimized.</p>
                            </div>
                            <ul className="space-y-3 text-xs text-slate-500 border-t border-slate-100 pt-6">
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> React, Next.js, and static site optimization</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Fluid, modern UX/UI component styling</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Optimized SEO page weight &amp; load speeds</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-200/70 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-950 text-2xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                                    <Server className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">Software Development</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">Robust customized database structures, client dashboard panels, secure application APIs, and integrations built with Node.js, databases, and secure servers.</p>
                            </div>
                            <ul className="space-y-3 text-xs text-slate-500 border-t border-slate-100 pt-6">
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Custom CRM &amp; client metrics dashboards</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Secure REST &amp; GraphQL API pipelines</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Advanced data encryption &amp; system monitoring</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-200/70 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-950 text-2xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">AI Agents &amp; RAG Models</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">Sophisticated Retrieval-Augmented Generation (RAG) databases and custom language agents designed to parse internal documentation, answer customer service tickets, and trigger automated tasks.</p>
                            </div>
                            <ul className="space-y-3 text-xs text-slate-500 border-t border-slate-100 pt-6">
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Dynamic vector indexing &amp; secure data ingestion</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Intelligent user intake &amp; onboarding bots</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" /> Automated task pipelines and API integrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="live-projects" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-3">Live Deployments</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Featured Client Success Portals</h2>
                        <p className="text-slate-500 mt-4 text-sm sm:text-base">Explore dynamic corporate websites fully deployed and operational, built to absolute visual standards.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-950 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="relative aspect-video bg-gradient-to-tr from-blue-950 to-slate-900 flex items-center justify-center p-6 text-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                                    <div className="relative z-10 space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl mx-auto border border-white/20 shadow-md">
                                            <Laptop className="h-7 w-7 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-extrabold text-white tracking-wide">WEALTHBRIX</h3>
                                        <p className="text-xs text-teal-300 font-bold tracking-widest uppercase">Wealth &amp; Investment Advisory Platform</p>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">Financial Technology</span>
                                        <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">Dynamic Calculations</span>
                                        <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">Modern Layout</span>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed">WealthBrix is a financial advisory and capital consulting platform. Vyteq built their complete web presence with clean page rendering speeds, responsive screens, and client conversion assets.</p>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-100 border-t border-slate-200/50 flex items-center justify-between">
                                <span className="text-xs text-teal-600 font-bold flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse" />Live System</span>
                                <a href="https://www.wealthbrix.in/home" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 transition-all inline-flex items-center">
                                    Launch Site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-950 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="relative aspect-video bg-gradient-to-tr from-teal-950 to-slate-900 flex items-center justify-center p-6 text-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                                    <div className="relative z-10 space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl mx-auto border border-white/20 shadow-md">
                                            <Cpu className="h-7 w-7 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-extrabold text-white tracking-wide">NATURES VILLAGE</h3>
                                        <p className="text-xs text-teal-300 font-bold tracking-widest uppercase">Jim Corbett Resort Project by Amaatra</p>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">Luxury Hospitality</span>
                                        <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">Media Showcase</span>
                                        <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">Fast Loading Speeds</span>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed">Nature's Village by Amaatra is an eco-resort property. Vyteq developed a custom web presentation system featuring lightning-fast image delivery pipelines and fluid navigation components.</p>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-100 border-t border-slate-200/50 flex items-center justify-between">
                                <span className="text-xs text-teal-600 font-bold flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse" />Live System</span>
                                <a href="https://naturesvillage.co.in/" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 transition-all inline-flex items-center">
                                    Launch Site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
