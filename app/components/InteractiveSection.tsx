"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Bot, CheckCircle, Info, Send, Server, ShieldCheck, Terminal } from "lucide-react";
import { ChatMessage } from "./types";

export default function InteractiveSection() {
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
        {
            sender: "bot",
            text: "Greetings! I am Vyteq's autonomous concierge agent. I can guide you through our core services or draft custom proposals. What solution are you planning next?",
            time: "Just now",
        },
    ]);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [estimateService, setEstimateService] = useState("web");
    const [estimateComplexity, setEstimateComplexity] = useState("mid");
    const [estimateTimeline, setEstimateTimeline] = useState(4);
    const chatMessagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessages, isBotTyping]);

    const sendChatMessage = (textToSend: string) => {
        const trimmed = textToSend.trim();
        if (!trimmed) return;

        setChatMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: trimmed,
                time: "Just now",
            },
        ]);

        setChatInput("");
        setIsBotTyping(true);

        setTimeout(() => {
            setIsBotTyping(false);
            let replyText = "";
            const query = trimmed.toLowerCase();

            if (query.includes("react") || query.includes("web") || query.includes("next")) {
                replyText =
                    "Web Architecting is a core discipline here. Just like our live corporate deployments for WealthBrix and Nature's Village, we build fast, fluid Next.js systems. Drop your project metrics in our estimator below or complete our secure enquiry form!";
            } else if (query.includes("agent") || query.includes("ai") || query.includes("rag")) {
                replyText =
                    "Autonomous RAG AI Agents represent our premium scaling solutions. We connect corporate document directories with database actions. Let's design custom agent behaviors tailored to your pipeline on our enquiry panel below!";
            } else if (query.includes("consultation") || query.includes("schedule") || query.includes("call")) {
                replyText =
                    "We arrange detailed, high-level architecture sessions for enterprise clients. Submit your preferences on our enquiry sheet below and we will follow up with an official calendar invite link!";
            } else {
                replyText =
                    "That sounds like a fascinating business use case! At Vyteq, we scale web architectures and design autonomous models precisely to fit complex operational scopes. Let's document these specifications in our Enquiry form below to begin.";
            }

            setChatMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: replyText,
                    time: "Just now",
                },
            ]);
        }, 1100);
    };

    const estimationResult = useMemo(() => {
        let baseRate = 25000;
        let teamComposition = "1 Fullstack Developer";

        if (estimateService === "web") {
            baseRate = 35000;
            teamComposition = "1 Lead Engineer + 1 UI/UX Specialist";
        } else if (estimateService === "software") {
            baseRate = 60000;
            teamComposition = "2 Fullstack Developers + 1 Platform Engineer";
        } else if (estimateService === "ai") {
            baseRate = 75000;
            teamComposition = "1 AI/LLM Engineer + 1 DevOps Integration Specialist";
        } else if (estimateService === "all") {
            baseRate = 140000;
            teamComposition = "3 Lead Engineering Specialists + 1 Systems Architect";
        }

        let complexityMultiplier = 1;
        if (estimateComplexity === "mid") {
            complexityMultiplier = 1.8;
            if (teamComposition.includes("1 Fullstack")) {
                teamComposition = "2 Enterprise Engineers";
            }
        } else if (estimateComplexity === "enterprise") {
            complexityMultiplier = 3.5;
            teamComposition = "Full Dedicated Architecture Pod (5 domain specialists)";
        }

        let timelineMultiplier = 1;
        if (estimateTimeline < 4) {
            timelineMultiplier = 1.35;
        } else if (estimateTimeline > 10) {
            timelineMultiplier = 0.9;
        }

        const baseCost = baseRate * complexityMultiplier * timelineMultiplier;
        const minEstimate = Math.round(baseCost / 1000) * 1000;
        const maxEstimate = Math.round((baseCost * 1.3) / 1000) * 1000;

        return {
            priceRange: `₹${minEstimate.toLocaleString("en-IN")} - ₹${maxEstimate.toLocaleString("en-IN")}`,
            team: teamComposition,
        };
    }, [estimateService, estimateComplexity, estimateTimeline]);

    return (
        <>
            <section
                id="interactive-agent"
                className="py-24 bg-slate-50 border-y border-slate-100 relative"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-3">
                            Interactive Technology Showcase
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Experience Vyteq AI Agents
                        </h2>
                        <p className="text-slate-500 mt-4 text-sm sm:text-base">
                            Test an isolated, mock model deployment of our custom customer onboarding agent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl flex flex-col shadow-xl overflow-hidden min-h-[480px]">
                            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-blue-800 flex items-center justify-center text-white">
                                            <Bot className="h-5 w-5" />
                                        </div>
                                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold leading-none">Vyteq AI Assistant</h3>
                                        <span className="text-[10px] text-slate-400">Autonomous Concierge Sandbox</span>
                                    </div>
                                </div>
                                <span className="text-[11px] font-mono bg-white/10 px-2.5 py-1 rounded text-teal-400">Online</span>
                            </div>

                            <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[300px]">
                                {chatMessages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start space-x-3 ${msg.sender === "user" ? "justify-end" : ""}`}
                                    >
                                        {msg.sender !== "user" && (
                                            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-blue-950 shrink-0">
                                                <Bot className="h-4 w-4" />
                                            </div>
                                        )}
                                        <div
                                            className={`p-4 rounded-2xl max-w-[85%] shadow-sm ${msg.sender === "user"
                                                    ? "bg-blue-950 text-white rounded-tr-none text-right"
                                                    : "bg-slate-100 border border-slate-200/60 rounded-tl-none text-left"
                                                }`}
                                        >
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                                            <span
                                                className={`text-[9px] mt-2 block font-medium ${msg.sender === "user" ? "text-slate-300" : "text-slate-400"
                                                    }`}
                                            >
                                                {msg.time}
                                            </span>
                                        </div>
                                        {msg.sender === "user" && (
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-blue-950 border border-slate-300 shrink-0">
                                                <Server className="h-4 w-4" />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isBotTyping && (
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-blue-950 shrink-0">
                                            <Bot className="h-4 w-4" />
                                        </div>
                                        <div className="bg-slate-100 border border-slate-200/60 p-4 rounded-r-2xl rounded-bl-2xl shadow-sm">
                                            <div className="flex space-x-1.5 py-1">
                                                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                                                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                                                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={chatMessagesEndRef} />
                            </div>

                            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex flex-wrap gap-2">
                                <button
                                    onClick={() => sendChatMessage("I want a premium web application")}
                                    className="text-xs bg-white hover:bg-teal-50 hover:text-blue-950 hover:border-teal-500 border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-all text-slate-700"
                                >
                                    React Web App
                                </button>
                                <button
                                    onClick={() => sendChatMessage("Develop automated RAG AI Agents")}
                                    className="text-xs bg-white hover:bg-teal-50 hover:text-blue-950 hover:border-teal-500 border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-all text-slate-700"
                                >
                                    AI Agent Deploy
                                </button>
                                <button
                                    onClick={() => sendChatMessage("Schedule a systems consultation")}
                                    className="text-xs bg-white hover:bg-teal-50 hover:text-blue-950 hover:border-teal-500 border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-all text-slate-700"
                                >
                                    Consultation
                                </button>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendChatMessage(chatInput);
                                }}
                                className="p-4 border-t border-slate-100 bg-white flex items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-slate-900"
                                />
                                <button
                                    type="submit"
                                    className="p-3.5 rounded-xl bg-blue-950 text-white hover:bg-blue-900 hover:shadow-md transition-all focus:outline-none"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-6">
                                <h4 className="text-lg font-bold text-slate-900 flex items-center">
                                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-3 animate-ping" /> RAG Systems Highlights
                                </h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Our custom integrations process documentation securely and connect language models with database endpoints, allowing automated tools to respond with accurate corporate data.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 rounded bg-slate-100 text-teal-600 text-xs mt-1 border border-slate-200/50 shrink-0">
                                            <Terminal className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-800">Dynamic Context Indexing</h5>
                                            <p className="text-xs text-slate-400">Parse internal documentation, manuals, and policies securely into local databases.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 rounded bg-slate-100 text-teal-600 text-xs mt-1 border border-slate-200/50 shrink-0">
                                            <Server className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-800">Function Calling Hooks</h5>
                                            <p className="text-xs text-slate-400">Empower agent workflows to fetch databases, compile reports, or update webhooks securely.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 rounded bg-slate-100 text-teal-600 text-xs mt-1 border border-slate-200/50 shrink-0">
                                            <ShieldCheck className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-800">Enterprise Context Guardrails</h5>
                                            <p className="text-xs text-slate-400">Strict rules isolate agent scopes to avoid unpredictable or unapproved behavior.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-gradient-to-tr from-blue-950 to-slate-900 border border-slate-200 text-white flex items-center justify-between shadow-lg">
                                <div>
                                    <h4 className="text-sm font-bold tracking-wide uppercase">Deploy Custom Agent?</h4>
                                    <p className="text-xs text-slate-300 mt-1">Let's design your enterprise AI roadmap.</p>
                                </div>
                                <a
                                    href="#enquiry"
                                    className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-blue-950 bg-teal-400 hover:bg-white transition-colors shrink-0"
                                >
                                    Plan Agent <ArrowRight className="inline ml-1 h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cost-estimator" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <span className="text-[10px] font-mono uppercase bg-slate-200 text-blue-950 px-3 py-1.5 rounded border border-slate-300/60 tracking-wider font-bold">
                                    Dynamic Service Planner
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vyteq Value Metric Calculator</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Select your core software requirement, configure project scope parameters, and instantly view estimated engineering timeline requirements and ballpark pricing.
                                </p>

                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Service Core Selection</label>
                                        <select
                                            value={estimateService}
                                            onChange={(e) => setEstimateService(e.target.value)}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 text-slate-800"
                                        >
                                            <option value="web">Web Development (React / Next.js)</option>
                                            <option value="software">Custom Software &amp; Platform APIs</option>
                                            <option value="ai">Autonomous RAG AI Agent Integration</option>
                                            <option value="all">Enterprise Suite (All Services Combined)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Scale &amp; Complexity Profile</label>
                                        <select
                                            value={estimateComplexity}
                                            onChange={(e) => setEstimateComplexity(e.target.value)}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 text-slate-800"
                                        >
                                            <option value="starter">MVP Prototype Scale</option>
                                            <option value="mid">Standard Commercial Suite</option>
                                            <option value="enterprise">Advanced Scaled Architecture</option>
                                        </select>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-800">Target Timeline</label>
                                            <span className="text-xs font-extrabold text-teal-600">{estimateTimeline} Weeks</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="2"
                                            max="16"
                                            value={estimateTimeline}
                                            onChange={(e) => setEstimateTimeline(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-6 p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between h-full space-y-8 relative overflow-hidden shadow-md">
                                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-slate-50 blur-xl" />

                                <div className="space-y-4">
                                    <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Vyteq Allocation Estimate</span>

                                    <div className="border-t border-slate-100 pt-4">
                                        <span className="text-[10px] text-slate-400 uppercase block font-bold">Estimated Cost Range</span>
                                        <h4 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight mt-1">{estimationResult.priceRange}</h4>
                                    </div>

                                    <div>
                                        <span className="text-[10px] text-slate-400 uppercase block font-bold">Engineering Team Allocation</span>
                                        <p className="text-sm text-slate-800 mt-1 font-semibold">{estimationResult.team}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-2">
                                    <p className="text-[11px] text-slate-500 flex items-start gap-1">
                                        <Info className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                                        Note: Calculated estimate displays typical starting scales. Formulate a final project quote by completing our secure enquiry check sheet below.
                                    </p>
                                </div>

                                <a
                                    href="#enquiry"
                                    className="block text-center px-6 py-4 rounded-xl font-bold bg-blue-950 text-white hover:bg-blue-900 hover:shadow-lg transition-all text-sm uppercase tracking-wider"
                                >
                                    Secure Contract Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
