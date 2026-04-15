type VisionMissionProps = {
  visi: string;
  misi: string[];
  tujuan: string[];
  tataNilai: string[];
  imageUrl: string;
  imageAlt: string;
};

export default function VisionMission({ visi, misi, tujuan, tataNilai, imageUrl, imageAlt }: VisionMissionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:linear-gradient(120deg,rgba(0,154,219,0.07)_0%,transparent_36%,rgba(252,175,53,0.08)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 grid gap-4 rounded-2xl border border-primary-100 bg-white p-5 shadow-[0_20px_50px_-35px_rgba(0,122,176,0.4)] sm:grid-cols-3 sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Pilar Utama</p>
            <p className="mt-2 text-2xl font-bold text-primary-700">4 Misi</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Target Transformasi</p>
            <p className="mt-2 text-2xl font-bold text-primary-700">2042</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Arah Institusi</p>
            <p className="mt-2 text-2xl font-bold text-primary-700">Digitalisasi Kesehatan</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <article className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_24px_64px_-42px_rgba(0,122,176,0.6)] lg:col-span-8">
            <img src={imageUrl} alt={imageAlt} loading="lazy" className="h-64 w-full object-cover sm:h-80 lg:h-96" />
            <div className="space-y-5 p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">Visi Institusi</p>
              <h2 className="max-w-3xl text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-[2.1rem]">
                Kompas Strategis Pengembangan Institut Kesehatan Payung Negeri
              </h2>
              <p className="border-l-4 border-primary-500 pl-4 text-base leading-8 text-neutral-700 sm:text-lg">"{visi}"</p>
            </div>
          </article>

          <article className="rounded-2xl border border-tertiary-100 bg-white p-6 shadow-[0_24px_64px_-42px_rgba(216,154,42,0.6)] sm:p-8 lg:col-span-4">
            <div className="mb-6 border-b border-tertiary-100 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-700">Misi Strategis</p>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">Fokus Pelaksanaan</h3>
            </div>

            <ul className="space-y-4">
              {misi.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-xl border border-tertiary-100 bg-[#fffcf6] p-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tertiary-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-neutral-700 sm:text-[0.95rem]">{item}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_24px_64px_-42px_rgba(0,122,176,0.55)] sm:p-8 lg:col-span-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-neutral-900">Tujuan</h3>
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">Outcome</span>
            </div>

            <ol className="space-y-3">
              {tujuan.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-neutral-700 sm:text-[0.95rem]">{item}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-neutral-300 bg-white p-6 shadow-[0_24px_64px_-46px_rgba(41,19,9,0.45)] sm:p-8 lg:col-span-7">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-neutral-300 pb-4">
              <h3 className="text-2xl font-bold text-neutral-900">Tata Nilai</h3>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">Budaya Akademik</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {tataNilai.map((item) => (
                <div key={item} className="rounded-xl border border-neutral-300 bg-[#fcfcfc] p-4">
                  <p className="text-sm leading-7 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}