"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, Terminal, Bot } from "lucide-react";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particlesArray: Particle[] = [];
        const numberOfParticles = 70;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || 800);
                this.y = Math.random() * (canvas?.height || 600);
                this.size = Math.random() * 1.8 + 1.2;
                this.speedX = (Math.random() - 0.5) * 0.35;
                this.speedY = (Math.random() - 0.5) * 0.35;
            }

            update() {
                if (!canvas) return;
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = "#00A896";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        };

        const connectParticles = () => {
            if (!ctx) return;
            let opacityValue = 1;

            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 130) {
                        opacityValue = 1 - distance / 130;
                        ctx.strokeStyle = `rgba(15, 45, 89, ${opacityValue * 0.08})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100"
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none opacity-60"
            />

            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-50/40 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-blue-950 text-xs sm:text-sm font-bold tracking-wide uppercase">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse" />
                            <span>Enterprise Software &amp; AI Engineering</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900">
                            AI Agents, Web Development & Software Solutions by
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-teal-500"> Vyteq</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                            At <span className="font-bold text-blue-950">Vyteq</span>, we build elegant, high-performance web applications, scalable custom backends, and multi-step autonomous AI workflows to optimize your operations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#enquiry"
                                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl font-bold bg-blue-950 text-white hover:bg-blue-900 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                Partner With Us
                            </a>
                            <a
                                href="#live-projects"
                                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl font-bold bg-white border border-slate-200 text-blue-950 hover:bg-slate-50 transition-all"
                            >
                                View Our Works <ArrowRight className="inline ml-2 text-teal-500 h-4 w-4" />
                            </a>
                        </div>

                        <div className="pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 text-sm">
                            <div className="flex items-center space-x-2">
                                <ShieldCheck className="h-4 w-4 text-teal-500" />
                                <span className="font-semibold text-slate-800">Production-Ready Code</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <ShieldCheck className="h-4 w-4 text-teal-500" />
                                <span className="font-semibold text-slate-800">Custom Autonomous RAG</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <ShieldCheck className="h-4 w-4 text-teal-500" />
                                <span className="font-semibold text-slate-800">Premium SLA Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white border border-slate-200 p-8 shadow-xl flex flex-col justify-between overflow-hidden group">
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-950 via-teal-500 to-blue-850" />
                            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-teal-50/40 blur-2xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
                                <div className="w-full flex justify-center transform group-hover:scale-[1.01] transition-transform duration-700">
                                    <img
                                        src="./logo.png"
                                        alt="Vyteq Corporate Identifier"
                                        className="w-full max-w-[320px] rounded-2xl shadow-md border border-slate-100 bg-white p-4"
                                    />
                                </div>
                                <div className="text-center">
                                    <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">
                                        Corporate Identity
                                    </span>
                                    <div className="flex justify-center space-x-2">
                                        <span className="px-3 py-1 rounded bg-slate-100 text-[10px] text-blue-950 font-bold uppercase tracking-wider border border-slate-200/50">
                                            Web
                                        </span>
                                        <span className="px-3 py-1 rounded bg-slate-100 text-[10px] text-blue-950 font-bold uppercase tracking-wider border border-slate-200/50">
                                            Software
                                        </span>
                                        <span className="px-3 py-1 rounded bg-slate-100 text-[10px] text-blue-950 font-bold uppercase tracking-wider border border-slate-200/50">
                                            AI Agents
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                                <span className="flex items-center gap-1">
                                    <Terminal className="h-3 w-3 text-teal-500" /> SYSTEM_STATUS: ACTIVE
                                </span>
                                <span>VER: 2.0.26</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
