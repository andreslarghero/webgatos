"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeader } from "./SectionHeader";

export function ReservationSection() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hola, quiero reservar una visita a Adrianuzca’s Cat Café. Nombre: ${name || "-"} Personas: ${people || "-"} Fecha: ${date || "-"} Horario: ${time || "-"} Comentario: ${comment || "-"}.`;
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="reservas" className="bg-beige/50 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <SectionHeader
            eyebrow="Reservas online"
            title="Las visitas se organizan por cupos para cuidar el ambiente."
            description="Reservar es simple: completás los datos, se abre WhatsApp con el mensaje listo y el equipo confirma disponibilidad."
          />
          <div className="rounded-3xl border border-cocoa/10 bg-white p-5 shadow-soft">
            <p className="mb-3 text-sm font-semibold text-cocoa">Horarios (editables)</p>
            <ul className="space-y-2 text-cocoa/85">
              {siteConfig.schedule.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-2xl bg-beige px-3 py-2 text-sm text-cocoa/80">
              Tip: reservá con anticipación para elegir mejor franja horaria.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-cocoa/10 bg-white p-5 shadow-soft">
          <p className="mb-4 text-sm text-cocoa/80">Completá este formulario y abriremos WhatsApp con tu solicitud prellenada.</p>
          <div className="grid gap-4">
            <label className="text-sm font-medium text-cocoa">
              Nombre
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-cocoa/20 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta" />
            </label>
            <label className="text-sm font-medium text-cocoa">
              Cantidad de personas
              <input value={people} onChange={(e) => setPeople(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-cocoa/20 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta" />
            </label>
            <label className="text-sm font-medium text-cocoa">
              Fecha
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-cocoa/20 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta" />
            </label>
            <label className="text-sm font-medium text-cocoa">
              Horario
              <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="Ej: 16:30" className="mt-1 min-h-11 w-full rounded-xl border border-cocoa/20 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta" />
            </label>
            <label className="text-sm font-medium text-cocoa">
              Mensaje
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-cocoa/20 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta" />
            </label>
            <button type="submit" className="min-h-11 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa">
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
