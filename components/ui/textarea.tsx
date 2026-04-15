import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

export default function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full min-h-30 p-3 rounded-md border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
        className,
      )}
      {...props}
    />
  );
}