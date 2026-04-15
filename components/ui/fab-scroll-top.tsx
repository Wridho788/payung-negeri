"use client";

import { useEffect, useState } from "react";

export default function FabScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-7 z-50 h-12 w-12 bg-neutral-900 text-white rounded-full shadow-lg"
      aria-label="Kembali ke atas"
    >
      ↑
    </button>
  );
}