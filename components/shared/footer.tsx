import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center" aria-label="Institut Kesehatan Payung Negeri Pekanbaru">
            <img src="/logotitle.svg" alt="Institut Kesehatan Payung Negeri Pekanbaru" className="h-9 w-auto" />
          </Link>

          <h3 className="text-base font-semibold leading-snug">Institut Kesehatan Payung Negeri Pekanbaru</h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            Temukan lingkungan belajar kesehatan yang relevan, profesional, dan siap menjawab masa depan.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900">Menu Utama</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>
              <Link href="/" className="transition-colors duration-200 hover:text-primary-500">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/profil" className="transition-colors duration-200 hover:text-primary-500">
                Profil
              </Link>
            </li>
            <li>
              <Link href="/fakultas" className="transition-colors duration-200 hover:text-primary-500">
                Fakultas
              </Link>
            </li>
             <li>
              <Link href="/layanan" className="transition-colors duration-200 hover:text-primary-500">
                Layanan
              </Link>
            </li>
             <li>
              <Link href="/lembaga" className="transition-colors duration-200 hover:text-primary-500">
                Lembaga
              </Link>
            </li>
            <li>
              <Link href="/berita" className="transition-colors duration-200 hover:text-primary-500">
                Berita
              </Link>
            </li>
            
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900">Layanan Digital</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>
              <a
                href="https://pmb.payungnegeri.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary-500"
              >
                PMB
              </a>
            </li>
            <li>
              <a
                href="https://simbel.payungnegeri.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary-500"
              >
                E-Learning
              </a>
            </li>
            <li>
              <a
                href="http://alumni.payungnegeri.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary-500"
              >
                Pusat Karir
              </a>
            </li>
            <li>
              <a
                href="http://alumni.payungnegeri.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary-500"
              >
                Alumni
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900">Kontak</h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
              <span>Jl. Tamtama No. 6, Labuh Baru Barat, Kec. Payung Sekaki, Kota Pekanbaru, Riau 28292</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary-500" />
              <a href="mailto:info@payungnegeri.ac.id" className="transition-colors duration-200 hover:text-primary-500">
                info@payungnegeri.ac.id
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary-500" />
              <a href="tel:0761885214" className="transition-colors duration-200 hover:text-primary-500">
                0761 885214
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10">
       

        <div className="mt-8 border-t border-neutral-200 pt-6 md:flex md:items-center md:justify-between md:gap-4">
          <p className="text-center text-sm text-neutral-500 md:text-left">
            &copy; 2026 Institut Kesehatan Payung Negeri Pekanbaru. All rights reserved.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-end">
            <a
              href="https://www.instagram.com/payungnegeri.pmb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram IKES Payung Negeri"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-colors duration-200 hover:border-primary-500 hover:text-primary-500"
            >
              <RiInstagramLine className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@payungnegeri9360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube IKES Payung Negeri"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-colors duration-200 hover:border-primary-500 hover:text-primary-500"
            >
              <RiYoutubeLine className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/6281111126604"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp IKES Payung Negeri"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-colors duration-200 hover:border-primary-500 hover:text-primary-500"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}