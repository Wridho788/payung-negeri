export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Testimoni</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-300 rounded-xl bg-white">
            <p>&quot;Kampus ini sangat membantu karir saya setelah lulus. Materinya relevan dan dosennya suportif.&quot;</p>
            <p className="mt-4 text-sm font-medium">Alumni Keperawatan</p>
          </div>
          <div className="p-6 border border-neutral-300 rounded-xl bg-white">
            <p>&quot;Pembelajaran digitalnya memudahkan saya tetap produktif dan fokus pada praktik lapangan.&quot;</p>
            <p className="mt-4 text-sm font-medium">Mahasiswa Informatika Kesehatan</p>
          </div>
        </div>
      </div>
    </section>
  );
}