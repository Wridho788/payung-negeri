"use client";

import Image from "next/image";

interface LecturerCardProps {
  name: string;
  position: string;
  image: string;
}

export default function LecturerCard({ name, position, image }: LecturerCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info Container */}
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
          {name}
        </h3>
        <p className="text-sm text-neutral-500">
          {position}
        </p>
      </div>
    </div>
  );
}
