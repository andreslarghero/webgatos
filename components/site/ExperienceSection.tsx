import { SectionHeader } from "./SectionHeader";

const experienceItems = [
  "Café de especialidad y cocina casera en un entorno cuidado",
  "Convivencia respetuosa con gatos residentes y en recuperación",
  "Acompañamiento del equipo para una interacción serena y segura",
  "Experiencia tranquila, social e instagrameable, sin estrés para los gatos"
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionHeader
        eyebrow="Experiencia"
        title="Cada visita combina sabor, calma y conexión real."
        description="Un espacio pensado para disfrutar, bajar el ritmo y compartir con gatos rescatados desde el respeto."
      />
      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f7efe6] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f7efe6] to-transparent" />

        <div className="flex w-max animate-marquee gap-4">
          {[...experienceItems, ...experienceItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="min-w-[280px] max-w-[360px] rounded-3xl bg-white/80 px-6 py-5 text-sm font-medium leading-relaxed text-[#5b3426] shadow-soft backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-md md:min-w-[420px] md:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
