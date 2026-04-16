"use client";

import type { NavGroup, NavLeaf } from "@/types/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function isLeaf(item: NavLeaf | NavGroup): item is NavLeaf {
  return "href" in item;
}

export default function NavbarMenu({ item, isActive = false }: { item: NavGroup; isActive?: boolean }) {
  const [open, setOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setOpen(true);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 px-2 py-1 text-[1.1rem] font-semibold leading-none transition-colors xl:text-[1.2rem] ${
          isActive ? "text-[#006FA9]" : "text-[#007FB8] hover:text-[#0099DA]"
        }`}
      >
        {item.label}
        <ChevronDown className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-96 pt-2 pointer-events-auto">
          <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-lg">
            {item.children.map((child) =>
              isLeaf(child) ? (
                <Link
                  key={child.label}
                  href={child.href}
                  target={child.href.startsWith("http") ? "_blank" : undefined}
                  rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block rounded px-3 py-2 text-[0.95rem] text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-[#0099DA]"
                >
                  {child.label}
                </Link>
              ) : (
                <div key={child.label} className="py-1.5">
                  <p className="px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-[#007FB8]">{child.label}</p>
                  <div className="space-y-0.5">
                    {child.children.map((sub) =>
                      isLeaf(sub) ? (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block rounded px-6 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-[#0099DA]"
                        >
                          {sub.label}
                        </Link>
                      ) : null,
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}