"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers } from "react-icons/fa";

export default function Stats() {
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeOut },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className="bg-[#002b5b] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-y-16 text-center sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-y-20"
        >
          <motion.div variants={item} className="space-y-5">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: easeInOut }}
            >
              <FaGraduationCap className="mx-auto h-11 w-11" />
            </motion.div>
            <p className="text-[3rem] font-bold leading-none">1992</p>
            <p className="text-[1.05rem] font-medium tracking-[0.08em] sm:text-[1.25rem]">DIBENTUK</p>
          </motion.div>

          <motion.div variants={item} className="space-y-5">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: easeInOut, delay: 0.15 }}
            >
              <FaGraduationCap className="mx-auto h-11 w-11" />
            </motion.div>
            <p className="text-[3rem] font-bold leading-none">1000+</p>
            <p className="text-[1.05rem] font-medium tracking-[0.08em] sm:text-[1.25rem]">MAHASISWA/I AKTIF</p>
          </motion.div>

          <motion.div variants={item} className="space-y-5">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: easeInOut, delay: 0.3 }}
            >
              <FaUsers className="mx-auto h-11 w-11" />
            </motion.div>
            <p className="text-[3rem] font-bold leading-none">10+</p>
            <p className="text-[1.05rem] font-medium tracking-[0.08em] sm:text-[1.25rem]">ORGANISASI MAHASISWA</p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <p className="text-[2.9rem] font-extrabold leading-none">UNGGUL</p>
            <p className="text-[1.6rem] font-medium tracking-[0.06em]">TERAKREDITASI</p>
            <p className="mx-auto max-w-md text-[1.05rem] leading-8 text-white/95">
              0704/LAM-PTKes/Akr/Sar/V/2025
              <br />
              &amp; 0705/LAM-PTKes/Akr/Por/V/2025
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <p className="text-[3.15rem] font-bold leading-none">30000+</p>
            <p className="text-[2.1rem] font-medium tracking-[0.05em]">ALUMNI</p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <p className="text-[3.15rem] font-bold leading-none">100+</p>
            <p className="text-[2.1rem] font-medium tracking-[0.05em]">PRESTASI</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}