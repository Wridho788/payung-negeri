"use client";
import {FaWhatsapp } from "react-icons/fa";

export default function FabContact() {
  return (
    <a
      href="https://wa.me/6281111126604"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-xl"
      aria-label="Hubungi via WhatsApp"
    >
      <FaWhatsapp className="h-4 w-4 text-white lg:h-5 lg:w-5" />
    </a>
  );
}