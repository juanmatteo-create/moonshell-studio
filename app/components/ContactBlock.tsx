export default function ContactBlock() {
  return (
    <div className="space-y-6 text-center">

      <p className="text-sm md:text-base text-gray-300">
        Pour toute question, collaboration ou projet, vous pouvez me contacter via :
      </p>

      <div className="space-y-2 text-gray-300">
        <p>Email : <span className="text-white">moonshell.studio.contact@gmail.com</span></p>
        <p>Discord : <span className="text-white">moonshellstudio</span></p>
      </div>

      {/* Bouton qui ouvre directement Gmail / Outlook */}
      <a
        href="/contact"

        className="
          inline-block px-6 py-2 rounded-full
          bg-white text-black text-sm font-semibold
          hover:bg-gray-200 transition
        "
      >
        Envoyer un message
      </a>
    </div>
  );
}

