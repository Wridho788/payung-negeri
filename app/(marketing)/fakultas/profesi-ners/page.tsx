"use client";
import Image from "next/image";

const accreditation = {
  status: "Baik Sekali",
  agency: "BAN-PT",
  sk: "Nomor SK: 9103/SK/BAN-PT/AKRED/PROF/IV/2026",
  year: "2026",
};

const vision = "Menjadi program profesi ners unggulan yang menghasilkan perawat profesional, kompeten, dan siap praktik klinik di berbagai fasilitas kesehatan.";

const missions = [
  "Menyelenggarakan pendidikan profesi ners berkualitas dan berstandar nasional.",
  "Mengembangkan kompetensi klinik dan profesionalisme perawat.",
  "Mempersiapkan lulusan untuk lulus uji kompetensi nasional dan siap kerja.",
];

const goals = [
  "Menghasilkan perawat profesional dan siap praktik.",
  "Meningkatkan kompetensi klinik lulusan.",
  "Mendorong pelayanan kesehatan berkualitas.",
];

const advantagesData = [
  {
    icon: "🏥",
    title: "Praktik Klinik Intensif",
    description: "Fokus utama pada pengalaman praktik langsung di rumah sakit dan klinik mitra.",
  },
  {
    icon: "👩‍⚕️",
    title: "Bimbingan Profesional (Preceptor)",
    description: "Pendampingan intensif oleh preceptor/pembimbing klinik berpengalaman.",
  },
  {
    icon: "🩺",
    title: "Pengalaman Rumah Sakit",
    description: "Rotasi klinik di berbagai unit layanan kesehatan.",
  },
  {
    icon: "📜",
    title: "Standar Kompetensi Nasional",
    description: "Kurikulum sesuai standar nasional profesi keperawatan.",
  },
];

const competenciesData = [
  "Asuhan keperawatan profesional",
  "Pengambilan keputusan klinis",
  "Komunikasi pasien dan keluarga",
  "Manajemen kasus dan tim",
  "Etika profesi dan advokasi",
];

const practiceScopes = [
  { icon: "🏥", title: "Rumah Sakit" },
  { icon: "🏪", title: "Klinik" },
  { icon: "🏠", title: "Komunitas" },
  { icon: "🏢", title: "Puskesmas" },
];

const careerData = [
  { title: "Perawat Rumah Sakit", desc: "Praktik di berbagai unit rumah sakit (ICU, IGD, Medikal Bedah, dsb)." },
  { title: "Perawat Klinik", desc: "Bekerja di klinik rawat inap, klinik spesialis, dan layanan primer." },
  { title: "Tenaga Kesehatan Pemerintah", desc: "Perawat di puskesmas, dinas kesehatan, dan program pemerintah." },
  { title: "Perawat Komunitas", desc: "Memberikan pelayanan keperawatan di komunitas dan home care." },
];

const clinicalLearning = [
  "Praktik langsung di rumah sakit mitra",
  "Pendampingan preceptor profesional",
  "Studi kasus nyata dan rotasi klinik",
  "Evaluasi kompetensi secara berkala",
];

const preceptors = [
  {
    name: "dr. Siti Nuraini, M.Kep, Sp.Kep.An",
    role: "Preceptor Klinik Rumah Sakit",
    img: "/rektor.png",
  },
  {
    name: "Andi Pratama, S.Kep, Ns, M.Kep",
    role: "Pembimbing Klinik Komunitas",
    img: "/rektor.png",
  },
  {
    name: "Rina Sari, S.Kep, Ns, M.Kep",
    role: "Preceptor Klinik Puskesmas",
    img: "/rektor.png",
  },
];

export default function ProfsisNersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-blue-100 via-primary-50 to-white text-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl mb-6 shadow-lg border-2 border-blue-700 text-lg font-bold tracking-wide animate-fade-in">
              <span className="mr-2">🏅</span> Akreditasi {accreditation.status} - {accreditation.agency}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Program Profesi Ners
            </h1>
            <p className="text-xl md:text-2xl text-primary-900/80 max-w-2xl mx-auto mb-8 leading-relaxed font-semibold">
              Mempersiapkan Perawat Profesional yang Kompeten dan Siap Praktik Klinik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontak"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Daftar Sekarang
              </a>
              <a
                href="#tentang"
                className="px-8 py-3 bg-white/80 text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors border border-blue-300"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Program Section */}
      <section id="tentang" className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Tentang Program</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Program Profesi Ners merupakan tahap pendidikan lanjutan yang berfokus pada praktik klinik untuk membentuk perawat yang kompeten dalam pelayanan kesehatan.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✔</span> Praktik klinik intensif di rumah sakit mitra</li>
              <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✔</span> Bimbingan preceptor profesional</li>
              <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✔</span> Kurikulum sesuai standar nasional</li>
            </ul>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/rs-praktik.jpg"
              alt="Praktik Klinik Profesi Ners"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Akreditasi Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-10">Akreditasi & Legalitas</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute -top-3 -right-3 bg-white rounded-full shadow p-2 border border-blue-300">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full shadow-xl border-4 border-blue-300 px-10 py-8 text-3xl font-extrabold tracking-wide flex flex-col items-center animate-fade-in">
                  {accreditation.status}
                  <span className="block text-base font-semibold mt-2">{accreditation.agency}</span>
                </div>
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-1 mt-2">{accreditation.sk}</div>
              <div className="text-gray-500 text-base">Tahun {accreditation.year}</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-blue-100 px-8 py-6 flex flex-col items-center justify-center max-w-xs">
              <div className="text-5xl mb-2">✅</div>
              <div className="text-lg font-bold text-blue-700 mb-1">Terdaftar Resmi BAN-PT</div>
              <div className="text-gray-700 text-base">Program Studi telah memenuhi standar nasional pendidikan tinggi dan diakui secara nasional.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Program Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Keunggulan Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {advantagesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-blue-100 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Visi dan Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Visi</h3>
              <blockquote className="text-lg md:text-xl text-gray-900 font-semibold italic">"{vision}"</blockquote>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Misi</h3>
              <ul className="space-y-4">
                {missions.map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl mt-1">✔</span>
                    <span className="text-gray-800 text-lg">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Program Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Tujuan Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, idx) => (
              <div key={idx} className="bg-blue-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">🎯</div>
                <div className="text-gray-900 font-semibold text-lg">{goal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kompetensi Profesional Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Kompetensi Profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competenciesData.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1 font-bold text-lg">
                  ✔
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lingkup Praktik Klinik Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Lingkup Praktik Klinik</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {practiceScopes.map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-2xl shadow-md border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prospek Karir Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Prospek Karir</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {careerData.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-2xl shadow-md border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pembelajaran Klinik Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">Pembelajaran Klinik</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Pembelajaran klinik di program profesi ners menekankan praktik langsung, pendampingan preceptor, studi kasus nyata, dan rotasi klinik di berbagai unit layanan kesehatan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {clinicalLearning.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-blue-50 rounded-2xl shadow-md border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  🩺
                </div>
                <div className="mt-8">
                  <div className="text-blue-700 font-bold text-lg mb-2">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preceptor / Pembimbing Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Preceptor & Pembimbing Klinik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {preceptors.map((lect, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-2xl shadow-md border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-blue-200 bg-gray-100">
                  <Image
                    src={lect.img}
                    alt={lect.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-1">{lect.name}</h3>
                <p className="text-blue-700 font-semibold">{lect.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-r from-blue-600 via-blue-400 to-primary-400 text-white">
        <div className="relative max-w-4xl mx-auto text-center overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30 animate-fade-in">
              <span className="text-base font-semibold text-white tracking-wide">Pendaftaran Mahasiswa Baru 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up">
              Mulai Langkah Anda Menjadi Perawat Profesional
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in-up delay-100">
              Daftar sekarang dan wujudkan impian Anda menjadi perawat profesional, kompeten, dan siap praktik klinik.
            </p>
            <a
              href="/kontak"
              className="inline-block px-12 py-4 bg-white/30 text-primary-900 rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40 animate-bounce-in"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
