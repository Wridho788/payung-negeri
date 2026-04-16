"use client";

export default function BidanProfsiBidanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-linear-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              S1 Bidan dan Profesi Bidan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Program pendidikan Bidan terakreditasi dengan standar internasional
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
              Program S1 Bidan dan Profesi Bidan dirancang untuk menghasilkan bidan profesional yang kompeten
              dalam memberikan asuhan kebidanan berkualitas kepada ibu hamil, bersalin, nifas, bayi baru lahir,
              dan anak. Program ini menggabungkan teori dan praktik untuk mempersiapkan lulusan siap bekerja
              di berbagai layanan kesehatan.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-xl font-bold text-primary-600 mb-3">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi program studi penghasil bidan profesional, berkompetensi, dan berkarakter dalam pelayanan
                kebidanan.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Misi</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Menyelenggarakan pendidikan bidan berkualitas tinggi</li>
                <li>✓ Melaksanakan penelitian dalam bidang kebidanan</li>
                <li>✓ Memberikan pelayanan kebidanan kepada masyarakat</li>
              </ul>
            </div>
          </div>

          {/* Kompetensi Lulusan */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kompetensi Lulusan</h3>
            <div className="space-y-4">
              {[
                "Mampu memberikan asuhan kebidanan selama kehamilan, persalinan, dan nifas",
                "Mampu memberikan asuhan neonatal dan bayi baru lahir",
                "Mampu memberikan konseling dan pendidikan kesehatan reproduksi",
                "Mampu melakukan penatalaksanaan komplikasi obstetri dengan rujukan tepat",
                "Mampu bekerja sama dalam tim kesehatan multidisiplin",
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
                    <th className="px-4 py-3">Semester</th>
                    <th className="px-4 py-3">Mata Kuliah Utama</th>
                    <th className="px-4 py-3">SKS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { sem: "1-2", mk: "Anatomi, Fisiologi, Patologi", sks: "14" },
                    { sem: "3-4", mk: "Asuhan Kehamilan, Persalinan Normal", sks: "15" },
                    { sem: "5-6", mk: "Nifas, Bayi Baru Lahir, Patologi Obstetri", sks: "14" },
                    { sem: "7-8", mk: "Praktik Klinik, Skripsi, Profesi Bidan", sks: "11" },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{item.sem}</td>
                      <td className="px-4 py-3 text-gray-700">{item.mk}</td>
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
                "Bidan di Puskesmas dan Desa",
                "Bidan di Rumah Sakit dan Klinik Bersalin",
                "Bidan Praktik Mandiri",
                "Pendidik Kesehatan Ibu dan Anak",
                "Supervisor/Koordinator Kebidanan",
                "Instruktur Kebidanan di Institusi Pendidikan",
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
                Lulusan SMA/SMK/Sederajat
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Nilai rata-rata Raport minimal 75
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Lulus tes tulis dan wawancara
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Sehat jasmani dan rohani
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Memiliki komitmen dalam pelayanan kesehatan ibu dan anak
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
