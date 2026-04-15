import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "bg-white border border-neutral-300 rounded-xl p-4 transition hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}