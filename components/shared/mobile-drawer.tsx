"use client";

import { NAV_ITEMS } from "@/data/navigation";
import type { NavGroup, NavLeaf } from "@/types/navigation";
import Link from "next/link";
import { useState } from "react";

function isLeaf(item: NavLeaf | NavGroup): item is NavLeaf {
  return "href" in item;
}

function NestedItem({ item, closeDrawer }: { item: NavLeaf | NavGroup; closeDrawer: () => void }) {
  if (isLeaf(item)) {
    return (
      <Link href={item.href} onClick={closeDrawer} className="block py-1 text-sm text-neutral-700">
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <p className="font-semibold text-neutral-900">{item.label}</p>
      <div className="pl-4 mt-2 space-y-1">
        {item.children.map((child) => (
          <NestedItem key={child.label} item={child} closeDrawer={closeDrawer} />
        ))}
      </div>
    </div>
  );
}

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Buka menu navigasi" className="text-2xl leading-none">
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="w-4/5 max-w-sm bg-white h-full p-4 overflow-y-auto">
            <button onClick={() => setOpen(false)} className="text-sm text-neutral-700">
              Tutup
            </button>

            <nav className="mt-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <NestedItem key={item.label} item={item} closeDrawer={() => setOpen(false)} />
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}