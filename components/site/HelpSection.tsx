import { helpOptions } from "@/lib/site-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeader } from "./SectionHeader";

export function HelpSection() {
  return (
    <section id="ayudar" className="bg-beige/50 py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader eyebrow="Cómo ayudar" title="Hay muchas formas de sostener este proyecto con impacto real." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {helpOptions.map((option) => (
            <article key={option.title} className="rounded-3xl border border-cocoa/10 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-cocoa">{option.title}</h3>
              <p className="mt-2 text-sm text-cocoa/80">{option.description}</p>
              <a
                href={buildWhatsAppUrl(`Hola, quiero ayudar a Adrianuzca’s Cat Café. Me interesa: ${option.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-cocoa/25 px-4 py-2 text-sm font-semibold text-cocoa"
              >
                Quiero ayudar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
