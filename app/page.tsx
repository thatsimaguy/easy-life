"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sites = [
    {
      title: "Easy Weather",
      description: "Check the weather anywhere in the world",
      url: "https://easy-weather-app.vercel.app",
      gradient: "from-blue-500/20 to-purple-600/20",
      icon: "🌤️",
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
      <div className="w-full max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light text-white mb-4 tracking-tight">Easy Life</h1>
          <p className="text-white/40 text-lg mb-8">Your projects in one place</p>

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

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {sites.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-700 hover:border-white/20"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${site.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-7xl mb-6 transition-transform duration-500 group-hover:scale-110">{site.icon}</div>
                <h2 className="text-3xl font-light text-white mb-3 tracking-tight">{site.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed">{site.description}</p>

                {/* Subtle indicator */}
                <div className="mt-6 flex items-center text-white/30 group-hover:text-white/60 transition-colors duration-500">
                  <span className="text-xs">View project</span>
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

          {/* Coming soon placeholders */}
          <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-3xl p-8 border border-white/5 border-dashed">
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="text-5xl mb-4 opacity-20">✨</div>
              <p className="text-white/20 text-sm">Coming soon</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-3xl p-8 border border-white/5 border-dashed">
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="text-5xl mb-4 opacity-20">✨</div>
              <p className="text-white/20 text-sm">Coming soon</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-white/20">
          Built with Next.js
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
