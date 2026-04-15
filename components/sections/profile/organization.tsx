import Image from "next/image";

export default function Organization() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Image src="/images/struktur.png" alt="Struktur Organisasi" width={1000} height={600} className="rounded-xl border border-neutral-300 w-full h-auto" />
    </div>
  );
}