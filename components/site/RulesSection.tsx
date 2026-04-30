import { visitRules } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function RulesSection() {
  return (
    <section id="reglas" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionHeader
        eyebrow="Reglas de visita"
        title="Reglas simples para cuidar a quienes viven acá."
        description="Te acompañamos en todo momento para que la experiencia sea cálida para vos y segura para ellos."
      />
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <ul className="space-y-3 rounded-3xl border border-cocoa/10 bg-white p-6 shadow-soft">
          {visitRules.map((rule) => (
            <li key={rule} className="flex items-start gap-2 text-cocoa">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-terracotta" />
              {rule}
            </li>
          ))}
        </ul>
        <aside className="rounded-3xl border border-terracotta/20 bg-terracotta/10 p-6 leading-relaxed text-cocoa shadow-soft">
          Estas reglas no son formalidades: existen para reducir estrés, respetar tiempos felinos y cuidar la
          experiencia de todos.
        </aside>
      </div>
    </section>
  );
}
