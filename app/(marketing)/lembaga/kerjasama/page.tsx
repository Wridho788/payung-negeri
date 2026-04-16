"use client";
import Image from "next/image";

const partnershipTypes = [
  { icon: "🎓", title: "Pendidikan & Akademik" },
  { icon: "🔬", title: "Penelitian" },
  { icon: "🤝", title: "Pengabdian Masyarakat" },
  { icon: "🏥", title: "Magang & Praktik Klinik" },
  { icon: "👩‍💼", title: "Pengembangan SDM" },
];

const partners = [
  { name: "RSUD Pekanbaru", logo: "/partner-placeholder.svg" },
  { name: "Kampus Mitra A", logo: "/partner-placeholder.svg" },
  { name: "Dinas Kesehatan", logo: "/partner-placeholder.svg" },
  { name: "Klinik Sehat", logo: "/partner-placeholder.svg" },
  { name: "NGO Kesehatan", logo: "/partner-placeholder.svg" },
  { name: "Perusahaan XYZ", logo: "/partner-placeholder.svg" },
];

const collaborationPrograms = [
  { icon: "🧑‍⚕️", title: "Program Magang Mahasiswa" },
  { icon: "🔬", title: "Penelitian Bersama" },
  { icon: "🩺", title: "Pelayanan Kesehatan" },
  { icon: "🎤", title: "Workshop & Pelatihan" },
];

const submissionSteps = [
  { step: 1, title: "Ajukan Permohonan" },
  { step: 2, title: "Review Proposal" },
  { step: 3, title: "Diskusi & Kesepakatan" },
  { step: 4, title: "Penandatanganan MoU" },
];

export default function KerjaSamaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-primary-50 via-[#009ADB]/20 to-white text-primary-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kerja Sama</h1>
          <p className="text-xl md:text-2xl text-primary-900/80 mb-8 max-w-2xl mx-auto">
            Membangun Kolaborasi Strategis untuk Pengembangan Pendidikan dan Kesehatan
          </p>
          <a href="#ajukan" className="inline-block px-8 py-3 bg-[#FCAF35] text-primary-900 rounded-lg font-semibold hover:bg-primary-700 hover:text-white transition-colors shadow-lg">
            Ajukan Kerja Sama
          </a>
        </div>
      </section>

      {/* Tentang Kerja Sama */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white" id="tentang">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Tentang Kerja Sama</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Kami menjalin kerja sama dengan berbagai institusi untuk mendukung pengembangan pendidikan, penelitian, dan pengabdian kepada masyarakat.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/partnership-meeting.jpg" alt="Kolaborasi Kerja Sama" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Jenis Kerja Sama */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Jenis Kerja Sama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {partnershipTypes.map((item, idx) => (
              <div key={idx} className="bg-[#009ADB]/10 p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-blue-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#009ADB] mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitra Kami */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Mitra Kami</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-20 h-20 mb-2 flex items-center justify-center bg-gray-100 rounded-xl border border-blue-100 overflow-hidden">
                  <Image src={partner.logo} alt={partner.name} width={64} height={64} className="object-contain" />
                </div>
                <span className="text-xs text-gray-700 text-center">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Kolaborasi */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Program Kolaborasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {collaborationPrograms.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-yellow-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-yellow-700 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Pengajuan Kerja Sama */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white" id="ajukan">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">Alur Pengajuan Kerja Sama</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {submissionSteps.map((item, idx) => (
              <div key={idx} className="flex-1 bg-[#FCAF35]/20 rounded-2xl shadow-md p-8 border border-yellow-100 flex flex-col items-center text-center min-w-[180px]">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#FCAF35] text-primary-900 flex items-center justify-center text-2xl font-bold">{item.step}</div>
                <h3 className="text-lg font-bold text-yellow-700 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Ajukan Kerja Sama */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-r from-[#009ADB] via-[#FCAF35] to-primary-400 text-primary-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ajukan Kerja Sama dengan Kami</h2>
          <p className="text-lg md:text-xl mb-8">Mari berkolaborasi untuk pengembangan pendidikan dan kesehatan</p>
          <a href="/kontak" className="inline-block px-12 py-4 bg-white/30 text-primary-900 rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40">
            Ajukan Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
