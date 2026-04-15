import Link from "next/link";

export const metadata = {
  title: "Profil - Payung Negeri",
  description: "Profil Institut Kesehatan Payung Negeri",
};

export default function ProfilIndexPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Profil</h1>
      <p className="mt-3 text-neutral-700">Pilih halaman profil untuk mengenal kampus lebih dalam.</p>
      <div className="mt-6 space-y-2 text-primary-700">
        <Link href="/profil/sejarah" className="block underline">
          Sejarah
        </Link>
        <Link href="/profil/visi-misi" className="block underline">
          Visi & Misi
        </Link>
        <Link href="/profil/struktur-organisasi" className="block underline">
          Struktur Organisasi
        </Link>
      </div>
    </section>
  );
}