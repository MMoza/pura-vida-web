export async function getMenu() {

  const url = "https://opensheet.elk.sh/1sTpLJQhatioySdVKNw_oEYJ3eCxemT_9PCM6DwVd3fU/menu"

  const res = await fetch(url, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Error cargando la carta")
  }

  const data = await res.json()

  const categoriaOrden = {
    "Ensaladas": 1,
    "De la casa": 2,
    "Croquetas": 3,
    "Del Sur": 4,
    "Carnes ibéricas": 5,
    "Tostas": 6,
    "Fuera de Carta": 998,
    "Postres": 999
  }

  return data
    .map(item => ({
      categoria: item.categoria,
      categoria_orden: categoriaOrden[item.categoria] ?? 997,

      nombre: item.nombre,
      descripcion: item.descripcion,
      precio: Number(item.precio),
      orden: Number(item.orden) || 997,

      disponible: String(item.disponible).toLowerCase() === "true",

      alergenos: item.alergenos ? item.alergenos.split("|") : [],

      oferta: String(item.oferta).toLowerCase() === "true",
      precio_anterior: item.precio_anterior ? Number(item.precio_anterior) : null,

      novedad: String(item.novedad).toLowerCase() === "true"
    }))
    .filter(item => item.disponible)

}