
import React from "react";
import { MdVerified, MdScience, MdWork, MdPeople, MdSchool, MdHandshake } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

const ADVANTAGES = [
  {
    icon: <MdVerified size={44} color="#009ADB" style={{ background: "rgba(0,154,219,0.1)", borderRadius: "50%", padding: 6 }} />,
    title: "Akreditasi Baik Sekali",
    desc: "Menjamin kualitas pendidikan",
  },
  {
    icon: <MdScience size={44} color="#009ADB" style={{ background: "rgba(0,154,219,0.1)", borderRadius: "50%", padding: 6 }} />,
    title: "Fasilitas Lengkap",
    desc: "Laboratorium dan sarana modern",
  },
  {
    icon: <MdWork size={44} color="#009ADB" style={{ background: "rgba(0,154,219,0.1)", borderRadius: "50%", padding: 6 }} />,
    title: "Pengalaman Praktik Klinik",
    desc: "Langsung di fasilitas kesehatan",
  },
  {
    icon: <FaChalkboardTeacher size={44} color="#009ADB" style={{ background: "rgba(0,154,219,0.1)", borderRadius: "50%", padding: 6 }} />,
    title: "Tenaga Pengajar Profesional",
    desc: "Dosen berpengalaman di bidangnya",
  },
  {
    icon: <MdSchool size={44} color="#009ADB" style={{ background: "rgba(0,154,219,0.1)", borderRadius: "50%", padding: 6 }} />,
    title: "Kurikulum Berbasis Kompetensi",
    desc: "Sesuai kebutuhan dunia kerja",
  },
  {
    icon: <MdHandshake size={44} color="#009ADB" style={{ background: "rgba(0,154,219,0.1)", borderRadius: "50%", padding: 6 }} />,
    title: "Jaringan Kerja Sama Luas",
    desc: "Dengan rumah sakit dan institusi",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Keunggulan Kampus</h2>
        <p className="mb-10 text-gray-600">Komitmen kami dalam memberikan pendidikan berkualitas</p>
        <ul className="grid gap-6 grid-cols-2 md:grid-cols-3">
          {ADVANTAGES.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-4 bg-transparent rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <span className="mb-2 md:mb-0 md:shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
