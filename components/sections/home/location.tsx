"use client";

import Button from "@/components/ui/button";

export default function Location() {
  const campusLocation = {
    address: "Jl. Denai, Kota Pekanbaru",
    city: "Pekanbaru, Riau",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6510930251493!2d101.4270897!3d0.5245854000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5abfa3e2007e9%3A0x23f9fa33447b2f10!2sInstitut%20Kesehatan%20Payung%20Negeri%20Pekanbaru!5e0!3m2!1sid!2sid!4v1776270868555!5m2!1sid!2sid",
    mapsUrl:
      "https://www.google.com/maps/place/Institut+Kesehatan+Payung+Negeri+Pekanbaru/@0.5245854,101.4270897,17z",
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Lokasi Kampus
          </h2>
          <p className="text-gray-600">Temukan kami di berbagai lokasi</p>
        </div>

        {/* Desktop: Side by side | Mobile: Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Container */}
          <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <iframe
              src={campusLocation.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 p-8 rounded-xl">
              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                      Alamat
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {campusLocation.address}
                    </p>
                    <p className="text-gray-700 mt-1">{campusLocation.city}</p>
                  </div>
                </div>
              </div>

              {/* Direction Icon */}
              <div className="flex items-start gap-3 mb-8">
                <span className="text-2xl">🧭</span>
                <div>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                    Navigasi
                  </p>
                  <p className="text-gray-700 mt-1">
                    Buka di Google Maps untuk petunjuk arah
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex gap-3">
                <a href={campusLocation.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    Lihat di Google Maps →
                  </Button>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(campusLocation.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    Petunjuk Arah →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
