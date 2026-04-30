import { siteConfig, socialPosts } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function SocialSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionHeader
        eyebrow="Redes sociales"
        title="Historias reales de rescate, café y adopciones responsables."
        description="Seguinos para ver nuevas historias, menú de temporada y avisos de adopción."
      />
      <div className="mb-6 flex flex-wrap gap-3">
        <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Adrianuzca's Cat Café" className="inline-flex min-h-11 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-cocoa shadow-soft">Instagram</a>
        <a href={siteConfig.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok Adrianuzca's Cat Café" className="inline-flex min-h-11 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-cocoa shadow-soft">TikTok</a>
        <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook Adrianuzca's Cat Café" className="inline-flex min-h-11 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-cocoa shadow-soft">Facebook</a>
        <a href={siteConfig.social.bioLink} target="_blank" rel="noreferrer" aria-label="Enlace principal de Adrianuzca's Cat Café" className="inline-flex min-h-11 items-center rounded-full bg-cocoa px-4 py-2 text-sm font-semibold text-cream shadow-soft">Ver todos los links</a>
      </div>
      {/* Futuro: reemplazar este mock por feed real de Instagram si se cuenta con API/token o embed aprobado. */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {socialPosts.map((post) => (
          <article key={post.id} className="rounded-3xl border border-cocoa/10 bg-white p-4 shadow-soft">
            <div className="mb-3 h-32 rounded-2xl bg-gradient-to-br from-peach/60 to-sage/40" />
            <p className="text-sm font-medium text-cocoa">{post.title}</p>
            <span className="mt-2 inline-block rounded-full bg-beige px-2 py-1 text-xs font-semibold uppercase tracking-wide text-cocoa/75">
              {post.tag}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
