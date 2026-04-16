"use client";

export default function ProfsisNersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Profesi Ners
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Program Profesi Ners untuk menghasilkan perawat profesional dan berlisensi
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Program</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Program Profesi Ners adalah program lanjutan yang menyiapkan lulusan S1 Keperawatan untuk
              menjadi Ners profesional yang kompeten dalam memberikan asuhan keperawatan holistik. Program ini
              intensif dan berfokus pada pengembangan kompetensi klinik dan profesionalisme.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-xl font-bold text-primary-600 mb-3">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi program profesi ners yang menghasilkan tenaga perawat profesional berkompetensi
                dalam memberikan asuhan keperawatan berkualitas tinggi.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Misi</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Menyelenggarakan pendidikan profesi ners berkualitas</li>
                <li>✓ Mengembangkan kompetensi klinik perawat profesional</li>
                <li>✓ Mempersiapkan lulus uji kompetensi ners nasional</li>
              </ul>
            </div>
          </div>

          {/* Kompetensi Lulusan */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kompetensi Lulusan</h3>
            <div className="space-y-4">
              {[
                "Mampu memberikan asuhan keperawatan holistik pada berbagai tingkat kesehatan",
                "Mampu melakukan triage dan manajemen pasien akut",
                "Mampu memimpin tim kesehatan dalam memberikan pelayanan",
                "Mampu mengambil keputusan klinis yang tepat dan bertanggung jawab",
                "Mampu melakukan advokasi untuk kesejahteraan pasien dan keluarga",
              ].map((kompetensi, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-primary-600 font-bold mt-1">→</span>
                  <span className="text-gray-700">{kompetensi}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kurikulum */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Struktur Kurikulum</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-4 py-3">Kategori</th>
                    <th className="px-4 py-3">Komponen Pendidikan</th>
                    <th className="px-4 py-3">SKS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { kat: "Teori", komp: "Keperawatan Medikal Bedah, Kritis, Komunitas", sks: "8" },
                    { kat: "Praktik", komp: "Praktik Klinik di RS Mitra", sks: "20" },
                    { kat: "Akademik", komp: "Seminar, Ujian Komprehensif", sks: "4" },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{item.kat}</td>
                      <td className="px-4 py-3 text-gray-700">{item.komp}</td>
                      <td className="px-4 py-3 text-gray-700">{item.sks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prospek Karir */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prospek Karir</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Ners di Rumah Sakit (Medikal Bedah, ICU, IGD)",
                "Ners di Klnik dan Klinik Rawat Inap",
                "Ners Komunitas di Puskesmas",
                "Kepala Ruangan / Supervisor Keperawatan",
                "Tenaga Pengajar Keperawatan",
                "Ners di Fasilitas Kesehatan Internasional",
              ].map((karir, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-primary-600 text-2xl">💼</span>
                  <span className="text-gray-700">{karir}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Persyaratan Pendaftaran */}
          <div className="p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Persyaratan Pendaftaran</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Lulusan S1 Keperawatan atau Program Beasiswa Ners
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Lulus ujian masuk profesi ners
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Memiliki motivasi tinggi dalam keperawatan
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Sehat jasmani dan rohani
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Siap untuk kegiatan praktik klinik intensif
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t">
            <p className="text-gray-600 mb-6">Tertarik bergabung dengan program kami?</p>
            <a href="/kontak" className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
