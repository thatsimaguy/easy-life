"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
      setSearchQuery("");
    }
  };

  const hours = time.getHours();
  const greeting = hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0d0d12] to-[#0a0a0c]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/10 via-transparent to-purple-950/10" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-3xl" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="w-full max-w-6xl relative z-10">
        {/* Header with time */}
        <div className="text-center mb-8">
          <div className="text-white/40 text-sm mb-2">{time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
          <h1 className="text-7xl font-light text-white mb-2 tracking-tight">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </h1>
          <p className="text-white/50 text-xl">{greeting}</p>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Google or type a URL..."
              className="w-full px-6 py-5 bg-white/[0.05] text-white text-lg placeholder-white/30 border border-white/10 rounded-2xl focus:outline-none focus:border-white/20 transition-all pr-14"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Main Sites Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${site.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{site.icon}</div>
                  <h2 className="text-2xl font-light text-white mb-2 tracking-tight">{site.title}</h2>
                  <p className="text-white/50 text-sm mb-6">{site.description}</p>

                  {/* Arrow */}
                  <div className="flex items-center text-white/40 group-hover:text-white/80 transition-colors">
                    <span className="text-sm">Open app</span>
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-3xl p-8 border border-white/5 border-dashed">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-4 opacity-30">✨</div>
                <p className="text-white/30 text-sm text-center">More projects<br />coming soon</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-3xl p-8 border border-white/5 border-dashed">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-4 opacity-30">✨</div>
                <p className="text-white/30 text-sm text-center">More projects<br />coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-white/20">
          Easy Life · Your personal dashboard
        </footer>
      </div>
    </div>
  );
}

// Floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.2 + 0.05,
    duration: Math.random() * 20 + 15,
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
