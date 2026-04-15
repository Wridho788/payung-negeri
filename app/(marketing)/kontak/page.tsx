import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export const metadata = {
  title: "Kontak - Payung Negeri",
  description: "Hubungi Institut Kesehatan Payung Negeri",
};

export default function KontakPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Kontak</h1>
      <p className="mt-3 text-neutral-700">Silakan kirim pesan Anda melalui formulir berikut.</p>

      <form className="mt-8 space-y-4">
        <Input placeholder="Nama lengkap" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Pesan" />
      </form>
    </section>
  );
}