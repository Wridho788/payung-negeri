import Button from "@/components/ui/button";
import { faculties } from "@/data/faculties";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ faculty: string; program: string }>;
};

export async function generateStaticParams() {
  return faculties.flatMap((faculty) =>
    faculty.programs.map((program) => ({
      faculty: faculty.slug,
      program: program.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { faculty, program } = await params;
  const foundFaculty = faculties.find((entry) => entry.slug === faculty);
  const foundProgram = foundFaculty?.programs.find((entry) => entry.slug === program);

  if (!foundProgram) {
    return { title: "Program Tidak Ditemukan" };
  }

  return {
    title: `${foundProgram.name} - Payung Negeri`,
    description: foundProgram.description,
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { faculty, program } = await params;
  const foundFaculty = faculties.find((entry) => entry.slug === faculty);
  const foundProgram = foundFaculty?.programs.find((entry) => entry.slug === program);

  if (!foundProgram) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <div>
        <h1 className="text-3xl font-bold">{foundProgram.name}</h1>
        <p className="mt-3 text-neutral-700 leading-8">{foundProgram.description}</p>
      </div>

      <div className="relative w-full h-64">
        <Image src={foundProgram.image} alt={foundProgram.name} fill className="object-cover rounded-xl border border-neutral-300" />
      </div>

      <div>
        <h2 className="text-xl font-semibold">Prospek Karier</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">
          {foundProgram.prospek.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <a href="https://pmb.payungnegeri.ac.id" target="_blank" rel="noopener noreferrer">
          <Button size="lg">Daftar Sekarang</Button>
        </a>
      </div>
    </div>
  );
}