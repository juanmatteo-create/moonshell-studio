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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-black/40 border border-white/10 rounded-xl p-8 max-w-xl w-full relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg shadow-black/40"
          />
        )}

        <h2 className="text-3xl font-bold text-white tracking-wide">
          {project.title}
        </h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 text-sm text-gray-400 space-y-1">
          <p><span className="text-gray-200">Catégorie :</span> {project.category}</p>
          <p><span className="text-gray-200">Statut :</span> {project.status}</p>
          <p><span className="text-gray-200">Date prévue :</span> {project.date}</p>
        </div>

        <div className="mt-6 text-sm text-gray-300 space-y-2 border-t border-white/10 pt-4">

          {project.type === "webtoon" && (
            <>
              <p><span className="text-white font-semibold">Auteur original :</span> {project.author}</p>
              <p><span className="text-white font-semibold">Adaptation :</span> {project.adaptation}</p>
              <p><span className="text-white font-semibold">Genre :</span> {project.genre}</p>
            </>
          )}

          {project.type === "webnovel" && (
            <>
              <p><span className="text-white font-semibold">Auteur original :</span> {project.author}</p>
              <p><span className="text-white font-semibold">Réédité par :</span> {project.reedit}</p>
              <p><span className="text-white font-semibold">Genre :</span> {project.genre}</p>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

