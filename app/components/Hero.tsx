export default function Hero() {
  return (
    <section
      className="
        relative min-h-[85vh] flex items-center justify-center px-6
        bg-[url('/star-sky.jpg')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Motif étoiles ultra léger */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/stars.png')] bg-cover bg-center"></div>

      {/* Glow bleu subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-64 h-64 bg-[#4fa3ff]/20 blur-3xl rounded-full absolute -top-10 left-1/2 -translate-x-1/2"></div>
        <div className="w-96 h-96 bg-[#7fc4ff]/10 blur-[120px] rounded-full absolute bottom-0 right-0"></div>
      </div>

      {/* Contenu */}
      <div className="relative text-center space-y-6">

        <p className="text-xs tracking-[0.3em] uppercase text-gray-300">
          Moonshell Studio
        </p>

        {/* Titre en blanc */}
        <h1
          className="
            text-4xl md:text-6xl font-extrabold
            text-white
            leading-tight
            animate-[fadeInUp_0.8s_ease-out]
          "
        >
          Webtoon & Webnovel Creation
        </h1>

        <p className="max-w-xl mx-auto text-sm md:text-base text-gray-300">
          Création d’histoires visuelles et narratives, du concept à la publication.
          Un studio indépendant dédié aux univers originaux.
        </p>

        {/* CTA principal */}
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#services"
            className="px-6 py-2 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            Voir les services
          </a>

          <a
            href="/contact"
            className="px-6 py-2 text-sm rounded-full border border-gray-500 hover:border-gray-300 transition"
          >
            Contacter le studio
          </a>
        </div>

        {/* CTA secondaire */}
        <p className="text-gray-400 text-sm mt-2">
          ou <a href="/oeuvres" className="text-[#4fa3ff] hover:underline">découvrir nos œuvres</a>
        </p>

      </div>
    </section>
  );
}
