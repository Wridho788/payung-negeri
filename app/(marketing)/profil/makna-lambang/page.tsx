"use client";

import Image from "next/image";

export default function MaknaLambangPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-linear-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Makna Lambang
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Simbol identitas Institut Kesehatan Payung Negeri Pekanbaru
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo Container */}
          <div className="mb-16 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/logo1.svg"
                alt="Logo Institut Kesehatan Payung Negeri"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Pengantar */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Identitas Visual Institut
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Logo Institut Kesehatan Payung Negeri Pekanbaru merupakan representasi visual
                dari nilai-nilai, misi, dan visi institusi. Setiap elemen dalam lambang ini
                memiliki makna mendalam yang mencerminkan komitmen kami terhadap pendidikan
                kesehatan berkualitas dan keunggulan akademik.
              </p>
            </div>

            {/* Makna Elemen */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Makna Elemen-Elemen Lambang
              </h3>
              <div className="space-y-6">
                {/* Element 1 */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    🔵 Warna Biru (Payung)
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Melambangkan kepercayaan, stabilitas, dan profesionalisme. Warna biru juga
                    mewakili "Payung Negeri" sebagai perlindungan dan dukungan dalam perjalanan
                    pendidikan mahasiswa.
                  </p>
                </div>

                {/* Element 2 */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    💛 Warna Kuning (Cahaya)
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Melambangkan pencerahan, pengetahuan, dan optimisme. Cahaya kuning menunjukkan
                    komitmen institusi untuk menerangi jalan menuju masa depan yang cerah bagi
                    setiap mahasiswa.
                  </p>
                </div>

                {/* Element 3 */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    ✨ Simbol Payung
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Payung melambangkan perlindungan, dukungan, dan kepedulian. Ini merepresentasikan
                    komitmen institusi untuk melindungi dan membimbing mahasiswa dalam pencapaian
                    tujuan akademik dan profesional mereka.
                  </p>
                </div>

                {/* Element 4 */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    🎓 Simbol Kesehatan
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Elemen kesehatan dalam lambang mencerminkan fokus utama institusi pada
                    pendidikan di bidang kesehatan dan dedikasi untuk menghasilkan profesional
                    kesehatan yang berkompeten dan berdedikasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Nilai Institusi */}
            <div className="mt-12 p-8 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Representasi Nilai Institusi
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lambang Institut Kesehatan Payung Negeri Pekanbaru secara keseluruhan
                merepresentasikan:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Keunggulan Akademik</strong> - Komitmen terhadap standar pendidikan tertinggi
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Integritas Profesional</strong> - Etika dan tanggung jawab dalam setiap aspek
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Inovasi & Pengembangan</strong> - Kesediaan untuk berkembang dan berinovasi
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Kepedulian Sosial</strong> - Dedikasi untuk menyelamatkan dan meningkatkan
                    kualitas hidup masyarakat
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
