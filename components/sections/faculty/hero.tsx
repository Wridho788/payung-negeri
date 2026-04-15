export default function FacultyHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="py-16 bg-primary-500 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-primary-100">{description}</p>
      </div>
    </section>
  );
}