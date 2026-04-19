import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getNewsBySlug } from "@/data/news";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug);
  if (!news) return { title: "Berita Tidak Ditemukan" };
  return {
    title: `${news.title} - Payung Negeri`,
    description: news.excerpt,
  };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug);
  if (!news) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/berita" className="text-primary-500 hover:underline">&larr; Kembali ke Berita</Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
      <p className="text-sm text-neutral-500 mb-6">{news.date}</p>
      <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden">
        <Image src={news.image || "/berita.png"} alt={news.title} fill className="object-cover" sizes="100vw" />
      </div>
      <article className="prose max-w-none prose-neutral">
        {news.content}
      </article>
    </section>
  );
}
