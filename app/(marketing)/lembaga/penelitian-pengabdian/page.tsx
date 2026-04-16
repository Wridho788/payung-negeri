"use client";
import Image from "next/image";

const researchFocus = [
  { icon: "🧬", title: "Kesehatan Masyarakat" },
  { icon: "👩‍👧", title: "Kesehatan Ibu & Anak" },
  { icon: "💻", title: "Teknologi Kesehatan" },
  { icon: "🏥", title: "Pelayanan Klinis" },
];

const communityPrograms = [
  { icon: "📢", title: "Edukasi Kesehatan" },
  { icon: "🤝", title: "Penyuluhan Masyarakat" },
  { icon: "🩺", title: "Pelayanan Kesehatan Gratis" },
  { icon: "🏡", title: "Program Desa Binaan" },
];

const publications = [
  { icon: "📄", title: "Artikel Ilmiah" },
  { icon: "📚", title: "Jurnal" },
  { icon: "📑", title: "Laporan Penelitian" },
];

export default function LPPMPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-primary-50 via-[#FCAF35]/20 to-white text-primary-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Penelitian & Pengabdian kepada Masyarakat</h1>
          <p className="text-xl md:text-2xl text-primary-900/80 mb-8 max-w-2xl mx-auto">
            Mengembangkan ilmu pengetahuan dan memberikan kontribusi nyata bagi masyarakat
          </p>
          <a href="#program" className="inline-block px-8 py-3 bg-[#FCAF35] text-primary-900 rounded-lg font-semibold hover:bg-primary-700 hover:text-white transition-colors shadow-lg">
            Lihat Program
          </a>
        </div>
      </section>

      {/* Tentang LPPM */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white" id="tentang">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Tentang LPPM</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) berperan dalam mengelola kegiatan penelitian dan pengabdian sebagai bagian dari Tri Dharma Perguruan Tinggi.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/lppm-activity.jpg" alt="Kegiatan LPPM" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Fokus Penelitian */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Fokus Penelitian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {researchFocus.map((item, idx) => (
              <div key={idx} className="bg-[#FCAF35]/20 p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-yellow-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-yellow-700 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Pengabdian */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white" id="program">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Program Pengabdian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {communityPrograms.map((item, idx) => (
              <div key={idx} className="bg-[#FCAF35]/20 p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-yellow-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-yellow-700 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publikasi / Output */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Publikasi & Output</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {publications.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-yellow-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-yellow-700 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">(Segera tersedia)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Kolaborasi */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-r from-[#FCAF35] via-orange-400 to-primary-400 text-primary-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tertarik Berkolaborasi dalam Penelitian atau Pengabdian?</h2>
          <p className="text-lg md:text-xl mb-8">Hubungi kami untuk kerja sama penelitian, pengabdian, atau program kolaborasi lainnya.</p>
          <a href="/kontak" className="inline-block px-12 py-4 bg-white/30 text-primary-900 rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40">
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  );
}
