"use client";

import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const badges = ["Rescate", "Bienestar felino", "Adopción responsable", "Menú veggie/vegan"];

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * 10,
      y: x * 10
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-8 md:grid-cols-2 md:px-6 md:pt-14">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-terracotta md:text-sm">Café boutique con propósito social</p>
        <h1 className="text-3xl font-semibold leading-tight text-cocoa md:text-5xl">
          Un café con propósito, gatos rescatados y adopciones responsables.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-cocoa/80 md:text-lg">
          Adrianuzca’s Cat Café combina cafetería, comunidad y bienestar felino en una experiencia cuidada donde cada
          visita ayuda a dar nuevas oportunidades.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppButton
            label="Reservar por WhatsApp"
            message="Hola, quiero reservar una visita a Adrianuzca’s Cat Café."
            className="w-full sm:w-auto"
          />
          <a href="#gatos" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-cocoa/25 bg-white px-5 py-3 text-sm font-semibold text-cocoa shadow-soft sm:w-auto">
            Conocer gatos en adopción
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-cocoa shadow-soft">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[260px] overflow-hidden rounded-3xl shadow-soft transition-transform duration-300 ease-out will-change-transform md:min-h-[360px] lg:min-h-[420px]"
        style={{
          transform: isMobile ? "none" : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d"
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200&q=80&auto=format&fit=crop"
          alt="Gato negro en ambiente cálido"
          className="absolute inset-0 h-full w-full object-cover scale-110 transition-transform duration-500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20 md:bg-[rgba(180,120,90,0.35)]" />
        <div className="relative z-10 p-6" style={{ transformStyle: "preserve-3d" }}>
          <div className="mt-4 grid gap-2 sm:hidden">
            <div className="rounded-2xl bg-white/95 px-4 py-2 text-sm text-cocoa shadow-soft" style={{ transform: "translateZ(20px)" }}>Visitas cuidadas</div>
            <div className="rounded-2xl bg-white/95 px-4 py-2 text-sm text-cocoa shadow-soft" style={{ transform: "translateZ(40px)" }}>Gatos en recuperación</div>
            <div className="rounded-2xl bg-white/95 px-4 py-2 text-sm text-cocoa shadow-soft" style={{ transform: "translateZ(60px)" }}>Ambiente tranquilo</div>
          </div>
          <div className="absolute -left-2 top-6 hidden rounded-2xl bg-white/95 px-4 py-2 text-sm text-cocoa shadow-soft sm:block" style={{ transform: "translateZ(40px)" }}>Visitas cuidadas</div>
          <div className="absolute right-3 top-24 hidden rounded-2xl bg-white/95 px-4 py-2 text-sm text-cocoa shadow-soft sm:block" style={{ transform: "translateZ(60px)" }}>Gatos en recuperación</div>
          <div className="absolute bottom-4 left-8 hidden rounded-2xl bg-white/95 px-4 py-2 text-sm text-cocoa shadow-soft sm:block" style={{ transform: "translateZ(20px)" }}>Ambiente tranquilo</div>
        </div>
      </div>
    </section>
  );
}
