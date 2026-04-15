export default function ProfileHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="py-16 bg-neutral-100 border-b border-neutral-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle ? <p className="mt-3 text-neutral-700">{subtitle}</p> : null}
      </div>
    </section>
  );
}