export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="text-center space-y-3">

        {/* Nom du studio */}
        <h3
          className="
            text-lg font-semibold
            bg-gradient-to-r from-[#4fa3ff] to-[#7fc4ff]
            text-transparent bg-clip-text
          "
        >
          MOONSHELL Studio
        </h3>

        {/* Texte */}
        <p className="text-sm text-gray-400">
          Créations originales, webtoons, webnovels et univers narratifs.
        </p>

        {/* Ligne décorative */}
        <div className="w-20 h-[2px] bg-[#4fa3ff] mx-auto opacity-60"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © 2024 Moonshell — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
