import type { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl font-bold tracking-tight text-neutral-900">{children}</h1>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">{children}</h2>;
}

export function Text({ children }: { children: ReactNode }) {
  return <p className="text-base text-neutral-700 leading-relaxed">{children}</p>;
}