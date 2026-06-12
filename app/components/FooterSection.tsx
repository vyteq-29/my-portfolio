import { Info } from "lucide-react";
import { FooterProps } from "./types";

export default function FooterSection({ copyToClipboard, isToastVisible, toastText }: FooterProps) {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 relative z-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
                    <div className="md:col-span-4 space-y-4">
                        <img
                            src="./mainlogo.png"
                            alt="Vyteq Technology Solutions"
                            className="h-10 w-auto object-contain mb-3 bg-white p-2 rounded-lg"
                        />
                        <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                            Vyteq is a custom development agency engineering high-performance responsive web environments, reliable backend business portals, and next-generation AI agents.
                        </p>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions &amp; Focus</h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <a href="#services" className="hover:text-teal-400 transition-colors">
                                    React &amp; Next.js Platforms
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-teal-400 transition-colors">
                                    Custom CRM &amp; ERP Modules
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-teal-400 transition-colors">
                                    Retrieval Augmented RAG
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-teal-400 transition-colors">
                                    Secure Backend Microservices
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Client Deployments</h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <a href="https://www.wealthbrix.in/home" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                                    WealthBrix Portal
                                </a>
                            </li>
                            <li>
                                <a href="https://naturesvillage.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                                    Amaatra Natures Village
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Line</h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <button
                                    onClick={() => copyToClipboard("vivek@vyteq.in")}
                                    className="hover:text-teal-400 text-left transition-colors focus:outline-none flex items-center gap-1.5"
                                >
                                    vivek@vyteq.in
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-slate-900 border border-teal-500/40 px-6 py-4 rounded-xl shadow-xl flex items-center space-x-3 text-xs text-white max-w-sm ${isToastVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                        }`}
                >
                    <Info className="h-5 w-5 text-teal-400 shrink-0" />
                    <span>{toastText}</span>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
                    <p>&copy; 2026 Vyteq Technology Solutions. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0">
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/company/vyteq-technology-solutions/"
                                className="hover:text-teal-400 transition-colors flex items-center gap-2"
                            >
                                <span className="sr-only">Vyteq LinkedIn</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.18 0 52.52 0 23.52 24.95 0 55.74 0A55.92 55.92 0 01111.7 52.65c0 30.58-24.95 53.65-57.86 54.7zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.2-79.2-48.2 0-55.6 37.7-55.6 76.7V448h-92.7V148.9h89V196h1.3c12.4-23.5 42.6-48.2 87.8-48.2 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex space-x-6 mt-4 sm:mt-0">
                            <a href="#about" className="hover:text-teal-400">Code Standards</a>
                            <a href="#services" className="hover:text-teal-400">Privacy &amp; NDAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
