"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import LecturerCard from "@/components/ui/lecturer-card";

const lecturersPreview = [
  {
    id: 1,
    name: "Dr. Ahmad",
    position: "Dosen Keperawatan",
    image: "/rektor.png",
  },
  {
    id: 2,
    name: "Dr. Budi",
    position: "Dosen Kesehatan Masyarakat",
    image: "/rektor.png",
  },
  {
    id: 3,
    name: "Dr. Siti",
    position: "Dosen Rekam Medis",
    image: "/rektor.png",
  },
  {
    id: 4,
    name: "Dr. Hendra",
    position: "Dosen Manajemen Kesehatan",
    image: "/rektor.png",
  },
];

export default function Lecturers() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Tenaga Pengajar Profesional
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tim dosen berpengalaman yang siap membimbing dan mendukung perkembangan akademik Anda
          </p>
        </div>

        {/* Grid Lecturers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {lecturersPreview.map((lecturer) => (
            <LecturerCard
              key={lecturer.id}
              name={lecturer.name}
              position={lecturer.position}
              image={lecturer.image}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/profil/tenaga-pengajar">
            <Button size="lg">
              Lihat Semua Dosen →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
