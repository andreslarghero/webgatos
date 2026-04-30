"use client";

import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#reservas", label: "Reservas" },
  { href: "#menu", label: "Menú" },
  { href: "#gatos", label: "Gatos" },
  { href: "#reglas", label: "Reglas" },
  { href: "#ayudar", label: "Ayudar" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="text-base font-semibold text-cocoa md:text-lg">
          Adrianuzca’s Cat Café
        </a>
        <button
          className="min-h-11 rounded-xl border border-cocoa/20 bg-white px-3 py-2 text-sm font-medium text-cocoa md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
        >
          Menú
        </button>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-cocoa/80 transition hover:text-cocoa">
              {item.label}
            </a>
          ))}
          <WhatsAppButton label="Reservar visita" message="Hola, quiero reservar una visita a Adrianuzca’s Cat Café." />
        </nav>
      </div>
      {open ? (
        <div className="border-t border-cocoa/10 bg-cream px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-xl px-2 py-2 text-base font-medium text-cocoa"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton label="Reservar visita" message="Hola, quiero reservar una visita a Adrianuzca’s Cat Café." className="mt-2 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
