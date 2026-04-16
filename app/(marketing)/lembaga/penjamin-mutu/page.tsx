"use client";
import Image from "next/image";

const ppeppSteps = [
  { title: "Penetapan", desc: "Menetapkan standar mutu pendidikan, penelitian, dan pengabdian." },
  { title: "Pelaksanaan", desc: "Melaksanakan standar mutu secara konsisten di seluruh unit." },
  { title: "Evaluasi", desc: "Melakukan evaluasi dan audit internal secara berkala." },
  { title: "Pengendalian", desc: "Mengendalikan dan memonitor pelaksanaan standar mutu." },
  { title: "Peningkatan", desc: "Meningkatkan mutu secara berkelanjutan berdasarkan hasil evaluasi." },
];

const qualityStandards = [
  { icon: "🎓", title: "Standar Pendidikan" },
  { icon: "🔬", title: "Standar Penelitian" },
  { icon: "🤝", title: "Standar Pengabdian" },
  { icon: "👩‍🏫", title: "Standar SDM" },
  { icon: "🏢", title: "Standar Sarana Prasarana" },
];

const qualityDocs = [
  { title: "Manual Mutu", desc: "Panduan utama sistem penjaminan mutu.", file: "#" },
  { title: "Standar Mutu", desc: "Dokumen standar mutu pendidikan dan layanan.", file: "#" },
  { title: "SOP", desc: "Prosedur operasional standar untuk seluruh unit.", file: "#" },
  { title: "Kebijakan Akademik", desc: "Kebijakan dan aturan akademik institusi.", file: "#" },
];

const evaluationCycle = [
  { icon: "📝", title: "Audit Internal" },
  { icon: "🔍", title: "Monitoring" },
  { icon: "📊", title: "Evaluasi" },
  { icon: "🔄", title: "Tindak Lanjut" },
];

const orgStructure = [
  { name: "Dr. Ahmad Fauzi, M.Pd.", title: "Kepala LPM", img: "/rektor.png" },
  { name: "Tim Penjaminan Mutu", title: "Anggota", img: "/rektor.png" },
];

export default function PenjaminanMutuPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-linear-to-br from-neutral-900 via-primary-50 to-white text-primary-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Penjaminan Mutu</h1>
          <p className="text-xl md:text-2xl text-neutral-900/80 mb-8 max-w-2xl mx-auto">
            Menjamin Kualitas Pendidikan melalui Sistem yang Terstruktur dan Berkelanjutan
          </p>
          <a href="#sistem" className="inline-block px-8 py-3 bg-[#009ADB] text-white rounded-lg font-semibold hover:bg-neutral-900 hover:text-white transition-colors shadow-lg">
            Pelajari Sistem Mutu
          </a>
        </div>
      </section>

      {/* Tentang LPM / SPMI */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white" id="tentang">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Tentang LPM / SPMI</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Lembaga Penjaminan Mutu (LPM) bertanggung jawab dalam mengelola Sistem Penjaminan Mutu Internal (SPMI) guna meningkatkan kualitas pendidikan secara berkelanjutan.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/quality-illustration.jpg" alt="Ilustrasi Penjaminan Mutu" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Sistem Penjaminan Mutu (PPEPP) */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50" id="sistem">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">Sistem Penjaminan Mutu (PPEPP)</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {ppeppSteps.map((step, idx) => (
              <div key={idx} className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-blue-100 flex flex-col items-center text-center min-w-45">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#009ADB] text-white flex items-center justify-center text-2xl font-bold">{idx + 1}</div>
                <h3 className="text-lg font-bold text-[#009ADB] mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standar Mutu */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">Standar Mutu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {qualityStandards.map((item, idx) => (
              <div key={idx} className="bg-[#009ADB]/10 p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-blue-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#009ADB] mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumen Mutu */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">Dokumen Mutu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {qualityDocs.map((doc, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-blue-100">
                <h3 className="text-lg font-bold text-[#009ADB] mb-2">{doc.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{doc.desc}</p>
                <a href={doc.file} className="inline-block px-6 py-2 bg-[#009ADB] text-white rounded-lg font-semibold hover:bg-neutral-900 transition-colors shadow">
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Siklus Evaluasi */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">Siklus Evaluasi</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {evaluationCycle.map((item, idx) => (
              <div key={idx} className="flex-1 bg-[#009ADB]/10 rounded-2xl shadow-md p-8 border border-blue-100 flex flex-col items-center text-center min-w-45">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#009ADB] mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">Struktur Organisasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {orgStructure.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md border border-blue-100 p-8 flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-blue-200 bg-gray-100">
                  <Image src={person.img} alt={person.name} width={112} height={112} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{person.name}</h3>
                <p className="text-[#009ADB] font-semibold">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-linear-to-r from-neutral-900 via-[#009ADB] to-[#FCAF35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Mengetahui Sistem Penjaminan Mutu Kami?</h2>
          <p className="text-lg md:text-xl mb-8">Hubungi kami untuk informasi lebih lanjut atau konsultasi sistem mutu.</p>
          <a href="/kontak" className="inline-block px-12 py-4 bg-white/30 text-white rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40">
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  );
}
