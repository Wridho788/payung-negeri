import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full h-11 px-3 rounded-md border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
        className,
      )}
      {...props}
    />
  );
}