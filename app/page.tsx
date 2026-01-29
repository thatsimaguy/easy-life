"use client";

import { useState } from "react";

export default function Home() {
  const sites = [
    {
      title: "Easy Weather",
      description: "Check the weather anywhere in the world",
      url: "https://easy-weather-app.vercel.app",
      gradient: "from-blue-500/20 to-purple-600/20",
      icon: "🌤️",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0d0d12] to-[#0a0a0c]" />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-3xl" />

      {/* Stars */}
      <StarField />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light text-white mb-3 tracking-tight">Easy Life</h1>
          <p className="text-white/40 text-lg">Your personal dashboard</p>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sites.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
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
                  <span className="text-sm">Visit site</span>
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

          {/* Coming soon placeholder */}
          <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-3xl p-8 border border-white/5 border-dashed">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-4xl mb-4 opacity-30">✨</div>
              <p className="text-white/30 text-sm text-center">More sites<br />coming soon...</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-white/20 mt-12">
          A collection of useful tools
        </footer>
      </div>
    </div>
  );
}

// Star field background
function StarField() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
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
