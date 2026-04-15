import ProfileHero from "@/components/sections/profile/hero";
import Organization from "@/components/sections/profile/organization";

export const metadata = {
  title: "Struktur Organisasi - Payung Negeri",
  description: "Struktur organisasi Institut Kesehatan Payung Negeri",
};

export default function StrukturPage() {
  return (
    <>
      <ProfileHero title="Struktur Organisasi" />
      <Organization />
    </>
  );
}