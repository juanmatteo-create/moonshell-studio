"use client";

import { useState } from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projects from "../data/projects.json";

interface Project {
  type: string;
  title: string;
  image: string;
  description: string;
  category: string;
  status: string;
  date: string;
  author: string;
  adaptation?: string;
  genre?: string;
  reedit?: string;
}

export default function ProjetsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen pt-16">
      <Section id="projets" title="Projets">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-sm md:text-base text-gray-300">
            Découvrez les projets en cours ou terminés du studio Moonshell.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {projects.map((p: Project, i: number) => (
            <ProjectCard
              key={i}
              title={p.title}
              image={p.image}
              onClick={() => setSelectedProject(p)}
              className="animate-fadeUp"
            />
          ))}
        </div>
      </Section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Section id="oeuvres" title="Œuvres">
        <div
          className="
            max-w-3xl mx-auto text-center space-y-6
            p-12 rounded-xl
            bg-black/30 backdrop-blur-xl
            border border-white/10
            shadow-lg shadow-black/20
          "
        >
          <p className="text-base text-gray-300">
            Accédez à toutes les œuvres publiées du studio Moonshell.
          </p>

          <a
            href="/platform"
            className="
              inline-block px-8 py-3 rounded-lg
              bg-[#4fa3ff] text-black font-semibold
              hover:bg-[#6fb7ff] transition
            "
          >
            Lire les œuvres
          </a>
        </div>
      </Section>
    </main>
  );
}
