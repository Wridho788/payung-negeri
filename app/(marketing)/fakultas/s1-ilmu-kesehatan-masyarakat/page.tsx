"use client";

import Image from "next/image";

const accreditation = {
  status: "Baik Sekali",
  agency: "BAN-PT",
  sk: "Nomor SK: 1234/SK/BAN-PT/AKRED/S/IV/2026",
  year: "2026",
};

const vision = "Menjadi program studi unggul dalam pengembangan ilmu kesehatan masyarakat berbasis teknologi dan berdaya saing nasional.";

const missions = [
  "Menyelenggarakan pendidikan berkualitas di bidang kesehatan masyarakat.",
  "Melaksanakan penelitian dan pengabdian masyarakat yang inovatif.",
  "Mengembangkan kompetensi profesional lulusan sesuai kebutuhan industri.",
];

const goals = [
  "Menghasilkan lulusan yang kompeten dan beretika.",
  "Meningkatkan kualitas penelitian kesehatan masyarakat.",
  "Mendorong inovasi dan kolaborasi di bidang kesehatan.",
];

const advantagesData = [
  {
    icon: "🏥",
    title: "Digitalisasi Kesehatan",
    description: "Pembelajaran modern dengan teknologi terkini untuk solusi kesehatan digital",
  },
  {
    icon: "💻",
    title: "Informatika Kesehatan",
    description: "Integrasi teknologi informasi dalam pengelolaan data kesehatan masyarakat",
  },
  {
    icon: "🤝",
    title: "Pengabdian Masyarakat",
    description: "Program aktif melayani langsung kebutuhan kesehatan komunitas lokal",
  },
];

const careerData = [
  { title: "Instansi Pemerintah", desc: "Dinas Kesehatan, Puskesmas" },
  { title: "Rumah Sakit", desc: "Tim Promosi & Manajemen Kesehatan" },
  { title: "Organisasi NGO", desc: "Program Manager Kesehatan Publik" },
  { title: "Penelitian", desc: "Lembaga Penelitian Kesehatan" },
];

const competenciesData = [
  "Analisis epidemiologi dan riset kesehatan masyarakat",
  "Perencanaan & implementasi program promosi kesehatan",
  "Manajemen program kesehatan dan sumber daya",
  "Konsultasi kesehatan masyarakat untuk organisasi",
  "Komunikasi efektif kesehatan kepada berbagai audiens",
];


const curriculumData = [
  { sem: "1-2", mk: "Dasar-Dasar Kesehatan Masyarakat, Biostatistik", sks: "12" },
  { sem: "3-4", mk: "Epidemiologi, Promosi Kesehatan", sks: "14" },
  { sem: "5-6", mk: "Manajemen Kesehatan, Metode Riset", sks: "13" },
  { sem: "7-8", mk: "Program Kesehatan, Skripsi", sks: "10" },
];

const lecturersData = [
  {
    name: "dr. Siti Rahmawati, M.Kes",
    title: "Ketua Program Studi",
    img: "/rektor.png",
  },
  {
    name: "Ahmad Fauzi, SKM, M.PH",
    title: "Dosen Epidemiologi",
    img: "/rektor.png",
  },
  {
    name: "Dewi Lestari, S.KM, M.Kes",
    title: "Dosen Promosi Kesehatan",
    img: "/rektor.png",
  },
];

export default function IlmuKesehatanMasyarakatPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 bg-linear-to-br from-primary-600 via-primary-500 to-blue-600 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-[#FCAF35] text-primary-900 rounded-2xl mb-6 shadow-lg border-2 border-yellow-300 text-lg font-bold tracking-wide animate-fade-in">
              <span className="mr-2">🏅</span> Akreditasi {accreditation.status} - {accreditation.agency}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              S1 Ilmu Kesehatan Masyarakat
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Unggul dalam digitalisasi kesehatan, membangun tenaga profesional yang kompeten dan berdedikasi meningkatkan derajat kesehatan masyarakat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontak"
                className="px-8 py-3 bg-white/30 text-blue-600 rounded-lg font-semibold hover:bg-white/40 transition-colors"
              >
                Daftar Sekarang
              </a>
              <a
                href="#tentang"
                className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Akreditasi & Legalitas Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Akreditasi & Legalitas</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute -top-3 -right-3 bg-white rounded-full shadow p-2 border border-yellow-300">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FCAF35"/><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div className="bg-linear-to-br from-[#FCAF35] to-yellow-400 text-primary-900 rounded-full shadow-xl border-4 border-yellow-300 px-10 py-8 text-3xl font-extrabold tracking-wide flex flex-col items-center animate-fade-in">
                  {accreditation.status}
                  <span className="block text-base font-semibold mt-2">{accreditation.agency}</span>
                </div>
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-1 mt-2">{accreditation.sk}</div>
              <div className="text-gray-500 text-base">Tahun {accreditation.year}</div>
            </div>
            <div className="bg-primary-50 rounded-2xl shadow-md border border-primary-100 px-8 py-6 flex flex-col items-center justify-center max-w-xs">
              <div className="text-5xl mb-2">✅</div>
              <div className="text-lg font-bold text-primary-700 mb-1">Terdaftar Resmi BAN-PT</div>
              <div className="text-gray-700 text-base">Program Studi telah memenuhi standar nasional pendidikan tinggi dan diakui secara nasional.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Visi dan Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center border border-primary-100">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Visi</h3>
              <blockquote className="text-lg md:text-xl text-gray-900 font-semibold italic">"{vision}"</blockquote>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Misi</h3>
              <ul className="space-y-4">
                {missions.map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✔</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Tujuan Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, idx) => (
              <div key={idx} className="bg-primary-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-primary-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold">🎯</div>
                <div className="text-gray-900 font-semibold text-lg">{goal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Program Section */}
      <section id="tentang" className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang Program Studi
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Program S1 Ilmu Kesehatan Masyarakat dirancang menciptakan profesional kesehatan publik yang
                kompeten mengidentifikasi, menganalisis, dan mengatasi masalah kesehatan pada tingkat populasi
                dan komunitas.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Lulusan kami siap menjadi agen perubahan dalam meningkatkan derajat kesehatan masyarakat dengan
                pendekatan modern berbasis teknologi dan penelitian berbasis bukti.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kurikulum Modern</h4>
                    <p className="text-gray-600 text-sm">Berbasis kompetensi & industri</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dosen Berpengalaman</h4>
                    <p className="text-gray-600 text-sm">Praktisi & peneliti aktif</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fasilitas Lengkap</h4>
                    <p className="text-gray-600 text-sm">Lab & klinik kesehatan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/gedung.jpg"
                alt="Gedung S1 Ilmu Kesehatan Masyarakat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Program Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Program Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Diferensiasi yang membuat program kami pilihan terbaik untuk karir kesehatan publik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantagesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prospek Karir Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prospek Karir Cerah
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lulusan kami siap berkarir di berbagai sektor kesehatan dengan posisi strategis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerData.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-linear-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    💼
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kompetensi Lulusan Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Kompetensi Lulusan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competenciesData.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Kurikulum Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Struktur Kurikulum
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Kurikulum kami menggabungkan teori, praktik, dan riset berbasis industri untuk membekali lulusan siap kerja dan inovatif.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {curriculumData.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-linear-to-br from-primary-50 to-blue-50 rounded-2xl shadow-md border border-primary-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-linear-to-br from-primary-600 to-blue-600 text-white flex items-center justify-center text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <div className="mt-8">
                  <div className="text-primary-700 font-bold text-lg mb-2">Semester {item.sem}</div>
                  <div className="text-gray-900 font-semibold mb-2">{item.mk}</div>
                  <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full font-bold text-sm mt-2">
                    {item.sks} SKS
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosen & Kaprodi Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Dosen & Kaprodi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {lecturersData.map((lect, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-primary-200 bg-gray-100">
                  <Image
                    src={lect.img}
                    alt={lect.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{lect.name}</h3>
                <p className="text-primary-600 font-semibold">{lect.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-linear-to-r from-primary-600 to-blue-600 text-white">
        <div className="relative max-w-4xl mx-auto text-center overflow-hidden">
          {/* Decorative background pattern */}
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30 animate-fade-in">
              <span className="text-base font-semibold text-white tracking-wide">Pendaftaran Mahasiswa Baru 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up">
              Mulai Perjalanan Anda di Dunia Kesehatan
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in-up delay-100">
              Bergabunglah bersama kami dan wujudkan impian menjadi profesional kesehatan masyarakat yang berdampak.
            </p>
            <a
              href="/kontak"
              className="inline-block px-12 py-4 bg-white/30 text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40 animate-bounce-in"
            >
              Daftar Sekarang Juga
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
