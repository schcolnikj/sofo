import Flavors from '@/constants/flavors.json'


const allFlavors = Flavors;

export const flavors = [
  "Vainilla",
  "Chocolate",
  "Frutilla",
  "Menta Granizada",
  "Limón",
  "Chocolate Split",
  "Dulce de Leche",
  "Café",
  "Cookies and Cream",
  "Pistacho",
  "Dulce de Leche Granizado",
  "Caramelo",
  "Banana Split",
  "Coco",
  "Chocolate Belga",
  "Chocolate Amargo",
  "Nutello",
  "Frutos del Bosque",
  "Tiramisú",
  "Ananá",
  "Mango",
  "Melón",
  "Sandía",
  "Frutilla a la crema",
  "Durazno",
  "Arándano",
  "Dulce de Leche Especial Sofo",
  "Lima y menta",
  "Chocolate Blanco",
  "Brownie",
  "Snickers",
  "Chocolate Patagónico",
  "Mousse de Maracuya",
  "Lemon Pie",
  "Tramontana",
  "Dulce de Leche Mil Hojas",
  "After Ocho",
  "Maracuyá y kiwi",
  "Açaí",
  "Mandarina",
  "CheeseCake",
  "Super Dulce de Leche",
  "Dulce de Leche Bariloche",
  "Menta",
  "Maracuyá",
];


  export const categorias = [
    {
      title: "Seleccione una categoría",
      value: "",
    },
    {
      title: "Frutales",
      value: "frutal",
    },
    {
      title: "Cremosos",
      value:"cremas"
    },
  ];

  // allFlavors.filter((flavor) => flavor.categoria === "frutal").map((flavor) => ({
  //   title: flavor.name,
  //   value: flavor.categoria
  // }))
  
  // export const cremas = 
  //   allFlavors.filter((flavor) => flavor.categoria === "cremas").map((flavor) => ({
  //     title: flavor.name,
  //     value: flavor.categoria
  //   }))
  // ;
  
  
  export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];

        