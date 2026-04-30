import { siteConfig } from "@/lib/site-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-cocoa px-4 py-10 text-cream md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-cream/80">
            Un espacio de café, rescate y adopción responsable donde cada visita aporta al bienestar felino.
          </p>
          <p className="mt-3 text-sm text-cream/75">{siteConfig.address}</p>
          <p className="mt-2 text-xs text-cream/60">Información sujeta a confirmación. Sitio en desarrollo.</p>
        </div>
        <div className="flex max-w-sm flex-col gap-3">
          <a
            href={buildWhatsAppUrl("Hola, quiero reservar una visita a Adrianuzca’s Cat Café.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white"
          >
            Reservar por WhatsApp
          </a>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noreferrer" className="hover:underline">TikTok</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
