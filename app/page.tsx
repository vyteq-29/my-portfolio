"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Laptop,
  Server,
  Cpu,
  Globe,
  Bot,
  Send,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
  Menu,
  X,
  ExternalLink,
  Copy,
  Info,
  Terminal,
} from "lucide-react";

export default function App() {
  // Mobile navigation drawer toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Custom Toast notification states
  const [toastText, setToastText] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Interactive Value Estimator states
  const [estimateService, setEstimateService] = useState("web");
  const [estimateComplexity, setEstimateComplexity] = useState("mid");
  const [estimateTimeline, setEstimateTimeline] = useState(4);

  // AI Concierge Agent simulator states
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Greetings! I am Vyteq's autonomous concierge agent. I can guide you through our core services or draft custom proposals. What solution are you planning next?",
      time: "Just now",
    },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Secure Enquiry Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
    botTrap: "", // Honeypot field for anti-spam security
    agree: false,
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [lastSubmittedTime, setLastSubmittedTime] = useState<number>(0);

  // References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chatMessagesEndRef = useRef<HTMLDivElement | null>(null);

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

  // Automatically scroll chat window to bottom
  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isBotTyping]);

  const triggerToast = (message: string) => {
    setToastText(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        triggerToast("Copied Vyteq Contact link directly to your clipboard!");
      })
      .catch(() => {
        // Fallback for secure browser environments
        const tempEl = document.createElement("textarea");
        tempEl.value = text;
        document.body.appendChild(tempEl);
        tempEl.select();
        document.execCommand("copy");
        document.body.removeChild(tempEl);
        triggerToast("Copied Vyteq Contact link directly to your clipboard!");
      });
  };

  const sendChatMessage = (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    // Append user message
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

    // Simulate sophisticated agent context reasoning
    setTimeout(() => {
      setIsBotTyping(false);
      let replyText = "";
      const query = trimmed.toLowerCase();

      if (
        query.includes("react") ||
        query.includes("web") ||
        query.includes("next")
      ) {
        replyText =
          "Web Architecting is a core discipline here. Just like our live corporate deployments for WealthBrix and Nature's Village, we build fast, fluid Next.js systems. Drop your project metrics in our estimator below or complete our secure enquiry form!";
      } else if (
        query.includes("agent") ||
        query.includes("ai") ||
        query.includes("rag")
      ) {
        replyText =
          "Autonomous RAG AI Agents represent our premium scaling solutions. We connect corporate document directories with database actions. Let's design custom agent behaviors tailored to your pipeline on our enquiry panel below!";
      } else if (
        query.includes("consultation") ||
        query.includes("schedule") ||
        query.includes("call")
      ) {
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
      teamComposition =
        "Full Dedicated Architecture Pod (5 domain specialists)";
    }

    let timelineMultiplier = 1;
    if (estimateTimeline < 4) {
      timelineMultiplier = 1.35; // Express delivery surcharge
    } else if (estimateTimeline > 10) {
      timelineMultiplier = 0.9; // Extended timeline adjustment
    }

    const baseCost = baseRate * complexityMultiplier * timelineMultiplier;
    const minEstimate = Math.round(baseCost / 1000) * 1000;
    const maxEstimate = Math.round((baseCost * 1.3) / 1000) * 1000;

    return {
      priceRange: `₹${minEstimate.toLocaleString("en-IN")} - ₹${maxEstimate.toLocaleString("en-IN")}`,
      team: teamComposition,
    };
  }, [estimateService, estimateComplexity, estimateTimeline]);

  const sanitizeInput = (text: string): string => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot Trap validation (Prevents bot spamming)
    if (formData.botTrap.trim() !== "") {
      triggerToast("Submission flagged as automated.");
      return;
    }

    // Rate limiting check (Permits 1 form submission per 60 seconds)
    const now = Date.now();
    if (now - lastSubmittedTime < 60000) {
      triggerToast("Please wait 60 seconds before submitting another request.");
      return;
    }

    setFormStatus("loading");

    // Secure sanitized form payload
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
        triggerToast("Enquiry securely dispatched!");
      } else {
        const errorBody = await response.json().catch(() => ({}));
        console.error("Contact API error", response.status, errorBody);
        setFormStatus("error");
        triggerToast("Routing mismatch. Please contact us via vivek@vyteq.in");
      }
    } catch (err) {
      console.error("Contact API network error", err);
      setFormStatus("error");
      triggerToast("Transmission offline. Please mail vivek@vyteq.in");
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
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen overflow-x-hidden antialiased">
      {}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Embedded corporate identity logo */}
            <a href="#hero" className="flex items-center space-x-3 group">
              <img
                src="./mainlogo.png"
                alt="Vyteq Technology Solutions Logo"
                className="h-15 sm:h-12 w-40 sm:w-48 object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </a>

            {/* Desktop Navigation list */}
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

            {/* Mobile Menu Button toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-blue-950 hover:text-teal-600 focus:outline-none p-2"
                aria-label="Toggle Navigation Drawer"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 transition-all duration-300">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
            >
              Services
            </a>
            <a
              href="#live-projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
            >
              Projects
            </a>
            <a
              href="#interactive-agent"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
            >
              AI Playground
            </a>
            <a
              href="#cost-estimator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-500 hover:text-blue-950 py-2 border-b border-slate-50"
            >
              Estimator
            </a>
            <a
              href="#enquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-blue-950"
            >
              Consultation
            </a>
          </div>
        )}
      </nav>

      {}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100"
      >
        {/* Dynamic network nodes background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none opacity-60"
        />

        {/* Ambient Gradient Underglows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-50/40 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copywriting */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-blue-950 text-xs sm:text-sm font-bold tracking-wide uppercase">
                <span className="flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse" />
                <span>Enterprise Software &amp; AI Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900">
                Next-Gen Web, Software &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-teal-500">
                  AI Agents
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                At <span className="font-bold text-blue-950">Vyteq</span>, we
                build elegant, high-performance web applications, scalable
                custom backends, and multi-step autonomous AI workflows to
                optimize your operations.
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
                  View Our Works{" "}
                  <ArrowRight className="inline ml-2 text-teal-500 h-4 w-4" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 text-sm">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-teal-500" />
                  <span className="font-semibold text-slate-800">
                    Production-Ready Code
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-teal-500" />
                  <span className="font-semibold text-slate-800">
                    Custom Autonomous RAG
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-teal-500" />
                  <span className="font-semibold text-slate-800">
                    Premium SLA Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Brand showcase card */}
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
                    <Terminal className="h-3 w-3 text-teal-500" />
                    SYSTEM_STATUS: ACTIVE
                  </span>
                  <span>VER: 2.0.26</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
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
                At Vyteq, we construct secure, scalable web products and custom
                AI backends that help businesses grow. We do not just construct
                generic templates—we architect high-conversion digital
                experiences engineered with security from the ground up.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Led by systems architects, we design, program, and support
                tailored solutions ranging from high-speed client acquisition
                networks to custom AI databases.
              </p>
            </div>

            {/* Statistics grid layout */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                <span className="text-4xl font-extrabold text-blue-950 block mb-1">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  SLA Compliance
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  High fidelity code with strict latency bounds.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                <span className="text-4xl font-extrabold text-blue-950 block mb-1">
                  24/7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  AI Workflows
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  Intelligent bots handling background tasks automatically.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                <span className="text-4xl font-extrabold text-blue-950 block mb-1">
                  2x
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Client Lead Speed
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  Engineered with fast UI elements.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                <span className="text-4xl font-extrabold text-blue-950 block mb-1">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  NDA Shielded
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  Strict business confidentiality on code repositories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-3">
              Our Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Expertise Engineered for Scale
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              Explore our software services and customized technology solutions
              configured for modern enterprise requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Web Development */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/70 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-950 text-2xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">
                  Web Development
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  High-conversion brand portals, modern landing pages, and
                  interactive client spaces programmed using Next.js, React, and
                  server-side layouts. Fully responsive, secure, and SEO
                  optimized.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-slate-500 border-t border-slate-100 pt-6">
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  React, Next.js, and static site optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Fluid, modern UX/UI component styling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Optimized SEO page weight &amp; load speeds
                </li>
              </ul>
            </div>

            {/* Service 2: Custom Software Development */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/70 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-950 text-2xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">
                  Software Development
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Robust customized database structures, client dashboard
                  panels, secure application APIs, and integrations built with
                  Node.js, databases, and secure servers.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-slate-500 border-t border-slate-100 pt-6">
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Custom CRM &amp; client metrics dashboards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Secure REST &amp; GraphQL API pipelines
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Advanced data encryption &amp; system monitoring
                </li>
              </ul>
            </div>

            {/* Service 3: Autonomous AI Agents */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/70 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-950 text-2xl mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">
                  AI Agents &amp; RAG Models
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Sophisticated Retrieval-Augmented Generation (RAG) databases
                  and custom language agents designed to parse internal
                  documentation, answer customer service tickets, and trigger
                  automated tasks.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-slate-500 border-t border-slate-100 pt-6">
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Dynamic vector indexing &amp; secure data ingestion
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Intelligent user intake &amp; onboarding bots
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-teal-500 mr-2 shrink-0" />{" "}
                  Automated task pipelines and API integrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="live-projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-3">
              Live Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Featured Client Success Portals
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              Explore dynamic corporate websites fully deployed and operational,
              built to absolute visual standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project Card: WealthBrix */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-950 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-video bg-gradient-to-tr from-blue-950 to-slate-900 flex items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl mx-auto border border-white/20 shadow-md">
                      <Laptop className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white tracking-wide">
                      WEALTHBRIX
                    </h3>
                    <p className="text-xs text-teal-300 font-bold tracking-widest uppercase">
                      Wealth &amp; Investment Advisory Platform
                    </p>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">
                      Financial Technology
                    </span>
                    <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">
                      Dynamic Calculations
                    </span>
                    <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">
                      Modern Layout
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    WealthBrix is a financial advisory and capital consulting
                    platform. Vyteq built their complete web presence with clean
                    page rendering speeds, responsive screens, and client
                    conversion assets.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-slate-100 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs text-teal-600 font-bold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse" />
                  Live System
                </span>
                <a
                  href="https://www.wealthbrix.in/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 transition-all inline-flex items-center"
                >
                  Launch Site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Project Card: Nature's Village */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-950 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-video bg-gradient-to-tr from-teal-950 to-slate-900 flex items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl mx-auto border border-white/20 shadow-md">
                      <Cpu className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white tracking-wide">
                      NATURES VILLAGE
                    </h3>
                    <p className="text-xs text-teal-300 font-bold tracking-widest uppercase">
                      Jim Corbett Resort Project by Amaatra
                    </p>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">
                      Luxury Hospitality
                    </span>
                    <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">
                      Media Showcase
                    </span>
                    <span className="text-[10px] font-bold bg-white border border-slate-200 text-blue-950 px-2.5 py-1 rounded-md">
                      Fast Loading Speeds
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Nature's Village by Amaatra is an eco-resort property. Vyteq
                    developed a custom web presentation system featuring
                    lightning-fast image delivery pipelines and fluid navigation
                    components.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-slate-100 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs text-teal-600 font-bold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse" />
                  Live System
                </span>
                <a
                  href="https://naturesvillage.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 transition-all inline-flex items-center"
                >
                  Launch Site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
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
              Test an isolated, mock model deployment of our custom customer
              onboarding agent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Interactive Chat Console */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl flex flex-col shadow-xl overflow-hidden min-h-[480px]">
              {/* Header bar */}
              <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-blue-800 flex items-center justify-center text-white">
                      <Bot className="h-5 w-5" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-none">
                      Vyteq AI Assistant
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      Autonomous Concierge Sandbox
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-white/10 px-2.5 py-1 rounded text-teal-400">
                  Online
                </span>
              </div>

              {/* Chat Message List container */}
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
                      className={`p-4 rounded-2xl max-w-[85%] shadow-sm ${
                        msg.sender === "user"
                          ? "bg-blue-950 text-white rounded-tr-none text-right"
                          : "bg-slate-100 border border-slate-200/60 rounded-tl-none text-left"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </p>
                      <span
                        className={`text-[9px] mt-2 block font-medium ${msg.sender === "user" ? "text-slate-300" : "text-slate-400"}`}
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

              {/* Suggestions row */}
              <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex flex-wrap gap-2">
                <button
                  onClick={() =>
                    sendChatMessage("I want a premium web application")
                  }
                  className="text-xs bg-white hover:bg-teal-50 hover:text-blue-950 hover:border-teal-500 border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-all text-slate-700"
                >
                  React Web App
                </button>
                <button
                  onClick={() =>
                    sendChatMessage("Develop automated RAG AI Agents")
                  }
                  className="text-xs bg-white hover:bg-teal-50 hover:text-blue-950 hover:border-teal-500 border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-all text-slate-700"
                >
                  AI Agent Deploy
                </button>
                <button
                  onClick={() =>
                    sendChatMessage("Schedule a systems consultation")
                  }
                  className="text-xs bg-white hover:bg-teal-50 hover:text-blue-950 hover:border-teal-500 border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-all text-slate-700"
                >
                  Consultation
                </button>
              </div>

              {/* Input row */}
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

            {/* AI Agent Features list */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-6">
                <h4 className="text-lg font-bold text-slate-900 flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-3 animate-ping" />
                  RAG Systems Highlights
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our custom integrations process documentation securely and
                  connect language models with database endpoints, allowing
                  automated tools to respond with accurate corporate data.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-slate-100 text-teal-600 text-xs mt-1 border border-slate-200/50 shrink-0">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">
                        Dynamic Context Indexing
                      </h5>
                      <p className="text-xs text-slate-400">
                        Parse internal documentation, manuals, and policies
                        securely into local databases.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-slate-100 text-teal-600 text-xs mt-1 border border-slate-200/50 shrink-0">
                      <Server className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">
                        Function Calling Hooks
                      </h5>
                      <p className="text-xs text-slate-400">
                        Empower agent workflows to fetch databases, compile
                        reports, or update webhooks securely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-slate-100 text-teal-600 text-xs mt-1 border border-slate-200/50 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">
                        Enterprise Context Guardrails
                      </h5>
                      <p className="text-xs text-slate-400">
                        Strict rules isolate agent scopes to avoid unpredictable
                        or unapproved behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Action Trigger banner */}
              <div className="p-8 rounded-3xl bg-gradient-to-tr from-blue-950 to-slate-900 border border-slate-200 text-white flex items-center justify-between shadow-lg">
                <div>
                  <h4 className="text-sm font-bold tracking-wide uppercase">
                    Deploy Custom Agent?
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Let's design your enterprise AI roadmap.
                  </p>
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

      {}
      <section id="cost-estimator" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Form Controls Column */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] font-mono uppercase bg-slate-200 text-blue-950 px-3 py-1.5 rounded border border-slate-300/60 tracking-wider font-bold">
                  Dynamic Service Planner
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Vyteq Value Metric Calculator
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Select your core software requirement, configure project scope
                  parameters, and instantly view estimated engineering timeline
                  requirements and ballpark pricing.
                </p>

                <div className="space-y-5">
                  {/* Service selection dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Service Core Selection
                    </label>
                    <select
                      value={estimateService}
                      onChange={(e) => setEstimateService(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 text-slate-800"
                    >
                      <option value="web">
                        Web Development (React / Next.js)
                      </option>
                      <option value="software">
                        Custom Software &amp; Platform APIs
                      </option>
                      <option value="ai">
                        Autonomous RAG AI Agent Integration
                      </option>
                      <option value="all">
                        Enterprise Suite (All Services Combined)
                      </option>
                    </select>
                  </div>

                  {/* Complexity parameter selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Scale &amp; Complexity Profile
                    </label>
                    <select
                      value={estimateComplexity}
                      onChange={(e) => setEstimateComplexity(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 text-slate-800"
                    >
                      <option value="starter">MVP Prototype Scale</option>
                      <option value="mid">Standard Commercial Suite</option>
                      <option value="enterprise">
                        Advanced Scaled Architecture
                      </option>
                    </select>
                  </div>

                  {/* Target Delivery Timeline slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Target Timeline
                      </label>
                      <span className="text-xs font-extrabold text-teal-600">
                        {estimateTimeline} Weeks
                      </span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="16"
                      value={estimateTimeline}
                      onChange={(e) =>
                        setEstimateTimeline(parseInt(e.target.value))
                      }
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Calculation Output Card Column */}
              <div className="lg:col-span-6 p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between h-full space-y-8 relative overflow-hidden shadow-md">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-slate-50 blur-xl" />

                <div className="space-y-4">
                  <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                    Vyteq Allocation Estimate
                  </span>

                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-[10px] text-slate-400 uppercase block font-bold">
                      Estimated Cost Range
                    </span>
                    <h4 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight mt-1">
                      {estimationResult.priceRange}
                    </h4>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-bold">
                      Engineering Team Allocation
                    </span>
                    <p className="text-sm text-slate-800 mt-1 font-semibold">
                      {estimationResult.team}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-2">
                  <p className="text-[11px] text-slate-500 flex items-start gap-1">
                    <Info className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                    Note: Calculated estimate displays typical starting scales.
                    Formulate a final project quote by completing our secure
                    enquiry check sheet below.
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

      {}
      <section
        id="enquiry"
        className="py-24 bg-slate-50 relative border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Information Column */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block">
                  Secure Communication Desk
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
                  Start Your Modern Business Infrastructure
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Have an active digital roadmap, cloud requirement, or
                  automated client workflow? Fill in your details. We will
                  process your scope and respond within 12 business hours.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-950 shadow-sm shrink-0">
                      <Server className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block font-bold">
                        Direct Corporate Mailbox
                      </span>
                      <button
                        onClick={() => copyToClipboard("vivek@vyteq.in")}
                        className="text-sm font-semibold text-blue-950 hover:text-teal-600 transition-colors text-left flex items-center gap-1 focus:outline-none"
                      >
                        vivek@vyteq.in{" "}
                        <Copy className="h-3 w-3 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-950 shadow-sm shrink-0">
                      <Clock className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block font-bold">
                        SLA Response Window
                      </span>
                      <span className="text-sm font-semibold text-blue-950">
                        Within 12 Business Hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge panel */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md">
                <p className="text-xs text-slate-500 flex items-start gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>NDA Guaranteed:</strong> All communication
                    parameters, requirements docs, and architectural scopes are
                    handled securely under strict corporate NDA protocols.
                  </span>
                </p>
              </div>
            </div>

            {/* Secure Interactive Form Container */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              {/* Form Submission Loader & Success overlays */}
              {formStatus === "loading" && (
                <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-blue-950 animate-spin mb-4" />
                  <h4 className="text-lg font-bold text-slate-900">
                    Securing Transmission Channel...
                  </h4>
                  <p className="text-xs text-slate-400 mt-2">
                    Connecting with Vyteq Consultation desk
                  </p>
                </div>
              )}

              {formStatus === "success" && (
                <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 text-4xl flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    Enquiry Received!
                  </h4>
                  <p className="text-sm text-slate-500 mt-3 max-w-sm mx-auto">
                    Your specifications have been sent to{" "}
                    <strong className="text-blue-950">vivek@vyteq.in</strong>.
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
                  <h4 className="text-lg font-bold text-slate-900">
                    Routing Interruption
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
                    We encountered an issue submitting your request directly.
                    Please send your enquiry parameters to{" "}
                    <strong className="text-blue-950">vivek@vyteq.in</strong>.
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
                {/* Honeypot Anti-Spam (Hidden) */}
                <input
                  type="text"
                  value={formData.botTrap}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      botTrap: e.target.value,
                    }))
                  }
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Full Name / Lead Identity
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="e.g. Vivek Kumar"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="e.g. client@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Primary Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          service: e.target.value,
                        }))
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                    >
                      <option value="Web Development">
                        Premium Web Development (Next.js/React)
                      </option>
                      <option value="Software Development">
                        Scalable Custom Software / API Work
                      </option>
                      <option value="AI Agents Deployments">
                        Autonomous AI Agent Deployment
                      </option>
                      <option value="Full Architecture Consult">
                        Combined Business Suite Consulting
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Technical Requirements Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Describe your web application layout, backend CRM feature requirements, or target automation flow..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agree}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        agree: e.target.checked,
                      }))
                    }
                    className="accent-teal-500 mt-1 rounded"
                    id="form-agree-check"
                  />
                  <label
                    htmlFor="form-agree-check"
                    className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none"
                  >
                    I confirm authorization to send this request to Vyteq
                    Technology Solution engineers at{" "}
                    <span className="font-bold text-blue-950">
                      vivek@vyteq.in
                    </span>{" "}
                    and understand the data handling agreements.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold bg-blue-950 hover:bg-blue-900 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all uppercase tracking-wider text-xs"
                >
                  Secure Dispatch Proposal Request{" "}
                  <Send className="inline ml-1.5 h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-900 text-slate-400 py-16 relative z-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
            {/* Logo details column */}
            <div className="md:col-span-4 space-y-4">
              <img
                src="./mainlogo.png"
                alt="Vyteq Technology Solutions"
                className="h-10 w-auto object-contain mb-3 bg-white p-2 rounded-lg"
              />
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Vyteq is a custom development agency engineering
                high-performance responsive web environments, reliable backend
                business portals, and next-generation AI agents.
              </p>
            </div>

            {/* Links columns */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Solutions &amp; Focus
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-400 transition-colors"
                  >
                    React &amp; Next.js Platforms
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Custom CRM &amp; ERP Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Retrieval Augmented RAG
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Secure Backend Microservices
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Client Deployments
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="https://www.wealthbrix.in/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    WealthBrix Portal
                  </a>
                </li>
                <li>
                  <a
                    href="https://naturesvillage.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Amaatra Natures Village
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Direct Line
              </h4>
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

          {/* Toast Notification Container */}
          <div
            className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-slate-900 border border-teal-500/40 px-6 py-4 rounded-xl shadow-xl flex items-center space-x-3 text-xs text-white max-w-sm ${
              isToastVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Info className="h-5 w-5 text-teal-400 shrink-0" />
            <span>{toastText}</span>
          </div>

          {/* Copyright row */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; 2026 Vyteq Technology Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#about" className="hover:text-teal-400">
                Code Standards
              </a>
              <a href="#services" className="hover:text-teal-400">
                Privacy &amp; NDAs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
