import FacultyHero from "@/components/sections/faculty/hero";
import ProgramCard from "@/components/ui/program-card";
import { faculties } from "@/data/faculties";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ faculty: string }>;
};

export async function generateStaticParams() {
  return faculties.map((fac) => ({ faculty: fac.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { faculty } = await params;
  const foundFaculty = faculties.find((entry) => entry.slug === faculty);

  if (!foundFaculty) {
    return { title: "Fakultas Tidak Ditemukan" };
  }

  return {
    title: `${foundFaculty.name} - Payung Negeri`,
    description: foundFaculty.description,
  };
}

export default async function FacultyPage({ params }: PageProps) {
  const { faculty } = await params;
  const foundFaculty = faculties.find((entry) => entry.slug === faculty);

  if (!foundFaculty) {
    notFound();
  }

  return (
    <>
      <FacultyHero title={foundFaculty.name} description={foundFaculty.description} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundFaculty.programs.map((prog) => (
            <ProgramCard
              key={prog.slug}
              title={prog.name}
              description={prog.description}
              image={prog.image}
              href={`/fakultas/${foundFaculty.slug}/${prog.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
