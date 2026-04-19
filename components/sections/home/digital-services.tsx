import React from "react";

const SERVICES = [
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><rect x="14" y="18" width="16" height="8" rx="2" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Portal Akademik",
    desc: "Akses nilai, KRS, dan info akademik online.",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><rect x="16" y="16" width="12" height="12" rx="3" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "E-Learning",
    desc: "Pembelajaran daring interaktif dan fleksibel.",
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="rgba(0,154,219,0.1)"/><path d="M16 28l12-12" stroke="#009ADB" strokeWidth="2"/></svg>
    ),
    title: "Perpustakaan Digital",
    desc: "Koleksi jurnal dan buku elektronik lengkap.",
  },
];

export default function DigitalServices() {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Layanan Digital</h2>
        <p className="mb-10 text-gray-600">Kemudahan akses layanan kampus secara online</p>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item, i) => (
            <li key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow hover:shadow-md transition-all duration-200">
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
