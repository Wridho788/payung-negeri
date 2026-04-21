"use client";

import Image from "next/image";

export default function KataSambutanRektorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-linear-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kata Sambutan Rektor
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Sambutan dan visi kepemimpinan Institut Kesehatan Payung Negeri Pekanbaru
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Photo & Title */}
          <div className="mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo */}
            <div className="shrink-0">
              <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/rektor.png"
                  alt="Rektor Institut Kesehatan Payung Negeri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                DR.HJ.Deswinda, S.Kep, Ns, M.Kes
              </h2>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                Rektor Institut Kesehatan Payung Negeri Pekanbaru
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sejak tahun 20XX memimpin institusi dengan dedikasi penuh untuk memberikan
                pendidikan kesehatan terbaik kepada generasi muda Indonesia.
              </p>
            </div>
          </div>

          {/* Sambutan */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed border-t pt-12">
            <p>
              Assalamu'alaikum Wa Rahmatullahi Wa Barakatuh.
            </p>

            <p>
              Dengan segala kerendahan hati, saya menyampaikan sambutan hangat kepada seluruh
              civitas akademika, mahasiswa, keluarga besar, dan mitra-mitra strategis Institut
              Kesehatan Payung Negeri Pekanbaru.
            </p>

            <p>
              Di era transformasi digital dan perubahan global yang pesat, Institut Kesehatan
              Payung Negeri Pekanbaru terus berkomitmen untuk memberikan pendidikan kesehatan
              berkualitas tinggi yang relevan dengan kebutuhan industri dan masyarakat. Kami
              percaya bahwa pendidikan adalah kunci utama dalam menghasilkan profesional kesehatan
              yang kompeten, beretika, dan siap memimpin perubahan positif.
            </p>

            <p>
              Selama perjalanan panjang institusi kami, kami telah meraih berbagai prestasi akademik
              dan profesional. Namun, kami menyadari bahwa prestasi ini adalah hasil dari kerja keras
              seluruh elemen institusi dan dukungan dari eksternal. Oleh karena itu, kami terus
              melakukan pembenahan dan inovasi dalam proses pembelajaran, penelitian, dan pengabdian
              kepada masyarakat.
            </p>

            <p>
              Visi kami adalah menjadi institusi pendidikan kesehatan yang diakui secara nasional
              dan internasional dalam menghasilkan tenaga kesehatan profesional yang berkompetensi,
              berkarakter, dan berkontribusi pada pembangunan kesehatan masyarakat. Untuk itu, kami
              terus meningkatkan:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg space-y-3 my-6">
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">1.</span>
                <div>
                  <strong className="text-gray-900">Kualitas Pembelajaran</strong>
                  <p className="text-gray-700 mt-1">
                    Melalui pengembangan kurikulum berbasis kompetensi dan metode pembelajaran
                    inovatif
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">2.</span>
                <div>
                  <strong className="text-gray-900">Kompetensi Pendidik</strong>
                  <p className="text-gray-700 mt-1">
                    Melalui pelatihan berkelanjutan dan pengembangan profesional dosen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">3.</span>
                <div>
                  <strong className="text-gray-900">Infrastruktur & Fasilitas</strong>
                  <p className="text-gray-700 mt-1">
                    Dengan investasi pada laboratorium modern dan teknologi pendidikan terkini
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">4.</span>
                <div>
                  <strong className="text-gray-900">Penelitian & Pengabdian</strong>
                  <p className="text-gray-700 mt-1">
                    Untuk mengatasi permasalahan kesehatan masyarakat yang terus berkembang
                  </p>
                </div>
              </div>
            </div>

            <p>
              Kepada mahasiswa, saya mengajak untuk memanfaatkan setiap kesempatan belajar dengan
              sebaik-baiknya, tidak hanya menguasai teori tetapi juga mengembangkan keterampilan
              praktis dan soft skills yang dibutuhkan dalam profesi kesehatan. Jadilah agen perubahan
              yang membawa dampak positif bagi masyarakat.
            </p>

            <p>
              Kepada seluruh dosen dan staf, terima kasih atas dedikasi dan kerja keras yang luar
              biasa. Semoga kita dapat terus bersinergi dalam mewujudkan visi bersama untuk
              menjadikan institusi ini sebagai pusat keunggulan pendidikan kesehatan.
            </p>

            <p>
              Akhir kata, semoga Institut Kesehatan Payung Negeri Pekanbaru terus berkembang dan
              memberikan kontribusi nyata bagi kemajuan kesehatan masyarakat Indonesia. Semoga kita
              semua diberikan kesehatan dan kesuksesan dalam setiap langkah.
            </p>

            <p>
              Wassalamu'alaikum Wa Rahmatullahi Wa Barakatuh.
            </p>

            <div className="mt-8 pt-6 border-t">
              <p className="font-semibold text-gray-900">Hormat,</p>
              <p className="text-gray-700 mt-4">Rektor</p>
              <p className="text-gray-700">Institut Kesehatan Payung Negeri Pekanbaru</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
