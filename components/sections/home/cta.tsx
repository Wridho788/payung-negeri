"use client";

import Button from "@/components/ui/button";

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  dataLayer?: Array<Record<string, unknown>>;
};

export default function CTA() {
  const handleCtaClick = () => {
    if (typeof window === "undefined") return;

    const trackingWindow = window as TrackingWindow;
    const eventData = {
      event: "cta_click",
      cta_name: "home_pmb_registration",
      cta_location: "home_cta_section",
      destination_url: "https://pmb.payungnegeri.ac.id",
    };

    trackingWindow.dataLayer?.push(eventData);
    trackingWindow.gtag?.("event", "cta_click", eventData);
    trackingWindow.fbq?.("trackCustom", "CTAClick", eventData);
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#009ADB,#007bb5)] py-16 text-white md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-neutral-100/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-neutral-900/10 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
            <div className="space-y-4" style={{ maxWidth: "600px" }}>
              <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Siap Memulai Masa Depan Anda?</h2>
              <p className="text-sm text-primary-100 md:text-base">Pendaftaran mahasiswa baru telah dibuka.</p>
            </div>

            <a
              className="w-full md:w-auto"
              href="https://pmb.payungnegeri.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
            >
              <Button
                size="lg"
                variant="secondary"
                rightIcon={<span aria-hidden="true">&gt;</span>}
                className="w-full rounded-xl border-white/40 bg-white px-6 py-3 text-primary-500 shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-primary-100 hover:shadow-lg md:w-auto"
              >
                Daftar Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}