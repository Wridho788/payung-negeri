"use client";

import { NAV_ITEMS } from "@/data/navigation";
import type { NavGroup, NavLeaf } from "@/types/navigation";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


function isLeaf(item: NavLeaf | NavGroup): item is NavLeaf {
  return "href" in item;
}

function isActiveLink(href: string, pathname: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function groupHasActivePath(item: NavGroup, pathname: string): boolean {
  return item.children.some((child) => {
    if ("href" in child) {
      return isActiveLink(child.href, pathname);
    }
    return groupHasActivePath(child, pathname);
  });
}



function NestedItem({ item, closeDrawer, pathname }: { item: NavLeaf | NavGroup; closeDrawer: () => void; pathname: string }) {
  if (isLeaf(item)) {
    const active = isActiveLink(item.href, pathname);
    return (
      <Link
        href={item.href}
        onClick={closeDrawer}
        className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-150 ${
          active
            ? "bg-[#E6F7FD] text-[#006FA9] font-bold border-l-4 border-[#F6C343] shadow-sm"
            : "text-neutral-700 hover:bg-[#F5F7FA]"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  const active = groupHasActivePath(item, pathname);
  return (
    <div className="mb-1">
      <p className={`font-semibold px-2 py-2 rounded ${active ? "text-[#006FA9] bg-[#E6F7FD]" : "text-neutral-900"}`}>{item.label}</p>
      <div className="pl-3 mt-1 space-y-1 border-l border-[#E6F7FD]">
        {item.children.map((child) => (
          <NestedItem key={child.label} item={child} closeDrawer={closeDrawer} pathname={pathname} />
        ))}
      </div>
    </div>
  );
}

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Buka menu navigasi"
        className="text-2xl leading-none rounded-md p-2 border border-[#00AEEF] bg-white text-[#00AEEF] shadow-sm hover:bg-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
      >
        <span className="sr-only">Buka menu navigasi</span>
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="18" width="24" height="2" rx="1" fill="currentColor"/></svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex">
          <div className="relative w-4/5 max-w-xs bg-white h-full p-0 flex flex-col shadow-2xl animate-slideInLeft rounded-r-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-2 text-[#00AEEF] hover:bg-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
              aria-label="Tutup menu"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>

            <div className="flex items-center gap-3 px-6 pt-7 pb-2">
              <img src="/logo1.svg" alt="Logo" className="w-10 h-10" />
              <div>
                <p className="text-base font-bold uppercase leading-tight tracking-wide text-[#00AEEF]">Institut Kesehatan</p>
                <p className="text-xs font-bold uppercase leading-tight tracking-wide text-[#00AEEF]">Payung Negeri Pekanbaru</p>
              </div>
            </div>

            <nav className="mt-2 px-4 pb-8 flex-1 overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <NestedItem key={item.label} item={item} closeDrawer={() => setOpen(false)} pathname={pathname} />
              ))}
            </nav>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
}