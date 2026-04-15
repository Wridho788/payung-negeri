export default function RichText({ content }: { content: string }) {
  const paragraphs = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-5 text-neutral-700 leading-8">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}