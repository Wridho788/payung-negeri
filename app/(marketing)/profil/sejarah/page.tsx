import ProfileHero from "@/components/sections/profile/hero";
import RichText from "@/components/sections/profile/rich-text";
import { sejarah, sejarahImageAlt, sejarahImageUrl } from "@/data/profile/sejarah";

export const metadata = {
  title: "Sejarah Kampus - Payung Negeri",
  description: "Sejarah Institut Kesehatan Payung Negeri",
};

export default function SejarahPage() {
  return (
    <>
      <ProfileHero title="Sejarah Kampus" />
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm">
          <img src={sejarahImageUrl} alt={sejarahImageAlt} className="h-auto w-full" loading="lazy" />
        </div>
      </section>
      <RichText content={sejarah} />
    </>
  );
}