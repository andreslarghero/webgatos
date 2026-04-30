import { cats } from "@/lib/site-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeader } from "./SectionHeader";

function statusClass(status: (typeof cats)[number]["status"]): string {
  if (status === "Disponible") return "bg-sage/30 text-cocoa";
  if (status === "En recuperación") return "bg-amber-100 text-amber-800";
  return "bg-stone-200 text-stone-700";
}

export function CatsSection() {
  return (
    <section id="gatos" className="bg-beige/40 py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Gatos en adopción"
          title="Historias de rescate con procesos de adopción serios y acompañados."
          description="Cada historia tiene tiempos y necesidades distintas. Priorizamos siempre el bienestar del gato."
        />
        <p className="mb-8 text-center text-cocoa/80">
          La adopción es responsable, acompañada y pensada para el bienestar del gato. No se trata de elegir por impulso.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {cats.map((cat) => (
            <article key={cat.name} className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-soft">
              <div className="mb-4 h-44 rounded-2xl bg-gradient-to-br from-peach/50 to-sage/40" aria-label={`Placeholder visual de ${cat.name}`} />
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-cocoa">{cat.name}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(cat.status)}`}>{cat.status}</span>
              </div>
              <p className="mt-1 text-sm text-cocoa/75">{cat.age} · {cat.personality}</p>
              <p className="mt-3 text-sm text-cocoa/85">{cat.description}</p>
              <p className="mt-3 text-xs text-cocoa/65">Evaluamos compatibilidad del hogar, tiempos y cuidados necesarios antes de confirmar una adopción.</p>
              <a
                href={buildWhatsAppUrl(`Hola, quiero consultar por la adopción responsable de ${cat.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center rounded-full border border-cocoa/25 px-4 py-2 text-sm font-semibold text-cocoa"
              >
                Consultar adopción
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
