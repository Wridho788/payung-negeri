"use client";

export default function D3KeperawatanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              D3 Keperawatan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Program Diploma III Keperawatan dengan fokus praktis dan siap kerja
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
              Program Diploma III Keperawatan adalah program pendidikan vokasional yang menyiapkan perawat
              terampil untuk memberikan asuhan keperawatan berkualitas. Program ini menekankan pada pengalaman
              praktik klinis langsung dan siap bekerja di berbagai fasilitas kesehatan.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-xl font-bold text-primary-600 mb-3">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi program studi penghasil perawat vokasional terampil dan profesional dalam
                memberikan asuhan keperawatan berkualitas.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Misi</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Menyelenggarakan pendidikan keperawatan vokasional berkualitas</li>
                <li>✓ Menghasilkan perawat siap kerja dan terampil</li>
                <li>✓ Meningkatkan mutu pelayanan keperawatan di masyarakat</li>
              </ul>
            </div>
          </div>

          {/* Kompetensi Lulusan */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kompetensi Lulusan</h3>
            <div className="space-y-4">
              {[
                "Mampu memberikan asuhan keperawatan dasar pada pasien sakit dan sehat",
                "Mampu melakukan prosedur keperawatan dengan aman dan sterile",
                "Mampu berkomunikasi efektif dengan pasien dan keluarga",
                "Mampu melakukan pendokumentasian asuhan keperawatan dengan benar",
                "Mampu bekerja dalam tim kesehatan secara kolaboratif",
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
                    { sem: "1", mk: "Anatomi, Fisiologi, Dasar Keperawatan", sks: "12" },
                    { sem: "2", mk: "Keperawatan Dasar, Patologi", sks: "12" },
                    { sem: "3", mk: "Keperawatan Medikal Bedah, Praktik Klinik", sks: "14" },
                    { sem: "4", mk: "Keperawatan Komunitas, Tugas Akhir", sks: "12" },
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
                "Perawat di Rumah Sakit Umum",
                "Perawat di Unit Khusus (ICU, IGD, Kamar Operasi)",
                "Perawat di Klinik dan Layanan Kesehatan Primär",
                "Perawat Desa",
                "Perawat Industri",
                "Lanjut ke Program S1 Keperawatan",
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
                Siap melakukan praktik klinik di berbagai tempat
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
