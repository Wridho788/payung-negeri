import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ProgramCard({ title, description, image, href }: ProgramCardProps) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="relative w-full h-40 bg-neutral-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-neutral-700 line-clamp-2">{description}</p>

        <Link href={href}>
          <Button variant="secondary" size="sm">
            Lihat Detail
          </Button>
        </Link>
      </div>
    </Card>
  );
}