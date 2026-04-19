import React from "react";

const OUTCOMES = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="rgba(252,175,53,0.15)"/><path d="M24 14v20M14 24h20" stroke="#FCAF35" strokeWidth="2"/></svg>
    ),
    title: "Perawat Profesional",
    desc: "Bekerja di rumah sakit dan klinik",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="rgba(252,175,53,0.15)"/><rect x="16" y="16" width="16" height="16" rx="4" stroke="#FCAF35" strokeWidth="2"/></svg>
    ),
    title: "Bidan",
    desc: "Pelayanan kesehatan ibu dan anak",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="rgba(252,175,53,0.15)"/><path d="M16 32l16-16" stroke="#FCAF35" strokeWidth="2"/></svg>
    ),
    title: "Tenaga Kesehatan Masyarakat",
    desc: "Program kesehatan dan edukasi masyarakat",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="rgba(252,175,53,0.15)"/><rect x="18" y="18" width="12" height="12" rx="3" stroke="#FCAF35" strokeWidth="2"/></svg>
    ),
    title: "Health IT Specialist",
    desc: "Pengelolaan data dan sistem kesehatan",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="rgba(252,175,53,0.15)"/><path d="M24 16v16M16 24h16" stroke="#FCAF35" strokeWidth="2"/></svg>
    ),
    title: "Manajer Layanan Kesehatan",
    desc: "Mengelola operasional fasilitas kesehatan",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="rgba(252,175,53,0.15)"/><path d="M16 32l16-16" stroke="#FCAF35" strokeWidth="2"/></svg>
    ),
    title: "Peneliti Kesehatan",
    desc: "Pengembangan ilmu dan riset kesehatan",
  },
];

export default function Outcomes() {
  return (
    <section className="py-20 bg-[rgba(0,154,219,0.05)]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Prospek Karier Lulusan</h2>
        <p className="mb-10 text-gray-600">Lulusan kami memiliki peluang karier di berbagai bidang kesehatan</p>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {OUTCOMES.map((item, i) => (
            <li key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow hover:shadow-lg hover:border-primary border border-transparent transition-all duration-200">
              <span className="flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-sm text-gray-600 bg-white rounded-lg p-4 border-l-4 border-primary">
          Sebagian profesi memerlukan kelanjutan pendidikan ke tahap profesi (Ners, dll)
        </div>
        <a href="/pmb" className="inline-block mt-6 text-primary font-semibold hover:underline">Mulai perjalanan karier Anda bersama kami &rarr;</a>
      </div>
    </section>
  );
}
