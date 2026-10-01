type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="px-6 py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
  {title}
</h2>
        {children}
      </div>
    </section>
  );
}