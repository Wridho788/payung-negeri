import React from "react";

const ADVANTAGES = [
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><path d="M22 12l4 8h-8l4-8zm0 20a8 8 0 100-16 8 8 0 000 16z" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Akreditasi Baik Sekali",
    desc: "Menjamin kualitas pendidikan",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><rect x="14" y="18" width="16" height="8" rx="2" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Fasilitas Lengkap",
    desc: "Laboratorium dan sarana modern",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><path d="M16 28l6-12 6 12" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Pengalaman Praktik Klinik",
    desc: "Langsung di fasilitas kesehatan",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><path d="M22 16v12M16 22h12" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Tenaga Pengajar Profesional",
    desc: "Dosen berpengalaman di bidangnya",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><rect x="16" y="16" width="12" height="12" rx="3" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Kurikulum Berbasis Kompetensi",
    desc: "Sesuai kebutuhan dunia kerja",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><path d="M16 28l12-12" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Jaringan Kerja Sama Luas",
    desc: "Dengan rumah sakit dan institusi",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Keunggulan Kampus</h2>
        <p className="mb-10 text-gray-600">Komitmen kami dalam memberikan pendidikan berkualitas</p>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ADVANTAGES.map((item, i) => (
            <li key={i} className="flex items-start gap-4 bg-transparent rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-200">
              <span className="flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
