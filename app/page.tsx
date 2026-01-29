export default function Home() {
  const sites = [
    {
      title: "Easy Weather",
      description: "Check the weather anywhere in the world",
      url: "https://easy-weather-nine.vercel.app",
      color: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Easy Life
            </h1>
            <p className="text-gray-400 text-lg">
              Your personal dashboard for all things easy
            </p>
          </div>

          {/* Sites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${site.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold mb-2">{site.title}</h2>
                  <p className="text-gray-400 text-sm">{site.description}</p>
                </div>

                {/* Arrow icon */}
                <div className="relative z-10 mt-4 flex items-center text-sm text-gray-500 group-hover:text-white transition-colors">
                  <span>Visit site</span>
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
              </a>
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm border border-white/10 border-dashed">
            <p className="text-gray-500 text-center">More sites coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
