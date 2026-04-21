
import React from "react";
import { MdMedicalServices, MdChildCare, MdGroups, MdManageAccounts, MdScience, MdComputer } from "react-icons/md";

const OUTCOMES = [
  {
    icon: <MdMedicalServices size={48} color="#FCAF35" style={{ background: "rgba(252,175,53,0.15)", borderRadius: "50%", padding: 8 }} />,
    title: "Perawat Profesional",
    desc: "Bekerja di rumah sakit dan klinik",
  },
  {
    icon: <MdChildCare size={48} color="#FCAF35" style={{ background: "rgba(252,175,53,0.15)", borderRadius: "50%", padding: 8 }} />,
    title: "Bidan",
    desc: "Pelayanan kesehatan ibu dan anak",
  },
  {
    icon: <MdGroups size={48} color="#FCAF35" style={{ background: "rgba(252,175,53,0.15)", borderRadius: "50%", padding: 8 }} />,
    title: "Tenaga Kesehatan Masyarakat",
    desc: "Program kesehatan dan edukasi masyarakat",
  },
  {
    icon: <MdComputer size={48} color="#FCAF35" style={{ background: "rgba(252,175,53,0.15)", borderRadius: "50%", padding: 8 }} />,
    title: "Health IT Specialist",
    desc: "Pengelolaan data dan sistem kesehatan",
  },
  {
    icon: <MdManageAccounts size={48} color="#FCAF35" style={{ background: "rgba(252,175,53,0.15)", borderRadius: "50%", padding: 8 }} />,
    title: "Manajer Layanan Kesehatan",
    desc: "Mengelola operasional fasilitas kesehatan",
  },
  {
    icon: <MdScience size={48} color="#FCAF35" style={{ background: "rgba(252,175,53,0.15)", borderRadius: "50%", padding: 8 }} />,
    title: "Peneliti Kesehatan",
    desc: "Pengembangan ilmu dan riset kesehatan",
  },
];

export default function Outcomes() {
  return (
    <section className="py-20 bg-[rgba(0,154,219,0.05)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Prospek Karier Lulusan</h2>
        <p className="mb-10 text-gray-600">Lulusan kami memiliki peluang karier di berbagai bidang kesehatan</p>
        <ul className="grid gap-6 grid-cols-2 md:grid-cols-3">
          {OUTCOMES.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-4 bg-white rounded-xl p-5 shadow hover:shadow-lg hover:border-primary border border-transparent transition-all duration-200"
            >
              <span className="mb-2 md:mb-0 md:shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-sm text-gray-600 bg-white rounded-lg p-4 border-l-4 border-primary">
          Sebagian profesi memerlukan kelanjutan pendidikan ke tahap profesi (Ners, dll)
        </div>
        <a href="https://pmb.payungnegeri.ac.id" className="inline-block mt-6 text-primary font-semibold hover:underline">Mulai perjalanan karier Anda bersama kami &rarr;</a>
      </div>
    </section>
  );
}
