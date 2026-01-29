"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Available apps
  const apps = [
    {
      title: "Easy Weather",
      description: "Beautiful weather forecasts",
      url: "https://easy-weather-app.vercel.app",
      icon: "🌤️",
      status: "live",
    },
  ];

  // Upcoming app ideas
  const upcomingApps = [
    {
      title: "Easy Notes",
      description: "Simple note-taking",
      icon: "📝",
    },
    {
      title: "Easy Tasks",
      description: "Minimalist to-dos",
      icon: "✓",
    },
    {
      title: "Easy Timer",
      description: "Focus & stopwatch",
      icon: "⏱️",
    },
    {
      title: "Easy Links",
      description: "Bookmark manager",
      icon: "🔗",
    },
    {
      title: "Easy Calc",
      description: "Beautiful calculator",
      icon: "🔢",
    },
    {
      title: "Easy Convert",
      description: "Unit converter",
      icon: "🔄",
    },
  ];

  const hours = time.getHours();
  const isNight = hours < 6 || hours >= 19;

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0d0d12] to-[#0a0a0c] transition-all duration-1000" />

      {/* Subtle blue tint during day */}
      <div className={`absolute inset-0 bg-gradient-to-b from-blue-800/20 via-blue-900/10 to-blue-950/5 transition-opacity duration-1000 ${!isNight ? "opacity-100" : "opacity-0"}`} />

      {/* Subtle top glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent rounded-full blur-3xl transition-opacity duration-1000 ${isNight ? "opacity-100" : "opacity-0"}`} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="w-full max-w-7xl relative z-10 flex flex-col">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Easy Life
            </h1>
          </div>
          <p className="text-white/30 text-base sm:text-lg font-light mb-6">Simple, beautiful tools for everyday life</p>

          {/* Time - more refined */}
          <div className="flex items-center justify-center gap-2 text-white/20 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
              </svg>
              <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <span>·</span>
            <span>{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="flex-1 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto">
            {/* Live Apps */}
            {apps.map((app) => (
              <a
                key={app.url}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/[0.08] transition-all duration-700 hover:border-white/20 hover:scale-[1.02] bg-white/[0.02] hover:bg-white/[0.04]"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/[0.03] group-hover:to-purple-500/[0.03] transition-all duration-700" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-5">
                    <div className="text-6xl sm:text-7xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">{app.icon}</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2 tracking-tight">{app.title}</h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">{app.description}</p>

                  {/* Launch indicator */}
                  <div className="mt-5 flex items-center text-white/20 group-hover:text-white/50 transition-colors duration-500">
                    <span className="text-[11px] uppercase tracking-widest font-medium">Launch</span>
                    <svg
                      className="ml-1.5 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Coming Soon Apps */}
            {upcomingApps.map((app) => (
              <div
                key={app.title}
                className="group relative backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/[0.04] cursor-not-allowed transition-all duration-700 hover:border-white/[0.08] bg-white/[0.01]"
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-5">
                    <div className="text-6xl sm:text-7xl opacity-20 group-hover:opacity-30 transition-all duration-700">{app.icon}</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white/20 mb-2 tracking-tight group-hover:text-white/30 transition-colors duration-700">{app.title}</h3>
                  <p className="text-white/15 text-xs sm:text-sm leading-relaxed font-light group-hover:text-white/20 transition-colors duration-700">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-[11px] text-white/15 tracking-wider uppercase font-light mt-auto pt-8">
          Making life easier, one app at a time
        </footer>
      </div>
    </div>
  );
}

// Floating particles - subtle glowing orbs
function FloatingParticles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.08 + 0.02,
    duration: Math.random() * 30 + 25,
    delay: Math.random() * 15,
    blur: Math.random() * 8 + 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/80 animate-float-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: `blur(${p.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
