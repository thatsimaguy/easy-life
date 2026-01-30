"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    {
      title: "Easy Weather",
      description: "Beautiful weather forecasts",
      url: "https://easy-weather-app.vercel.app",
      icon: "🌤️",
      status: "live",
    },
  ];

  const upcomingApps = [
    { title: "Easy Notes", description: "Simple note-taking", icon: "📝" },
    { title: "Easy Tasks", description: "Minimalist to-dos", icon: "✓" },
    { title: "Easy Timer", description: "Focus & stopwatch", icon: "⏱️" },
    { title: "Easy Links", description: "Bookmark manager", icon: "🔗" },
    { title: "Easy Calc", description: "Beautiful calculator", icon: "🔢" },
    { title: "Easy Convert", description: "Unit converter", icon: "🔄" },
  ];

  const hours = time.getHours();
  const isNight = hours < 6 || hours >= 19;

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0d0d12] to-[#0a0a0c]" />
        <div className={`absolute inset-0 bg-gradient-to-b from-blue-800/20 via-blue-900/10 to-blue-950/5 transition-opacity duration-1000 ${!isNight ? "opacity-100" : "opacity-0"}`} />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Home button */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 group"
      >
        <div className="relative flex items-center gap-2 px-4 py-3 bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
          <svg className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-sm text-white/60 group-hover:text-white/80 hidden sm:block">Home</span>
        </div>
      </a>

      {/* Main content */}
      <div className="w-full max-w-7xl relative z-10 flex flex-col animate-fade-in">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-white tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Easy Life
              </span>
            </h1>
          </div>
          <p className="text-white/40 text-lg sm:text-xl font-light mb-8">Simple, beautiful tools for everyday life</p>

          {/* Time display */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full">
            <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
            </svg>
            <span className="text-white/50 text-sm font-medium tabular-nums">
              {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white/40 text-sm">
              {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="flex-1 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {/* Live Apps */}
            {apps.map((app, idx) => (
              <a
                key={app.url}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl p-6 sm:p-7 border border-white/[0.08] transition-all duration-500 hover:border-white/20 hover:scale-[1.02] bg-white/[0.02] hover:bg-white/[0.05] overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/[0.05] group-hover:via-purple-500/[0.03] group-hover:to-pink-500/[0.05] transition-all duration-700" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full duration-1000" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-5xl sm:text-6xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 inline-block">
                      {app.icon}
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
                      Live
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2 tracking-tight">{app.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{app.description}</p>

                  <div className="mt-5 flex items-center text-white/30 group-hover:text-white/60 transition-colors duration-300">
                    <span className="text-[11px] uppercase tracking-widest font-medium">Launch</span>
                    <svg className="ml-1.5 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Coming Soon Apps */}
            {upcomingApps.map((app, idx) => (
              <div
                key={app.title}
                className="group relative rounded-3xl p-6 sm:p-7 border border-white/[0.04] cursor-not-allowed transition-all duration-500 hover:border-white/[0.08] bg-white/[0.01] overflow-hidden"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="mb-5">
                    <span className="text-5xl sm:text-6xl opacity-20 group-hover:opacity-40 transition-all duration-500 inline-block">
                      {app.icon}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white/20 mb-2 tracking-tight group-hover:text-white/40 transition-colors duration-500">
                    {app.title}
                  </h3>
                  <p className="text-white/15 text-sm leading-relaxed font-light group-hover:text-white/25 transition-colors duration-500">
                    {app.description}
                  </p>
                  <div className="mt-5">
                    <span className="text-[10px] uppercase tracking-widest text-white/10 group-hover:text-white/20 transition-colors duration-500">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-auto pt-8">
          <p className="text-[11px] text-white/20 tracking-wider uppercase font-light">
            Making life easier, one app at a time
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -15px); }
          50% { transform: translate(-5px, 10px); }
          75% { transform: translate(15px, 5px); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 5s;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

function FloatingParticles() {
  const sizes = [6, 10, 14, 20, 30, 45, 8, 16, 25, 12, 18, 35, 10, 22];
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: (i * 11 + 5) % 95,
    y: (i * 13 + 10) % 90,
    size: sizes[i],
    opacity: 0.08 + (i % 4) * 0.02,
    duration: 12 + (i % 5) * 3,
    delay: i * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 70%)',
          }}
        />
      ))}
    </div>
  );
}
