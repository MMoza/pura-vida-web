export const drinkSections = [
  {
    slug: "vinos",
    title: "Vinos",
    subtitle: "El maridaje perfecto",
    description:
      "Una selección pensada para comidas largas, brindis suaves y sobremesas con calma.",
    imagePath: "/drinks/wine.webp",
    accentClass: "from-rose-50/72 via-white/58 to-white/42",
    href: "/bebidas/vinos",
  },
  {
    slug: "cervezas",
    title: "Cervezas",
    subtitle: "Nuestros vasos siempre bien fríos",
    description:
      "Rubias, tostadas y opciones especiales para acompañar el ritmo de la terraza.",
    imagePath: "/drinks/beer.avif",
    accentClass: "from-amber-50/72 via-white/58 to-white/42",
    href: "/bebidas/cervezas",
  },
  {
    slug: "refrescos",
    title: "Refrescos",
    subtitle: "Con hielo y sin prisa",
    description:
      "Opciones frescas y directas para cualquier momento del día, con o sin comida.",
    imagePath: "/drinks/coke.jpeg",
    accentClass: "from-sky-50/72 via-white/58 to-white/42",
    href: "/bebidas/refrescos",
  },
  {
    slug: "otros",
    title: "Otros",
    subtitle: "Agua, vermut y licores",
    description:
      "Una categoría abierta para lo esencial y para esos pequeños extras que completan la mesa.",
    imagePath: "/drinks/other-drinks.webp",
    accentClass: "from-emerald-50/72 via-white/58 to-white/42",
    href: "/bebidas/otros",
  },
  {
    slug: "combinados",
    title: "Combinados",
    subtitle: "Copas largas y mezclas clásicas",
    description:
      "Sabores reconocibles, servicio limpio y una selección pensada para tarde y noche.",
    imagePath: "/drinks/gin.jpeg",
    accentClass: "from-orange-50/72 via-white/58 to-white/42",
    href: "/bebidas/combinados",
  },
  {
    slug: "cafes",
    title: "Cafés",
    subtitle: "Solo, cortado y con leche",
    description:
      "El cierre perfecto para una comida larga o para una pausa tranquila a media tarde.",
    imagePath: "/drinks/cooffe.jpg",
    accentClass: "from-stone-100/72 via-white/58 to-white/42",
    href: "/bebidas/cafes",
  },
];

export const drinkSectionsBySlug = Object.fromEntries(
  drinkSections.map((section) => [section.slug, section])
);
