import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import FabContact from "@/components/ui/fab-contact";
import FabScrollTop from "@/components/ui/fab-scroll-top";
import type { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FabContact />
      <FabScrollTop />
    </>
  );
}