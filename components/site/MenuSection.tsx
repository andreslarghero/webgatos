import { menuItems } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

const featuredCategories = ["Para compartir", "Michi meriendas"] as const;
const regularCategories = ["Coffee", "Food", "Drinks"] as const;
const coffeeItemImages: Record<string, string> = {
  "Expreso doble": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80&auto=format&fit=crop",
  Macchiato: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80&auto=format&fit=crop",
  "Latte / Cortado": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80&auto=format&fit=crop",
  Cappuccino: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80&auto=format&fit=crop",
  Submarino: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&q=80&auto=format&fit=crop",
  "Moc-Cat": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80&auto=format&fit=crop",
  Americano: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=500&q=80&auto=format&fit=crop",
  "Té Twinings": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80&auto=format&fit=crop",
  "Nutellino Coffee": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&q=80&auto=format&fit=crop",
  Affogato: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80&auto=format&fit=crop",
  "Baileys / Irish Coffee": "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&q=80&auto=format&fit=crop",
  "Extra shot coffee": "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&q=80&auto=format&fit=crop",
  Chocolatada: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80&auto=format&fit=crop"
};

export function MenuSection() {
  const featuredItems = menuItems.filter(
    (item) => item.category === "Para compartir" || item.category === "Michi meriendas"
  );

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionHeader
        eyebrow="Menú"
        title="Menú real de Adrianuzca’s Cat Café."
        description="Opciones para compartir, meriendas y carta completa de coffee, food y drinks."
      />
      <div className="space-y-10">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <h3 className="text-xl font-semibold text-cocoa">Combos destacados</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredItems.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-terracotta/25 bg-gradient-to-br from-cream via-beige/60 to-peach/30 p-7 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-terracotta/20 px-2.5 py-1 text-xs font-semibold text-cocoa">
                      Combo
                    </span>
                    <h4 className="text-xl font-semibold text-cocoa">{item.name}</h4>
                    <p className="mt-2 text-sm font-medium text-cocoa/70">{item.category}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1.5 text-base font-bold text-cocoa">{item.price}</span>
                </div>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-cocoa/85">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {regularCategories.map((category) => (
          <div key={category}>
            <div className="mb-3 flex items-center gap-3">
              <h3 className="text-xl font-semibold text-cocoa">{category}</h3>
              <span className="rounded-full px-2.5 py-1 text-xs font-semibold bg-cocoa/15 text-cocoa">{category}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => {
                  const imageSrc =
                    item.category === "Coffee"
                      ? coffeeItemImages[item.name]
                      : undefined;

                  return (
                    <article
                    key={item.name}
                    className="group flex items-center gap-4 rounded-2xl border border-cocoa/10 bg-white/70 p-4 shadow-soft"
                  >
                    {imageSrc ? (
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                        <img
                          src={imageSrc}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="h-16 w-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#d9b8a4] to-[#b98a72]" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-[15px] font-medium text-cocoa">{item.name}</h4>
                        <span className="whitespace-nowrap text-sm font-medium text-cocoa">{item.price ?? "Consultar"}</span>
                      </div>
                      <p className="mt-1 text-xs opacity-70">{item.description}</p>
                    </div>
                  </article>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
