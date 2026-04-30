export type CatStatus = "Disponible" | "En recuperación" | "Adoptado";

export type MenuItem = {
  name: string;
  description: string;
  category: "Para compartir" | "Michi meriendas" | "Coffee" | "Food" | "Drinks";
  tags: string[];
  price?: string;
};

export type CatProfile = {
  name: string;
  age: string;
  personality: string;
  status: CatStatus;
  image: string;
  description: string;
};

export const siteConfig = {
  name: "Adrianuzca’s Cat Café",
  description:
    "Café con propósito, gatos rescatados, adopción responsable, menú veggie/vegan y visitas cuidadas.",
  whatsapp: "59800000000",
  schedule: ["Lun a Vie: 10:00 - 19:00", "Sáb y Dom: 10:00 - 20:00"],
  address: "Dirección a confirmar - Montevideo, Uruguay",
  social: {
    instagram: "https://instagram.com/catcafe_adrianuzcas",
    tiktok: "https://tiktok.com/@catcafe_adrianuzcas",
    facebook: "https://facebook.com/CATCAFEAdrianuzcas",
    bioLink: "https://catcafe_adrianuzcas.bio.link"
  }
};

export const menuItems: MenuItem[] = [
  {
    name: "Para compartir",
    description:
      "• 2 café / cortado / latte / té\n• 2 jugos medianos de naranja\n• 2 medialunitas con queso\n• 1 waffle dulce\n• 2 scones de queso\n• 1 torta a elección",
    category: "Para compartir",
    tags: ["Combos"],
    price: "$1350"
  },
  {
    name: "Combo justo",
    description: "• 2 café / cortado / latte / té\n• 2 scones de queso\n• 1 torta del día",
    category: "Michi meriendas",
    tags: ["Combos"],
    price: "$730"
  },
  {
    name: "Combo cielo",
    description: "• 1 cappuccino / submarino\n• 1 roll de canela",
    category: "Michi meriendas",
    tags: ["Combos"],
    price: "$420"
  },
  { name: "Expreso doble", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$180" },
  { name: "Macchiato", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$180" },
  { name: "Latte / Cortado", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$190" },
  { name: "Cappuccino", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$230" },
  { name: "Submarino", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$230" },
  { name: "Moc-Cat", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$240" },
  { name: "Americano", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$200" },
  { name: "Té Twinings", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$150" },
  { name: "Nutellino Coffee", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$260" },
  { name: "Affogato", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$200" },
  { name: "Baileys / Irish Coffee", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$260" },
  { name: "Extra shot coffee", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$60" },
  { name: "Chocolatada", description: "Café", category: "Coffee", tags: ["Coffee"], price: "$190" },
  { name: "Medialuna salada/dulce", description: "Food", category: "Food", tags: ["Food"], price: "$200" },
  { name: "Medialuna rellena 3/D", description: "Food", category: "Food", tags: ["Food"], price: "$250" },
  { name: "Miauffin", description: "Food", category: "Food", tags: ["Food"], price: "$180" },
  { name: "Roll de canela", description: "Food", category: "Food", tags: ["Food"], price: "$250" },
  { name: "Alfajor de Michi-Maicena", description: "Food", category: "Food", tags: ["Food"], price: "$130" },
  { name: "Gati-Tortas", description: "Food", category: "Food", tags: ["Food"], price: "$290" },
  { name: "Waffles dulces", description: "Food", category: "Food", tags: ["Food"], price: "$350" },
  { name: "Pizzeta Cat-Prese", description: "Food", category: "Food", tags: ["Food"], price: "$360" },
  { name: "Empanadas", description: "Food", category: "Food", tags: ["Food"], price: "$160" },
  { name: "Bata 3 quesos", description: "Food", category: "Food", tags: ["Food"], price: "$350" },
  { name: "Bata campechana", description: "Food", category: "Food", tags: ["Food"], price: "$350" },
  { name: "Scons o chipá de queso", description: "Food", category: "Food", tags: ["Food"], price: "$170" },
  { name: "Agua Salus con o sin gas", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$130" },
  { name: "Línea Pepsi 500cc", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$150" },
  { name: "Jugo de naranja", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$200" },
  { name: "Licuado frutal", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$220" },
  { name: "Michi limonada", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$220" },
  { name: "Ice-Té", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$200" },
  { name: "Milk Shake", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$280" },
  { name: "Milk Totito Shake", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$290" },
  { name: "Gato-Ccino Frappe", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$280" },
  { name: "Cerveza Corona 350cc", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$190" },
  { name: "Smirnoff Ice 275cc", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$190" },
  { name: "Latte frío", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$230" },
  { name: "Americano frío", description: "Drinks", category: "Drinks", tags: ["Drinks"], price: "$210" }
];

export const cats: CatProfile[] = [
  {
    name: "Mora",
    age: "2 años",
    personality: "Curiosa y afectuosa",
    status: "Disponible",
    image: "/cat-placeholder-1.jpg",
    description: "Le encanta observar desde lugares altos y acercarse cuando toma confianza."
  },
  {
    name: "Tango",
    age: "4 años",
    personality: "Tranquilo y sociable",
    status: "En recuperación",
    image: "/cat-placeholder-2.jpg",
    description: "Está en proceso de recuperación y necesita tiempos de descanso respetados."
  },
  {
    name: "Nina",
    age: "1 año",
    personality: "Juguetona y dulce",
    status: "Disponible",
    image: "/cat-placeholder-3.jpg",
    description: "Disfruta mucho del juego suave y de ambientes serenos."
  },
  {
    name: "Simón",
    age: "3 años",
    personality: "Mimoso y confiado",
    status: "Adoptado",
    image: "/cat-placeholder-4.jpg",
    description: "Encontró familia y sigue recibiendo acompañamiento post adopción."
  }
];

export const visitRules = [
  "No levantar gatos sin permiso",
  "No perseguirlos",
  "No despertarlos",
  "Respetar zonas de descanso",
  "No alimentar gatos sin autorización",
  "Supervisar niños",
  "Consultar restricciones de edad",
  "Higiene de manos antes de ingresar"
];

export const helpOptions = [
  { title: "Donaciones", description: "Apoyá tratamientos, alimentos y medicación." },
  { title: "Voluntariado", description: "Sumate en tareas de cuidado y acompañamiento." },
  { title: "Difusión en redes", description: "Compartí rescates, campañas y adopciones." },
  { title: "Adopción responsable", description: "Conocé el proceso y evaluá tu compatibilidad." },
  { title: "Apadrinar cuidados", description: "Contribuí mes a mes con un gato en recuperación." }
];

export const socialPosts = [
  { id: 1, title: "Nueva historia de rescate", tag: "rescate" },
  { id: 2, title: "Menú de temporada", tag: "menú" },
  { id: 3, title: "Adopción de la semana", tag: "adopción" },
  { id: 4, title: "Tarde tranquila en el café", tag: "vida gatuna" },
  { id: 5, title: "Consejos de convivencia", tag: "bienestar" },
  { id: 6, title: "Historias con final feliz", tag: "comunidad" }
];
