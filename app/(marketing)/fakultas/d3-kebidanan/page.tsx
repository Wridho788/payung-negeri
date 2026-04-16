"use client";

export default function D3KebidananPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-linear-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              D3 Kebidanan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Program Diploma III Kebidanan dengan fokus praktis dan siap kerja
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
              Program Diploma III Kebidanan dirancang untuk menghasilkan tenaga kebidanan profesional yang
              mampu memberikan asuhan kebidanan berkualitas. Program ini menekankan praktik klinis langsung
              dan siap bekerja di berbagai fasilitas kesehatan.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-xl font-bold text-primary-600 mb-3">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi program studi penghasil tenaga kebidanan profesional yang terampil dan
                berkomitmen dalam pelayanan kebidanan.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Misi</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Menyelenggarakan pendidikan kebidanan praktis dan berkualitas</li>
                <li>✓ Menghasilkan bidan profesional siap kerja</li>
                <li>✓ Meningkatkan mutu pelayanan kebidanan masyarakat</li>
              </ul>
            </div>
          </div>

          {/* Kompetensi Lulusan */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kompetensi Lulusan</h3>
            <div className="space-y-4">
              {[
                "Mampu memberikan asuhan kebidanan pada kehamilan normal",
                "Mampu menatalaksana persalinan normal",
                "Mampu memberikan perawatan neonatal dan bayi baru lahir",
                "Mampu mendeteksi dini komplikasi dan melakukan rujukan",
                "Mampu berkomunikasi efektif dengan klien dan keluarga",
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
                    { sem: "1", mk: "Anatomi, Fisiologi, Dasar Kebidanan", sks: "12" },
                    { sem: "2", mk: "Kehamilan Normal, Patologi Obstetri Dasar", sks: "12" },
                    { sem: "3", mk: "Persalinan Normal, Praktik Klinik", sks: "14" },
                    { sem: "4", mk: "Nifas, Bayi Baru Lahir, Tugas Akhir", sks: "12" },
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
                "Bidan di Puskesmas",
                "Bidan di Rumah Sakit",
                "Bidan di Klinik Bersalin",
                "Bidan Desa",
                "Bidan Praktik Mandiri",
                "Kader Kesehatan di Masyarakat",
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
                Nilai rata-rata Raport minimal 70
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
                Siap praktik klinis di berbagai tempat
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
