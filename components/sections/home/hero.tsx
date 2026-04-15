"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <Image
        src="/hero.jpg"
        alt="Mahasiswa Institut Kesehatan Payung Negeri"
        width={1920}
        height={1080}
        className="h-auto w-full"
        sizes="100vw"
        priority
      />
    </section>
  );
}