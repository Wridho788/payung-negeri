"use client";

import { NAV_ITEMS } from "@/data/navigation";
import type { NavGroup } from "@/types/navigation";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDrawer from "./mobile-drawer";
import NavbarMenu from "./navbar-menu";

function isGroup(item: (typeof NAV_ITEMS)[number]): item is NavGroup {
  return "children" in item;
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

export default function Navbar() {
  const desktopNavItems = NAV_ITEMS.filter((item) => item.label !== "Kontak");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="h-10 w-full bg-[#00AEEF] sm:h-12 lg:h-14">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="truncate text-[0.65rem] font-medium text-white sm:text-xs lg:text-sm">
            <span>0761-123456</span>
            <span className="mx-2 hidden sm:inline">|</span>
            <span className="hidden sm:inline">info@payungnegeri.ac.id</span>
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="https://wa.me/6281111126604"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white transition-colors hover:text-white"
            >
              <FaWhatsapp className="h-4 w-4 text-white lg:h-5 lg:w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/stikespayungnegeripku"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white transition-colors hover:text-white"
            >
              <FaFacebookF className="h-4 w-4 text-white lg:h-5 lg:w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/payungnegeri.pmb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-white"
            >
              <FaInstagram className="h-4 w-4 text-white lg:h-5 lg:w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@payungnegeri9360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white transition-colors hover:text-white"
            >
              <FaYoutube className="h-4 w-4 text-white lg:h-5 lg:w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between px-4 sm:h-32 sm:px-6 lg:h-36 lg:px-8">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <Image src="/logo1.svg" alt="Logo Institut Kesehatan Payung Negeri" width={80} height={80} priority />
          <div className="hidden min-[420px]:block">
            <p className="text-base font-bold uppercase leading-tight tracking-wide text-[#00AEEF] sm:text-[1.55rem] lg:text-[1.2rem]">
              Institut Kesehatan
            </p>
            <p className="text-base font-bold uppercase leading-tight tracking-wide text-[#00AEEF] sm:text-[1.55rem] lg:text-[1.2rem]">
              Payung Negeri Pekanbaru
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-4">
          {desktopNavItems.map((item) =>
            isGroup(item) ? (
              <NavbarMenu key={item.label} item={item} isActive={groupHasActivePath(item, pathname)} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`px-2 py-1 text-[1.1rem] font-semibold leading-none transition-colors xl:text-[1.2rem] ${
                  isActiveLink(item.href, pathname) ? "text-[#006FA9]" : "text-[#007FB8] hover:text-[#0099DA]"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="lg:hidden">
          <MobileDrawer />
        </div>
      </div>

      <div className="h-0.5 w-full bg-[#F6C343]" />
    </header>
  );
}