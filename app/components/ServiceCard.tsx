export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        p-6 rounded-xl border border-white/10
        bg-white/5 backdrop-blur-sm
        text-center space-y-3
        transition-all duration-300
        hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]
      "
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

