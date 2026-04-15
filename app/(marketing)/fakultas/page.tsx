import { faculties } from "@/data/faculties";
import Link from "next/link";

export const metadata = {
  title: "Fakultas - Payung Negeri",
  description: "Daftar fakultas di Institut Kesehatan Payung Negeri",
};

export default function FakultasIndexPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Fakultas</h1>
      <p className="mt-3 text-neutral-700">Pilih fakultas untuk melihat program studi yang tersedia.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {faculties.map((faculty) => (
          <Link key={faculty.slug} href={`/fakultas/${faculty.slug}`} className="block border border-neutral-300 bg-white rounded-xl p-5 hover:shadow-md transition-shadow">
            <h2 className="font-semibold text-lg">{faculty.name}</h2>
            <p className="mt-2 text-sm text-neutral-700">{faculty.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}