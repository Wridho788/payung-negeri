import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      { label: "Sejarah", href: "/profil/sejarah" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Tenaga Pengajar", href: "/profil/tenaga-pengajar" },
      { label: "Makna Lambang", href: "/profil/makna-lambang" },
      { label: "Kata Sambutan Rektor", href: "/profil/kata-sambutan-rektor" },
    ],
  },
  {
    label: "Fakultas",
    children: [
      {
        label: "Fakultas Kesehatan & Informatika",
        children: [
          {
            label: "S1-Ilmu Kesehatan Masyarakat",
            href: "/fakultas/s1-ilmu-kesehatan-masyarakat",
          },
          {
            label: "S1-Bidan dan Profesi Bidan",
            href: "/fakultas/s1-bidan-dan-profesi-bidan",
          },
          {
            label: "S1-Informatika Kesehatan",
            href: "/fakultas/s1-informatika-kesehatan",
          },
          { label: "D3-Kebidanan", href: "/fakultas/d3-kebidanan" },
        ],
      },
      {
        label: "Fakultas Keperawatan",
        children: [
          { label: "Profesi Ners", href: "/fakultas/profesi-ners" },
          { label: "S1-Keperawatan", href: "/fakultas/s1-keperawatan" },
          { label: "D3-Keperawatan", href: "/fakultas/d3-keperawatan" },
        ],
      },
    ],
  },
  {
    label: "Layanan",
    children: [
      { label: "Portal Mahasiswa", href: "https://pmb.payungnegeri.ac.id" },
      { label: "Portal Dosen", href: "https://lecturer.payungnegeri.ac.id/" },
      { label: "E-Library", href: "https://pustaka.payungnegeri.ac.id/" },
      { label: "E-Lab", href: "https://elab.payungnegeri.ac.id/" },
      { label: "E-Learning", href: "https://simbel.payungnegeri.ac.id/" },
      { label: "Pusat Karir", href: "http://alumni.payungnegeri.ac.id/" },
      { label: "SIPPem", href: "https://sippem.payungnegeri.ac.id/" },
      { label: "SIMUT", href: "https://www.simut.payungnegeri.ac.id/" },
      { label: "SIMoney", href: "https://student.payungnegeri.ac.id/" },
      { label: "Alumni", href: "http://alumni.payungnegeri.ac.id/" },
    ],
  },
  {
    label: "Lembaga",
    children: [
      {
        label: "Penelitian dan Pengabdian Masyarakat",
        href: "/lembaga/penelitian-pengabdian",
      },
      { label: "Penjamin Mutu", href: "/lembaga/penjamin-mutu" },
      { label: "Kerja Sama", href: "/lembaga/kerjasama" },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];
