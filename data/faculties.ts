export type Program = {
  slug: string;
  name: string;
  description: string;
  image: string;
  prospek: string[];
};

export type Faculty = {
  slug: string;
  name: string;
  description: string;
  programs: Program[];
};

export const faculties: Faculty[] = [
  {
    slug: "ilmu-kesehatan",
    name: "Fakultas Ilmu Kesehatan",
    description: "Fakultas yang berfokus pada penguatan kompetensi klinis dan layanan kesehatan masyarakat.",
    programs: [
      {
        slug: "keperawatan",
        name: "Keperawatan",
        description: "Program unggulan keperawatan berbasis praktik klinik dan empati layanan.",
        image: "/images/keperawatan.jpg",
        prospek: ["Perawat Rumah Sakit", "Perawat Komunitas", "Tenaga Edukator Kesehatan"],
      },
      {
        slug: "kesehatan-masyarakat",
        name: "Kesehatan Masyarakat",
        description: "Fokus pada pencegahan penyakit, epidemiologi, dan manajemen kesehatan publik.",
        image: "/images/kesmas.jpg",
        prospek: ["Epidemiolog", "Analis Kesehatan", "Health Promotion Specialist"],
      },
    ],
  },
  {
    slug: "teknologi-kesehatan",
    name: "Fakultas Teknologi Kesehatan",
    description: "Fakultas yang menggabungkan keahlian kesehatan dengan inovasi teknologi digital.",
    programs: [
      {
        slug: "informatika-kesehatan",
        name: "Informatika Kesehatan",
        description: "Integrasi sistem informasi, analitik data, dan layanan kesehatan digital.",
        image: "/images/infokes.jpg",
        prospek: ["Analis Sistem Kesehatan", "Data Analyst Healthcare", "Product Specialist HealthTech"],
      },
      {
        slug: "rekam-medis",
        name: "Rekam Medis",
        description: "Program pengelolaan data pasien dan dokumentasi medis sesuai standar nasional.",
        image: "/images/rekam-medis.jpg",
        prospek: ["Petugas Rekam Medis", "Medical Coder", "Administrator Informasi Kesehatan"],
      },
    ],
  },
];