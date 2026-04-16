"use client";

import { useState } from "react";
import Image from "next/image";
import LecturerCard from "@/components/ui/lecturer-card";

const allLecturers = [
  {
    id: 1,
    name: "Dr. Ahmad",
    position: "Dosen Keperawatan",
    department: "Keperawatan",
    image: "/rektor.png",
  },
  {
    id: 2,
    name: "Dr. Budi",
    position: "Dosen Kesehatan Masyarakat",
    department: "Kesehatan Masyarakat",
    image: "/rektor.png",
  },
  {
    id: 3,
    name: "Dr. Siti",
    position: "Dosen Rekam Medis",
    department: "Rekam Medis",
    image: "/rektor.png",
  },
  {
    id: 4,
    name: "Dr. Hendra",
    position: "Dosen Manajemen Kesehatan",
    department: "Manajemen Kesehatan",
    image: "/rektor.png",
  },
];

const departments = [
  "Semua",
  "Keperawatan",
  "Kesehatan Masyarakat",
  "Rekam Medis",
  "Manajemen Kesehatan",
];

export default function TenagaPengajarPage() {
  const [selectedDept, setSelectedDept] = useState("Semua");

  const filteredLecturers =
    selectedDept === "Semua"
      ? allLecturers
      : allLecturers.filter((lecturer) => lecturer.department === selectedDept);

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tenaga Pengajar Kami
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tim profesional berpengalaman yang siap mendukung kesuksesan akademik Anda
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Filter berdasarkan departemen
          </h3>
          <div className="flex flex-wrap gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDept === dept
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lecturers Grid */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filteredLecturers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredLecturers.map((lecturer) => (
                <LecturerCard
                  key={lecturer.id}
                  name={lecturer.name}
                  position={lecturer.position}
                  image={lecturer.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Tidak ada dosen untuk departemen ini
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
