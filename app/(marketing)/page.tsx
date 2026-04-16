import CTA from "@/components/sections/home/cta";
import Hero from "@/components/sections/home/hero";
import Lecturers from "@/components/sections/home/lecturers";
import Location from "@/components/sections/home/location";
import News, { NewsSkeleton } from "@/components/sections/home/news";
import Programs from "@/components/sections/home/programs";
import Stats from "@/components/sections/home/stats";
import Testimonials from "@/components/sections/home/testimonials";
import WhyUs from "@/components/sections/home/why-us";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyUs />
      <Lecturers />
      <Stats />
      <Suspense fallback={<NewsSkeleton />}>
        <News />
      </Suspense>
      <CTA />
      <Location />
    </>
  );
}