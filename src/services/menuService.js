export async function getMenu() {

  const data = [

    // ENSALADAS

    {
      categoria: "Ensaladas",
      nombre: "Ensalada mixta",
      descripcion: "Lechuga, tomate, cebolla, huevo cocido, aceitunas y atún",
      precio: 7.5,
      orden: 1,
      disponible: true,

      alergenos: ["huevo","pescado"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Ensaladas",
      nombre: "Ensalada César",
      descripcion: "Lechuga romana, pollo crujiente, parmesano y salsa César",
      precio: 8.5,
      orden: 2,
      disponible: true,

      alergenos: ["gluten","lactosa","huevo"],
      oferta: false,
      precio_anterior: null,
      novedad: true
    },


    // DE LA CASA

    {
      categoria: "De la casa",
      nombre: "Patatas cheese bacon",
      descripcion: "Patatas fritas caseras con salsa cheddar fundida y bacon crujiente",
      precio: 9,
      orden: 1,
      disponible: true,

      alergenos: ["lactosa"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "De la casa",
      nombre: "Patatas Especial Piscinas",
      descripcion: "Ali oli suave, virutas de jamón crujiente, cebolla crispy y pimentón de la Vera",
      precio: 7.5,
      orden: 2,
      disponible: true,

      alergenos: ["huevo","gluten"],
      oferta: true,
      precio_anterior: 8.5,
      novedad: false
    },

    {
      categoria: "De la casa",
      nombre: "Moraga",
      descripcion: "Carne marinada a la plancha acompañada de ensalada",
      precio: 11,
      orden: 3,
      disponible: true,

      alergenos: [],
      oferta: false,
      precio_anterior: null,
      novedad: true
    },

    {
      categoria: "De la casa",
      nombre: "Tiras de pollo Especial Piscinas",
      descripcion: "Tiras de pollo crujiente con salsa especial de la casa",
      precio: 11,
      orden: 4,
      disponible: true,

      alergenos: ["gluten","huevo"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "De la casa",
      nombre: "Huevos rotos con jamón",
      descripcion: "Huevos fritos con patatas caseras y virutas de jamón ibérico",
      precio: 9,
      orden: 5,
      disponible: true,

      alergenos: ["huevo"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "De la casa",
      nombre: "Patatas fritas",
      descripcion: "Patatas fritas caseras recién hechas",
      precio: 3.5,
      orden: 6,
      disponible: true,

      alergenos: [],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },


    // CROQUETAS

    {
      categoria: "Croquetas",
      nombre: "Croquetas de pollo",
      descripcion: "Croquetas cremosas de pollo caseras (9 unidades)",
      precio: 11,
      orden: 1,
      disponible: true,

      alergenos: ["gluten","lactosa","huevo"],
      oferta: false,
      precio_anterior: null,
      novedad: true
    },

    {
      categoria: "Croquetas",
      nombre: "Croquetas bacon, rulo de cabra y cebolla caramelizada",
      descripcion: "Croquetas gourmet con queso de cabra y bacon (9 unidades)",
      precio: 11,
      orden: 2,
      disponible: true,

      alergenos: ["gluten","lactosa","huevo"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Croquetas",
      nombre: "Croquetas pulled pork",
      descripcion: "Croquetas caseras rellenas de pulled pork ahumado",
      precio: 11,
      orden: 3,
      disponible: true,

      alergenos: ["gluten","lactosa","huevo"],
      oferta: true,
      precio_anterior: 12.5,
      novedad: false
    },

    {
      categoria: "Croquetas",
      nombre: "Surtido de croquetas",
      descripcion: "Surtido de croquetas caseras (12 unidades, 4 de cada sabor)",
      precio: 13.5,
      orden: 4,
      disponible: true,

      alergenos: ["gluten","lactosa","huevo"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },


    // DEL SUR

    {
      categoria: "Del Sur",
      nombre: "Puntillitas",
      descripcion: "Puntillitas fritas al estilo andaluz con limón",
      precio: 11,
      orden: 1,
      disponible: true,

      alergenos: ["gluten","moluscos"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Del Sur",
      nombre: "Cazón en adobo",
      descripcion: "Dados de cazón marinados y fritos al estilo gaditano",
      precio: 11,
      orden: 2,
      disponible: true,

      alergenos: ["gluten","pescado"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Del Sur",
      nombre: "Calamares a la andaluza",
      descripcion: "Calamares fritos enharinados acompañados de limón",
      precio: 11,
      orden: 3,
      disponible: true,

      alergenos: ["gluten","moluscos"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Del Sur",
      nombre: "Chipirones enharinados",
      descripcion: "Chipirones fritos con rebozado ligero",
      precio: 11,
      orden: 4,
      disponible: true,

      alergenos: ["gluten","moluscos"],
      oferta: true,
      precio_anterior: 12,
      novedad: false
    },

    {
      categoria: "Del Sur",
      nombre: "Piruletas de langostinos marinados",
      descripcion: "Langostinos marinados en brocheta (10 unidades)",
      precio: 15,
      orden: 5,
      disponible: true,

      alergenos: ["crustaceos"],
      oferta: false,
      precio_anterior: null,
      novedad: true
    },


    // CARNES IBÉRICAS

    {
      categoria: "Carnes ibéricas",
      nombre: "Pluma ibérica",
      descripcion: "Pluma ibérica a la plancha con patatas fritas y pimiento",
      precio: 18,
      orden: 1,
      disponible: true,

      alergenos: [],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Carnes ibéricas",
      nombre: "Secreto ibérico",
      descripcion: "Secreto ibérico a la brasa con patatas fritas caseras",
      precio: 18,
      orden: 2,
      disponible: true,

      alergenos: [],
      oferta: true,
      precio_anterior: 20,
      novedad: false
    },

    {
      categoria: "Carnes ibéricas",
      nombre: "Presa ibérica",
      descripcion: "Presa ibérica jugosa a la plancha con pimiento asado",
      precio: 18,
      orden: 3,
      disponible: true,

      alergenos: [],
      oferta: false,
      precio_anterior: null,
      novedad: true
    },


    // TOSTAS

    {
      categoria: "Tostas",
      nombre: "Tosta kebab",
      descripcion: "Pan tostado con carne kebab, salsa y verduras",
      precio: 5,
      orden: 1,
      disponible: true,

      alergenos: ["gluten"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Tostas",
      nombre: "Tosta barbacoa",
      descripcion: "Tosta caliente con carne y salsa barbacoa",
      precio: 5,
      orden: 2,
      disponible: true,

      alergenos: ["gluten"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    },

    {
      categoria: "Tostas",
      nombre: "Tosta carbonara",
      descripcion: "Pan tostado con bacon, nata y queso",
      precio: 5,
      orden: 3,
      disponible: true,

      alergenos: ["gluten","lactosa"],
      oferta: false,
      precio_anterior: null,
      novedad: true
    },

    {
      categoria: "Tostas",
      nombre: "Tosta atún y bacon",
      descripcion: "Tosta caliente con atún, bacon y salsa suave",
      precio: 5,
      orden: 4,
      disponible: true,

      alergenos: ["gluten","pescado"],
      oferta: false,
      precio_anterior: null,
      novedad: false
    }

  ]

  return data
}

/* export async function getMenu() {

  const url = "https://opensheet.elk.sh/SPREADSHEET_ID/Sheet1"

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Error cargando la carta")
  }

  const data = await res.json()

  return data
} */