import type { NewsItem } from "@/types/news";

export const news: NewsItem[] = [
  {
    slug: "dies-natalis-2026",
    title: "Dies Natalis ke-10 Institut Kesehatan Payung Negeri",
    date: "2026-04-10",
    image: "/berita1.jpg",
    excerpt: "Institut Kesehatan Payung Negeri merayakan Dies Natalis ke-10 dengan berbagai rangkaian acara ilmiah dan hiburan.",
    content: `Institut Kesehatan Payung Negeri menggelar Dies Natalis ke-10 pada 10 April 2026. Acara ini diisi dengan seminar nasional, lomba karya tulis ilmiah, dan pentas seni mahasiswa. Rektor dalam sambutannya menyampaikan harapan agar kampus semakin maju dan berkontribusi untuk masyarakat.`
  },
  {
    slug: "akreditasi-unggul-2026",
    title: "Prodi Keperawatan Raih Akreditasi Unggul",
    date: "2026-03-28",
    image: "/berita2.jpg",
    excerpt: "Program Studi Keperawatan berhasil meraih akreditasi Unggul dari LAM-PTKes tahun 2026.",
    content: `Prestasi membanggakan diraih Prodi Keperawatan Institut Kesehatan Payung Negeri dengan memperoleh akreditasi Unggul. Hal ini menjadi bukti kualitas pendidikan dan pelayanan yang diberikan kepada mahasiswa dan masyarakat.`
  },
  {
    slug: "kerjasama-internasional-2026",
    title: "Kerjasama Internasional dengan Universitas di Jepang",
    date: "2026-02-15",
    image: "/berita3.jpg",
    excerpt: "Institut Kesehatan Payung Negeri menandatangani MoU dengan universitas ternama di Jepang untuk pengembangan riset dan pertukaran mahasiswa.",
    content: `Penandatanganan MoU antara Institut Kesehatan Payung Negeri dan salah satu universitas di Jepang dilakukan pada 15 Februari 2026. Kerjasama ini meliputi pertukaran mahasiswa, dosen, serta kolaborasi riset di bidang kesehatan.`
  }
];


export function getAllNews() {
  return news;
}

export function getNewsBySlug(slug: string) {
  return news.find((item) => item.slug === slug);
}