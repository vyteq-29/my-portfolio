"use client";

import { useState } from "react";
import { CheckCircle, Clock, Copy, Server, ShieldCheck, Send, X } from "lucide-react";
import { EnquiryFormData } from "./types";

interface EnquirySectionProps {
    copyToClipboard: (text: string) => void;
}

export default function EnquirySection({ copyToClipboard }: EnquirySectionProps) {
    const [formData, setFormData] = useState<EnquiryFormData>({
        name: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: "",
        botTrap: "",
        agree: false,
    });
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [lastSubmittedTime, setLastSubmittedTime] = useState<number>(0);

    const sanitizeInput = (text: string): string =>
        text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;");

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.botTrap.trim() !== "") {
            setFormStatus("error");
            return;
        }

        const now = Date.now();
        if (now - lastSubmittedTime < 60000) {
            setFormStatus("error");
            return;
        }

        setFormStatus("loading");

        const payload = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            phone: sanitizeInput(formData.phone || "Not provided"),
            service: formData.service,
            message: sanitizeInput(formData.message),
            _subject: `Secured Vyteq Corporate Enquiry from ${formData.name}`,
            _replyto: formData.email,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setFormStatus("success");
                setLastSubmittedTime(now);
            } else {
                setFormStatus("error");
            }
        } catch {
            setFormStatus("error");
        }
    };

    const resetEnquiryForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Web Development",
            message: "",
            botTrap: "",
            agree: false,
        });
        setFormStatus("idle");
    };

    return (
        <section id="enquiry" className="py-24 bg-slate-50 relative border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block">
                                Secure Communication Desk
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
                                Start Your Modern Business Infrastructure
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Have an active digital roadmap, cloud requirement, or automated client workflow? Fill in your details. We will process your scope and respond within 12 business hours.
                            </p>

                            <div className="space-y-4 pt-4 border-t border-slate-200">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-950 shadow-sm shrink-0">
                                        <Server className="h-4 w-4 text-teal-600" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-slate-400 uppercase block font-bold">Direct Corporate Mailbox</span>
                                        <button
                                            onClick={() => copyToClipboard("vivek@vyteq.in")}
                                            className="text-sm font-semibold text-blue-950 hover:text-teal-600 transition-colors text-left flex items-center gap-1 focus:outline-none"
                                        >
                                            vivek@vyteq.in <Copy className="h-3 w-3 text-slate-400" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-950 shadow-sm shrink-0">
                                        <Clock className="h-4 w-4 text-teal-600" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-slate-400 uppercase block font-bold">SLA Response Window</span>
                                        <span className="text-sm font-semibold text-blue-950">Within 12 Business Hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md">
                            <p className="text-xs text-slate-500 flex items-start gap-1.5">
                                <ShieldCheck className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                                <span>
                                    <strong>NDA Guaranteed:</strong> All communication parameters, requirements docs, and architectural scopes are handled securely under strict corporate NDA protocols.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                        {formStatus === "loading" && (
                            <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-blue-950 animate-spin mb-4" />
                                <h4 className="text-lg font-bold text-slate-900">Securing Transmission Channel...</h4>
                                <p className="text-xs text-slate-400 mt-2">Connecting with Vyteq Consultation desk</p>
                            </div>
                        )}

                        {formStatus === "success" && (
                            <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 text-4xl flex items-center justify-center mx-auto mb-6 animate-bounce">
                                    <CheckCircle className="h-10 w-10" />
                                </div>
                                <h4 className="text-2xl font-extrabold text-slate-900">Enquiry Received!</h4>
                                <p className="text-sm text-slate-500 mt-3 max-w-sm mx-auto">
                                    Your specifications have been sent to <strong className="text-blue-950">vivek@vyteq.in</strong>.
                                </p>
                                <button
                                    onClick={resetEnquiryForm}
                                    className="mt-6 px-6 py-3 rounded-xl text-xs font-bold uppercase text-white bg-blue-950 hover:bg-blue-900 transition-colors"
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        )}

                        {formStatus === "error" && (
                            <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-500 text-rose-600 flex items-center justify-center mx-auto mb-4">
                                    <X className="h-8 w-8" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900">Routing Interruption</h4>
                                <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
                                    We encountered an issue submitting your request directly. Please send your enquiry parameters to <strong className="text-blue-950">vivek@vyteq.in</strong>.
                                </p>
                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="mt-6 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-950 hover:bg-blue-900"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <input
                                type="text"
                                value={formData.botTrap}
                                onChange={(e) => setFormData((prev) => ({ ...prev, botTrap: e.target.value }))}
                                className="hidden"
                                aria-hidden="true"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Full Name / Lead Identity</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                        placeholder="e.g. Vivek Kumar"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                        placeholder="e.g. client@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                                        placeholder="e.g. +91 98765 43210"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Primary Service</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                                    >
                                        <option value="Web Development">Premium Web Development (Next.js/React)</option>
                                        <option value="Software Development">Scalable Custom Software / API Work</option>
                                        <option value="AI Agents Deployments">Autonomous AI Agent Deployment</option>
                                        <option value="Full Architecture Consult">Combined Business Suite Consulting</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Technical Requirements Description</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                    placeholder="Describe your web application layout, backend CRM feature requirements, or target automation flow..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                                />
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    required
                                    checked={formData.agree}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, agree: e.target.checked }))}
                                    className="accent-teal-500 mt-1 rounded"
                                    id="form-agree-check"
                                />
                                <label htmlFor="form-agree-check" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                                    I confirm authorization to send this request to Vyteq Technology Solution engineers at {" "}
                                    <span className="font-bold text-blue-950">vivek@vyteq.in</span> and understand the data handling agreements.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-bold bg-blue-950 hover:bg-blue-900 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all uppercase tracking-wider text-xs"
                            >
                                Secure Dispatch Proposal Request <Send className="inline ml-1.5 h-3.5 w-3.5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
