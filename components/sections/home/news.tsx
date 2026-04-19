import { getAllNews } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function NewsSectionShell({ children }: { children: ReactNode }) {
  return (
    <section className="bg-linear-to-b from-white to-[#F5F7FA] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">Berita Terbaru</h2>
            <p className="mt-2 text-sm text-neutral-500">Informasi terbaru dari website resmi Institut Kesehatan Payung Negeri.</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function NewsSkeleton() {
  return (
    <NewsSectionShell>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border border-[#eeeeee] bg-white">
            <div className="aspect-video animate-pulse bg-neutral-200" />
            <div className="space-y-3 p-5">
              <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
              <div className="h-px w-full bg-neutral-100" />
              <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
              <div className="h-5 w-4/5 animate-pulse rounded bg-neutral-200" />
              <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
            </div>
          </div>
        ))}
      </div>
    </NewsSectionShell>
  );
}


export default function News() {
  const latestNews = getAllNews();
  if (latestNews.length < 3) {
    return null;
  }
  return (
    <NewsSectionShell>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {latestNews.slice(0, 3).map((item) => (
          <Link
            key={item.slug}
            href={`/berita/${item.slug}`}
            className="group block h-full overflow-hidden rounded-2xl border border-[#eeeeee] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.image || "/berita.png"}
                alt={item.title}
                fill
                className="object-cover transition duration-200 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/25 to-transparent" />
            </div>

            <div className="p-5">
              <p className="text-xs text-neutral-500">{item.date}</p>
              <div className="my-3 h-px w-full bg-neutral-100" />
              <h3 className="line-clamp-2 text-base font-semibold text-neutral-900 transition duration-200 group-hover:underline group-hover:decoration-primary-500 group-hover:decoration-2 group-hover:underline-offset-4 md:text-lg">
                {item.title}
              </h3>
              {item.excerpt ? <p className="mt-3 line-clamp-2 text-sm text-neutral-500">{item.excerpt}</p> : null}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/berita" className="text-sm font-medium text-primary-500 transition duration-200 hover:text-primary-700">
          Lihat Semua &gt;
        </Link>
      </div>
    </NewsSectionShell>
  );
}