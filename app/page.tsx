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
      description: "Beautiful weather forecasts for anywhere in the world",
      url: "https://easy-weather-app.vercel.app",
      gradient: "from-blue-500/20 to-purple-600/20",
      icon: "🌤️",
      status: "live",
    },
  ];

  // Upcoming app ideas
  const upcomingApps = [
    {
      title: "Easy Notes",
      description: "Simple, beautiful note-taking",
      icon: "📝",
      gradient: "from-green-500/20 to-emerald-600/20",
    },
    {
      title: "Easy Tasks",
      description: "Minimalist to-do lists",
      icon: "✓",
      gradient: "from-orange-500/20 to-red-600/20",
    },
    {
      title: "Easy Timer",
      description: "Focus timer and stopwatch",
      icon: "⏱️",
      gradient: "from-purple-500/20 to-pink-600/20",
    },
    {
      title: "Easy Links",
      description: "Bookmark manager made simple",
      icon: "🔗",
      gradient: "from-cyan-500/20 to-blue-600/20",
    },
  ];

  const hours = time.getHours();
  const isNight = hours < 6 || hours >= 19;

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0d0d12] to-[#0a0a0c] transition-all duration-1000" />

      {/* Subtle blue tint during day */}
      <div className={`absolute inset-0 bg-gradient-to-b from-blue-800/20 via-blue-900/10 to-blue-950/5 transition-opacity duration-1000 ${!isNight ? "opacity-100" : "opacity-0"}`} />

      {/* Subtle top glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-3xl transition-opacity duration-1000 ${isNight ? "opacity-100" : "opacity-0"}`} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <h1 className="text-6xl font-light text-white tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Easy Life
            </h1>
          </div>
          <p className="text-white/40 text-lg mb-8">A collection of simple, beautiful tools</p>

          {/* Time - subtle and minimal */}
          <div className="flex items-center justify-center gap-3 text-white/30 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
              <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <span>·</span>
            <span>{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Apps Section */}
        <div className="mb-20">
          <h2 className="text-white/40 text-xs uppercase tracking-wider mb-6 text-center">Available Now</h2>
          <div className="flex justify-center">
            {apps.map((app) => (
              <a
                key={app.url}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 border border-white/10 transition-all duration-700 hover:border-white/20 max-w-md w-full"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-6 transition-transform duration-500 group-hover:scale-110">{app.icon}</div>
                  <h3 className="text-3xl font-light text-white mb-3 tracking-tight">{app.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{app.description}</p>

                  {/* Subtle indicator */}
                  <div className="flex items-center justify-center text-white/30 group-hover:text-white/60 transition-colors duration-500">
                    <span className="text-xs">Launch app</span>
                    <svg
                      className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-500"
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
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-16">
          <h2 className="text-white/40 text-xs uppercase tracking-wider mb-6 text-center">Coming Soon</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {upcomingApps.map((app) => (
              <div
                key={app.title}
                className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-2xl p-6 border border-white/5 cursor-not-allowed group"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-2xl`}
                />

                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3 opacity-40 group-hover:opacity-60 transition-opacity">{app.icon}</div>
                  <h3 className="text-white/30 text-sm font-light mb-1 group-hover:text-white/50 transition-colors">{app.title}</h3>
                  <p className="text-white/20 text-xs group-hover:text-white/30 transition-colors">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-white/20">
          Making life easier, one app at a time
        </footer>
      </div>
    </div>
  );
}

// Floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.15 + 0.05,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-200 to-purple-300 animate-float-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
