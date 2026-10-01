export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen px-6 py-20 relative
        bg-black text-white
      "
    >
      {/* Motif étoiles */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/stars.png')] bg-cover bg-center"></div>

      {/* Glow bleu */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-64 h-64 bg-[#4fa3ff]/20 blur-3xl rounded-full absolute top-10 left-1/2 -translate-x-1/2"></div>
        <div className="w-96 h-96 bg-[#7fc4ff]/10 blur-[120px] rounded-full absolute bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center space-y-10">

        <h1 className="text-3xl md:text-4xl font-bold">
          Contacter Moonshell Studio
        </h1>

        <p className="text-gray-300 text-sm md:text-base">
          Choisissez le moyen de contact qui vous convient le mieux.
        </p>

        {/* Icônes + liens */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Email */}
          <a
            href="mailto:moonshell.studio.contact@gmail.com"
            className="
              flex items-center justify-center gap-3
              px-6 py-3 rounded-lg bg-white text-black font-semibold
              hover:bg-gray-200 transition
            "
          >
            {/* Icône Email */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M4 4h16v16H4z" fill="#000000"/>
              <path d="M4 4l8 8 8-8" stroke="#4fa3ff" strokeWidth="2" fill="none"/>
            </svg>
            Email
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/moonshellstudio/"
            target="_blank"
            className="
              flex items-center justify-center gap-3
              px-6 py-3 rounded-lg border border-gray-500 text-gray-300
              hover:border-gray-300 transition
            "
          >
            {/* Icône Instagram couleur */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#feda75"/>
                  <stop offset="25%" stopColor="#fa7e1e"/>
                  <stop offset="50%" stopColor="#d62976"/>
                  <stop offset="75%" stopColor="#962fbf"/>
                  <stop offset="100%" stopColor="#4f5bd5"/>
                </linearGradient>
              </defs>
              <path fill="url(#ig)" d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm5.2-2.7a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3z"/>
            </svg>
            Instagram
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@moonshellstudio"
            target="_blank"
            className="
              flex items-center justify-center gap-3
              px-6 py-3 rounded-lg border border-gray-500 text-gray-300
              hover:border-gray-300 transition
            "
          >
            {/* Icône TikTok couleur */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#69C9D0" d="M12 2h3c.1 1.4.8 2.7 2 3.6 1 .8 2.2 1.2 3.5 1.3v3c-1.8-.1-3.5-.7-5-1.7v7.4c0 3.6-2.9 6.4-6.5 6.4S3.5 19.2 3.5 15.6 6.4 9.2 10 9.2v3c-1.9 0-3.5 1.6-3.5 3.4s1.6 3.4 3.5 3.4 3.5-1.6 3.5-3.4V2z"/>
              <path fill="#EE1D52" d="M15 5c1.2.9 2.7 1.5 4.5 1.6v2.5c-1.8-.1-3.5-.7-5-1.7V5z"/>
            </svg>
            TikTok
          </a>

          {/* X */}
          <a
            href="https://x.com/moonshellstudio"
            target="_blank"
            className="
              flex items-center justify-center gap-3
              px-6 py-3 rounded-lg border border-gray-500 text-gray-300
              hover:border-gray-300 transition
            "
          >
            {/* Icône X blanche */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M4 3l7 9-7 9h3l7-9-7-9H4zm10 0l7 9-7 9h3l7-9-7-9h-3z"/>
            </svg>
            X (Twitter)
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/SNTmaDt8y"
            target="_blank"
            className="
              flex items-center justify-center gap-3
              px-6 py-3 rounded-lg border border-gray-500 text-gray-300
              hover:border-gray-300 transition
            "
          >
            {/* Icône Discord violet */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5865F2">
              <path d="M20 4c-1.7-.7-3.5-1-5.3-1l-.3.6c1.8.4 3.3 1 4.7 2.1-2-.9-4-1.3-6.1-1.3s-4.1.4-6.1 1.3c1.4-1.1 2.9-1.7 4.7-2.1L9.3 3C7.5 3 5.7 3.3 4 4 2.7 6.3 2 8.7 2 11c0 4.7 3.3 8.7 8 10 0-.7 0-1.4.3-2.1-2.1-.4-3.9-1.4-5.3-3 1.7 1 3.7 1.6 5.8 1.6s4.1-.6 5.8-1.6c-1.4 1.6-3.2 2.6-5.3 3 .3.7.3 1.4.3 2.1 4.7-1.3 8-5.3 8-10 0-2.3-.7-4.7-2-7z"/>
            </svg>
            Discord
          </a>

        </div>
      </div>
    </main>
  );
}
