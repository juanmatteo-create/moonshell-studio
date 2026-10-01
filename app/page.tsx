import Hero from './components/Hero';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import ContactBlock from './components/ContactBlock';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Section id="studio" title="Moonshell Studio">
  <div className="max-w-3xl mx-auto space-y-6 text-center">

    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
      Moonshell est un studio indépendant dédié à la création de Webtoons et Webnovels.
      Nous développons des univers originaux, des récits émotionnels et des expériences
      visuelles modernes. Notre approche repose sur la simplicité, la créativité et
      l’identité visuelle.
    </p>

    <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto">
      Nous ne sommes pas une plateforme. Moonshell est un espace de création,
      un atelier numérique où les idées prennent forme et où les projets se construisent
      avec intention et style.
    </p>

  </div>
</Section>

      <Section id="services" title="Services">
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard title="Webtoon Production" description="Storyboard, dessin, mise en page verticale, préparation pour plateformes." />
          <ServiceCard title="Webnovel" description="Plan, écriture, correction, mise en forme pour publication numérique." />
          <ServiceCard title="Studio Workspace" description="Organisation de projets, pipeline créatif, outils et assets partagés." />
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <ContactBlock />
      </Section>
    </main>
  );
}