"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { NavBarProps } from "./types";

export default function NavBar({ isMobileMenuOpen, onToggleMobileMenu }: NavBarProps) {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" className="flex items-center space-x-3 group">
                        <img
                            src="./mainlogo.png"
                            alt="Vyteq Technology Solutions Logo"
                            className="h-15 sm:h-12 w-40 sm:w-48 object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                    </a>

                    <div className="hidden lg:flex items-center space-x-8">
                        <a
                            href="#about"
                            className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-900 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-900 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#live-projects"
                            className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-900 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#interactive-agent"
                            className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-900 transition-colors"
                        >
                            AI Playground
                        </a>
                        <a
                            href="#cost-estimator"
                            className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-900 transition-colors"
                        >
                            Estimator
                        </a>
                        <a
                            href="#enquiry"
                            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-950 hover:bg-blue-900 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                        >
                            Consultation <ArrowRight className="inline ml-1.5 h-3 w-3" />
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={onToggleMobileMenu}
                            className="text-blue-950 hover:text-teal-600 focus:outline-none p-2"
                            aria-label="Toggle Navigation Drawer"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 transition-all duration-300">
                    <a
                        href="#about"
                        onClick={onToggleMobileMenu}
                        className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        onClick={onToggleMobileMenu}
                        className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
                    >
                        Services
                    </a>
                    <a
                        href="#live-projects"
                        onClick={onToggleMobileMenu}
                        className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
                    >
                        Projects
                    </a>
                    <a
                        href="#interactive-agent"
                        onClick={onToggleMobileMenu}
                        className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
                    >
                        AI Playground
                    </a>
                    <a
                        href="#cost-estimator"
                        onClick={onToggleMobileMenu}
                        className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
                    >
                        Estimator
                    </a>
                    <a
                        href="#enquiry"
                        onClick={onToggleMobileMenu}
                        className="block text-center px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-blue-950"
                    >
                        Consultation
                    </a>
                </div>
            )}
        </nav>
    );
}
