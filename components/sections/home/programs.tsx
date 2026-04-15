"use client";

import { BriefcaseBusiness, GraduationCap, Landmark, MonitorPlay } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  dataLayer?: Array<Record<string, unknown>>;
};

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  accentClass: string;
  icon: ComponentType<{ className?: string }>;
  eventName: "click_elearning" | "click_career" | "click_alumni";
};

const services: ServiceItem[] = [
  {
    title: "E-Learning",
    description: "Akses pembelajaran online",
    href: "https://simbel.payungnegeri.ac.id/",
    accentClass: "text-tertiary-500",
    icon: MonitorPlay,
    eventName: "click_elearning",
  },
  {
    title: "Pusat Karir",
    description: "Peluang karir & magang",
    href: "http://alumni.payungnegeri.ac.id/",
    accentClass: "text-secondary-500",
    icon: BriefcaseBusiness,
    eventName: "click_career",
  },
  {
    title: "Alumni",
    description: "Jaringan alumni kampus",
    href: "http://alumni.payungnegeri.ac.id/",
    accentClass: "text-neutral-900",
    icon: Landmark,
    eventName: "click_alumni",
  },
];

function trackServiceClick(eventName: string, serviceName: string, href: string) {
  if (typeof window === "undefined") return;

  const trackingWindow = window as TrackingWindow;
  const eventData = {
    event: eventName,
    service_name: serviceName,
    section_name: "digital_ecosystem_entry_point",
    destination_url: href,
  };

  trackingWindow.dataLayer?.push(eventData);
  trackingWindow.gtag?.("event", eventName, eventData);
  trackingWindow.fbq?.("trackCustom", eventName, eventData);
}

export default function Programs() {
  return (
    <section className="border-t border-[#f1f1f1] bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Layanan Digital Kampus</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-500 md:text-base">
            Akses cepat ke ekosistem digital Institut Kesehatan Payung Negeri Pekanbaru.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="https://pmb.payungnegeri.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackServiceClick("click_pmb", "PMB", "https://pmb.payungnegeri.ac.id/")}
            className="group relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#009ADB,#007bb5)] p-6 text-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/15 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative flex h-full min-h-64 flex-col justify-between gap-6">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-white/90">PMB</p>
                <h3 className="mt-3 text-3xl font-bold leading-tight">Pendaftaran Mahasiswa Baru</h3>
                <p className="mt-3 max-w-md text-sm text-white/90 md:text-base">
                  Daftar sekarang dan mulai perjalanan akademik Anda.
                </p>
              </div>

              <span className="inline-flex items-center gap-2 text-base font-semibold">
                Daftar Sekarang
                <span className="transition duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>

          <div className="grid gap-6">
            {services.map((service) => {
              const ServiceIcon = service.icon;

              return (
              <Link
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackServiceClick(service.eventName, service.title, service.href)}
                className="group rounded-3xl border border-[#eeeeee] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-sm font-bold transition duration-200 group-hover:scale-105 ${service.accentClass}`}
                  >
                    <ServiceIcon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{service.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-neutral-700 transition duration-200 group-hover:text-primary-700">
                      Buka Layanan
                      <span className="opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="https://www.payungnegeri.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary-500 transition duration-200 hover:text-primary-700"
          >
            Lihat Semua Layanan &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}