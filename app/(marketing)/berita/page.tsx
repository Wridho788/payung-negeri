
import Link from "next/link";
import Image from "next/image";
import { getAllNews } from "@/data/news";

export const metadata = {
  title: "Berita - Payung Negeri",
  description: "Berita terbaru seputar Payung Negeri",
};

export default function BeritaPage() {
  const news = getAllNews();
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Berita</h1>
      <p className="mb-8 text-neutral-700">Informasi dan kabar terbaru dari Institut Kesehatan Payung Negeri.</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Link
            key={item.slug}
            href={`/berita/${item.slug}`}
            className="group block overflow-hidden rounded-2xl border border-[#eeeeee] bg-white hover:shadow-lg transition duration-200"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.image || "/berita.png"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-200"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/25 to-transparent" />
            </div>
            <div className="p-5">
              <p className="text-xs text-neutral-500">{item.date}</p>
              <div className="my-3 h-px w-full bg-neutral-100" />
              <h3 className="line-clamp-2 text-base font-semibold text-neutral-900 group-hover:underline group-hover:decoration-primary-500 group-hover:decoration-2 group-hover:underline-offset-4 md:text-lg">{item.title}</h3>
              <p className="mt-3 line-clamp-2 text-sm text-neutral-500">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}