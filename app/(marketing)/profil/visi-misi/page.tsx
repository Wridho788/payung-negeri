import ProfileHero from "@/components/sections/profile/hero";
import VisionMission from "@/components/sections/profile/vision-mission";
import { misi, tataNilai, tujuan, visi, visiImageAlt, visiImageUrl } from "@/data/profile/visi-misi";

export const metadata = {
  title: "Visi & Misi - Payung Negeri",
  description: "Visi dan misi Institut Kesehatan Payung Negeri",
};

export default function VisiMisiPage() {
  return (
    <>
      <ProfileHero title="Visi & Misi" />
      <VisionMission
        visi={visi}
        misi={misi}
        tujuan={tujuan}
        tataNilai={tataNilai}
        imageUrl={visiImageUrl}
        imageAlt={visiImageAlt}
      />
    </>
  );
}