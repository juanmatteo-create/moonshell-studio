import Section from "../components/Section";

export default function AProposPage() {
  return (
    <main className="min-h-screen pt-16">
      <Section id="apropos" title="À propos">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Texte principal */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Moonshell est un studio indépendant dédié à la création de Webtoons et Webnovels.
            L’objectif est simple : construire des univers originaux, modernes et immersifs,
            avec une identité visuelle forte et une narration émotionnelle.
          </p>

          {/* Sous-texte */}
          <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto">
            Le studio n’est pas une plateforme. C’est un espace de création, un atelier numérique
            où les idées prennent forme, où les projets se développent avec intention, et où
            chaque histoire est pensée pour être unique.
          </p>

          {/* Vision */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vision du studio</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Moonshell vise à proposer des récits visuels et narratifs qui mélangent émotion,
              esthétique et modernité. Le studio se concentre sur la qualité, la cohérence et
              l’identité artistique plutôt que sur la quantité.
            </p>
          </div>

        </div>
      </Section>
    </main>
  );
}
