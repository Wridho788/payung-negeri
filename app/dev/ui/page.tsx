import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { H1, H2, Text } from "@/components/ui/typography";
import Textarea from "@/components/ui/textarea";

export default function UIDevPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <H1>UI Playground</H1>

      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button loading>Loading</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input placeholder="Input example" />
        <Textarea placeholder="Textarea example" />
      </div>

      <Card>
        <H2>Card Component</H2>
        <Text>Komponen card reusable untuk section list, berita, dan konten promosi.</Text>
      </Card>
    </section>
  );
}