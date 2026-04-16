"use client";
import Image from "next/image";

const accreditation = {
  status: "Baik Sekali",
  agency: "BAN-PT",
  sk: "Nomor SK: 9101/SK/BAN-PT/AKRED/S/IV/2026",
  year: "2026",
};

const vision = "Menjadi program studi unggul dalam pengembangan teknologi informasi kesehatan dan inovasi digital health masa depan.";

const missions = [
  "Menyelenggarakan pendidikan informatika kesehatan berbasis teknologi terkini.",
  "Mengembangkan sistem informasi kesehatan inovatif dan aman.",
  "Mendorong transformasi digital di sektor kesehatan nasional.",
];

const goals = [
  "Menghasilkan tenaga IT kesehatan profesional dan adaptif.",
  "Menguasai pengelolaan data medis dan sistem informasi kesehatan.",
  "Mendorong pengembangan solusi digital untuk layanan kesehatan.",
];

const advantagesData = [
  {
    icon: "💻",
    title: "Sistem Informasi Kesehatan",
    description: "Fokus pada pengembangan dan integrasi sistem informasi rumah sakit dan klinik.",
  },
  {
    icon: "📊",
    title: "Data & Analisis Kesehatan",
    description: "Pembelajaran data analytics, big data, dan visualisasi data medis.",
  },
  {
    icon: "🩺",
    title: "Integrasi Teknologi Medis",
    description: "Kolaborasi dengan dunia medis dan teknologi untuk solusi digital health.",
  },
  {
    icon: "🚀",
    title: "Peluang Karir Digital Health",
    description: "Akses ke industri health tech, startup, dan institusi kesehatan modern.",
  },
];

const competenciesData = [
  "Pengembangan Sistem Informasi Kesehatan",
  "Analisis Data Medis dan Visualisasi",
  "Manajemen Database Kesehatan",
  "Integrasi Teknologi Rumah Sakit & Klinik",
  "Keamanan & Privasi Data Kesehatan",
];

const careerData = [
  { title: "Health IT Specialist", desc: "Spesialis teknologi informasi di rumah sakit dan klinik." },
  { title: "Data Analyst Kesehatan", desc: "Menganalisis data medis untuk pengambilan keputusan kesehatan." },
  { title: "Developer Sistem Rumah Sakit", desc: "Membangun aplikasi dan sistem digital untuk layanan kesehatan." },
  { title: "IT Support Medis", desc: "Mendukung operasional IT di institusi kesehatan." },
  { title: "Konsultan Digital Health", desc: "Membantu transformasi digital di sektor kesehatan." },
];

const curriculumData = [
  { sem: "1-2", mk: "Pemrograman Dasar, Database, Matematika Komputasi", sks: "13" },
  { sem: "3-4", mk: "Sistem Informasi Kesehatan, Jaringan Komputer, Data Analytics", sks: "14" },
  { sem: "5-6", mk: "Keamanan Data, EMR, Analisis Sistem, Praktikum", sks: "13" },
  { sem: "7-8", mk: "Implementasi Sistem, Skripsi, Magang Digital Health", sks: "12" },
];

const lecturersData = [
  {
    name: "Dr. Andi Pratama, S.Kom, M.Kes",
    title: "Ketua Program Studi",
    img: "/rektor.png",
  },
  {
    name: "Rina Sari, S.Kom, M.T",
    title: "Dosen Data Analytics",
    img: "/rektor.png",
  },
  {
    name: "Budi Santoso, S.Kom, M.Kom",
    title: "Dosen Sistem Informasi Kesehatan",
    img: "/rektor.png",
  },
];

export default function InformatikaKesehatanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 bg-linear-to-br from-primary-50 via-blue-100 to-white text-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FCAF35] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-primary-600 text-black rounded-2xl mb-6 shadow-lg border-2 border-primary-700 text-lg font-bold tracking-wide animate-fade-in">
              <span className="mr-2">🏅</span> Akreditasi {accreditation.status} - {accreditation.agency}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              S1 Informatika Kesehatan
            </h1>
            <p className="text-xl md:text-2xl text-primary-900/80 max-w-2xl mx-auto mb-8 leading-relaxed font-semibold">
              Mengintegrasikan Teknologi dan Kesehatan untuk Masa Depan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontak"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              >
                Daftar Sekarang
              </a>
              <a
                href="#tentang"
                className="px-8 py-3 bg-[#FCAF35]/80 text-primary-900 rounded-lg font-semibold hover:bg-[#FCAF35] transition-colors border border-yellow-300"
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
              Program Studi Informatika Kesehatan mempersiapkan mahasiswa dalam pengelolaan sistem informasi kesehatan, analisis data, dan pengembangan teknologi di bidang medis. Lulusan kami siap menjadi pionir digital health di Indonesia.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">✔</span> Praktikum & project berbasis industri</li>
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">✔</span> Kolaborasi dengan rumah sakit & startup health tech</li>
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">✔</span> Dosen & mentor profesional IT kesehatan</li>
            </ul>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/gedung.jpg"
              alt="Dashboard Informatika Kesehatan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Akreditasi Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-10">Akreditasi & Legalitas</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute -top-3 -right-3 bg-white rounded-full shadow p-2 border border-primary-300">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#009ADB"/><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div className="bg-linear-to-r from-primary-600 to-blue-400 text-white rounded-full shadow-xl border-4 border-primary-300 px-10 py-8 text-3xl font-extrabold tracking-wide flex flex-col items-center animate-fade-in">
                  {accreditation.status}
                  <span className="block text-base font-semibold mt-2">{accreditation.agency}</span>
                </div>
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-1 mt-2">{accreditation.sk}</div>
              <div className="text-gray-500 text-base">Tahun {accreditation.year}</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-primary-100 px-8 py-6 flex flex-col items-center justify-center max-w-xs">
              <div className="text-5xl mb-2">✅</div>
              <div className="text-lg font-bold text-primary-700 mb-1">Terdaftar Resmi BAN-PT</div>
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
                className="bg-primary-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-primary-100 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h3>
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
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center border border-primary-100">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Visi</h3>
              <blockquote className="text-lg md:text-xl text-gray-900 font-semibold italic">"{vision}"</blockquote>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Misi</h3>
              <ul className="space-y-4">
                {missions.map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-1">✔</span>
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
              <div key={idx} className="bg-primary-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-primary-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold">🎯</div>
                <div className="text-gray-900 font-semibold text-lg">{goal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kompetensi Lulusan Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Kompetensi Lulusan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competenciesData.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 mt-1 font-bold text-lg">
                  ✔
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prospek Karir Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Prospek Karir</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {careerData.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-50 rounded-2xl shadow-md border border-primary-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurikulum Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center">Struktur Kurikulum & Pembelajaran</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Kurikulum kami menggabungkan pemrograman, database, sistem informasi kesehatan, data analytics, praktikum, dan magang digital health untuk membekali lulusan siap kerja di era teknologi kesehatan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {curriculumData.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-linear-to-br from-primary-50 to-blue-100 rounded-2xl shadow-md border border-primary-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-linear-to-br from-primary-600 to-blue-600 text-white flex items-center justify-center text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  💻
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
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Dosen & Kaprodi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {lecturersData.map((lect, idx) => (
              <div
                key={idx}
                className="bg-primary-50 rounded-2xl shadow-md border border-primary-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
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
                <h3 className="text-lg font-bold text-primary-900 mb-1">{lect.name}</h3>
                <p className="text-primary-700 font-semibold">{lect.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-linear-to-r from-primary-600 via-blue-400 to-primary-400 text-white">
        <div className="relative max-w-4xl mx-auto text-center overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30 animate-fade-in">
              <span className="text-base font-semibold text-white tracking-wide">Pendaftaran Mahasiswa Baru 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up">
              Bangun Karier di Dunia Digital Health
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in-up delay-100">
              Jadilah bagian dari generasi profesional IT kesehatan yang siap membangun masa depan layanan medis Indonesia.
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
