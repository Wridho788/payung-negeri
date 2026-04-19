import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="mb-3 text-gray-700">Institut Kesehatan Payung Negeri Pekanbaru berkomitmen menghasilkan tenaga kesehatan profesional yang kompeten dan siap bersaing di dunia kerja.</p>
          <p className="mb-6 text-gray-700">Melalui pendekatan pembelajaran berbasis praktik dan dukungan tenaga pengajar berpengalaman, kami menghadirkan lingkungan akademik yang berkualitas dan relevan dengan kebutuhan industri.</p>
          <div className="flex gap-8 mb-4">
            <div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-gray-600 text-sm">Mahasiswa</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-gray-600 text-sm">Program Studi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-gray-600 text-sm">Tenaga Pengajar</div>
            </div>
          </div>
          <a href="/profil/sejarah" className="inline-block mt-2 text-primary font-semibold hover:underline">Pelajari Lebih Lanjut &rarr;</a>
        </div>
        <div className="flex-1 w-full max-w-xl">
          <Image
            src="/gedung.jpg"
            alt="Mahasiswa praktik di kampus"
            width={520}
            height={340}
            className="rounded-2xl object-cover"
            loading="lazy"
            quality={85}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
