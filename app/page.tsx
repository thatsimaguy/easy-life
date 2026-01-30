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
    },
  ];

  const upcomingApps = [
    { title: "Easy Notes", icon: "📝" },
    { title: "Easy Tasks", icon: "✓" },
    { title: "Easy Timer", icon: "⏱️" },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center p-6 relative">
      {/* Home button - top left */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center justify-center w-10 h-10 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
      >
        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </a>

      {/* Main Content */}
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-3 tracking-tight">
          Easy Life
        </h1>
        <p className="text-white/40 text-base mb-10">
          Simple tools for everyday life
        </p>

        {/* App Card */}
        {apps.map((app) => (
          <a
            key={app.url}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group"
          >
            <div className="relative flex items-center gap-4 p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl transition-all duration-300">
              <span className="text-3xl">{app.icon}</span>
              <div className="flex-1">
                <h3 className="text-white font-medium">{app.title}</h3>
                <p className="text-white/40 text-sm">{app.description}</p>
              </div>
              <svg className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}

        {/* Quick Access Buttons */}
        <div className="mt-6 flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] rounded-full text-white/60 hover:text-white/80 text-sm transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Your Location
          </button>
          
          {upcomingApps.slice(0, 2).map((app) => (
            <button
              key={app.title}
              className="px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] rounded-full text-white/40 hover:text-white/60 text-sm transition-all duration-300"
            >
              {app.title}
            </button>
          ))}
          
          <button className="flex items-center justify-center w-10 h-10 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] rounded-full text-white/40 hover:text-white/60 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Time */}
        <div className="mt-10 flex items-center gap-2 text-white/30 text-xs">
          <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          <span>·</span>
          <span>{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
}
