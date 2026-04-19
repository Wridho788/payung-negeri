import CTA from "@/components/sections/home/cta";
import Hero from "@/components/sections/home/hero";
import Programs from "@/components/sections/home/programs";
import Advantages from "@/components/sections/home/advantages";
import DigitalServices from "@/components/sections/home/digital-services";
import About from "@/components/sections/home/about";
import Outcomes from "@/components/sections/home/outcomes";
import Lecturers from "@/components/sections/home/lecturers";
import Location from "@/components/sections/home/location";
import News, { NewsSkeleton } from "@/components/sections/home/news";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Highlight Program (Fakultas/Prodi) */}
      <Programs />

      {/* 3. Keunggulan Kampus */}
      <Advantages />

      {/* 4. Layanan Digital */}
      {/* <DigitalServices /> */}

      {/* 5. Tentang Singkat Kampus */}
      <About />

      {/* 6. Prospek & Outcome (Karir/Lulusan) */}
      <Outcomes />

      {/* 7. Dosen / Tenaga Pengajar */}
      <Lecturers />

      {/* 8. Lokasi Kampus */}
      <Location />

      {/* 9. Berita */}
      <Suspense fallback={<NewsSkeleton />}>
        <News />
      </Suspense>

      {/* 10. CTA Final */}
      <CTA />
    </>
  );
}