"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
});

export default function WhyUs() {
  const ctaLinkClass = `${montserrat.className} relative mx-auto inline-flex w-fit items-center justify-center text-[1.18rem] font-extrabold uppercase tracking-[0.03em] text-[#0a2d57]/90 transition-all duration-300 hover:text-primary-700 hover:opacity-100 focus-visible:text-primary-700 focus-visible:opacity-100 focus-visible:outline-none sm:text-[1.35rem] lg:text-[1.62rem] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary-700/70 after:opacity-0 after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:opacity-100 focus-visible:after:scale-x-100 focus-visible:after:opacity-100`;

  return (
    <section className="bg-[#ececed] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          className={`${montserrat.className} mx-auto max-w-5xl text-[1.35rem] font-black uppercase leading-[1.14] tracking-[-0.012em] text-black sm:text-[2.05rem] lg:text-[2.85rem]`}
        >
          Institut Kesehatan Payung Negeri Pekanbaru
        </h2>
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35 }}
          className={`${montserrat.className} mt-2 text-[1.72rem] font-black uppercase leading-[1.08] tracking-[-0.018em] sm:text-[2.6rem] lg:text-[3.6rem]`}
        >
          <span className="bg-linear-to-r from-[#0a2d57] via-primary-700 to-primary-500 bg-clip-text text-transparent">
            Kampus Kesehatan Terbaik
          </span>
        </motion.h3>
        <h3
          className={`${montserrat.className} mt-3 text-[1.55rem] font-extrabold uppercase leading-[1.1] tracking-[-0.01em] text-black sm:text-[2.25rem] lg:text-[3.1rem]`}
        >
          di Provinsi Riau
        </h3>

        <div className="mx-auto mt-7 flex max-w-xl items-center gap-3 sm:mt-9">
          <span className="h-px flex-1 bg-[#0a2d57]/35" />
          <span className="h-2 w-2 rounded-full bg-[#0a2d57]" />
          <span className="h-px flex-1 bg-[#0a2d57]/35" />
        </div>

        <p className="mx-auto mt-14 max-w-5xl text-base font-medium leading-relaxed text-neutral-800 sm:text-[1.3rem] lg:mt-16 lg:text-[1.8rem] lg:leading-[1.4]">
          Berdiri Sejak Tahun 1992 Dari AKPER Kemudian STIKES Dan Berubah Bentuk Menjadi Institut
        </p>

        <div className="mt-20 grid grid-cols-1 gap-8 text-[#0a2d57] sm:grid-cols-3 sm:gap-10 lg:mt-24">
          <Link
            href="https://pmb.payungnegeri.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaLinkClass}
          >
            Daftar Sekarang
          </Link>
          <Link
            href="https://wa.me/6281111126604"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaLinkClass}
          >
            Konsultasi Online
          </Link>
          <Link
            href="https://www.instagram.com/payungnegeri.pmb/"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaLinkClass}
          >
            Layanan PMB
          </Link>
        </div>
      </div>
    </section>
  );
}