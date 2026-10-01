interface ProjectCardProps {
  title: string;
  image: string;
  onClick: () => void;
  className?: string;
}

export default function ProjectCard({
  title,
  image,
  onClick,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        w-full
        max-w-[220px]
        rounded-2xl overflow-hidden
        bg-black/20 backdrop-blur-sm
        border border-white/10
        shadow-lg shadow-black/40
        transition-all duration-300
        hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/60
        mx-auto
        ${className}
      `}
    >
      <div className="w-full aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-all duration-300
            hover:brightness-110
          "
        />
      </div>

      <div className="p-3 text-center">
        <h3 className="text-lg font-bold text-white tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
}
