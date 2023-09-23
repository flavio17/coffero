import certified from "./assets/certified.svg";
import coffeeBeans from "./assets/coffee-beans.svg";
import coffee from "./assets/coffee.svg";
import freeDelivery from "./assets/free-delivery.svg";

import menu1 from "./assets/01.jpg";
import menu2 from "./assets/02.jpg";
import menu3 from "./assets/03.jpg";
import menu4 from "./assets/04.jpg";
import menu5 from "./assets/05.jpg";
import menu6 from "./assets/06.jpg";
import menu7 from "./assets/07.jpg";
import menu8 from "./assets/08.jpg";

import gallery1 from "./assets/gallery-1.jpg";
import gallery2 from "./assets/gallery-2.jpg";
import gallery3 from "./assets/gallery-3.jpg";
import gallery4 from "./assets/gallery-4.jpg";
import gallery5 from "./assets/gallery-5.jpg";

import offer1 from "./assets/offer-1.jpg";
import offer2 from "./assets/offer-2.jpg";

import testimonial1 from "./assets/testimonial-1.jpg";
import testimonial2 from "./assets/testimonial-2.jpg";
import testimonial3 from "./assets/testimonial-3.jpg";
import testimonial4 from "./assets/testimonial-4.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Sobre",
    path: "about",
  },
  {
    name: "Recursos",
    path: "features",
  },
  {
    name: "Menu",
    path: "menu",
  },
  {
    name: "Galeria",
    path: "gallery",
  },
  {
    name: "Chefs",
    path: "team",
  },
  {
    name: "Depoimentos",
    path: "testimonials",
  },
];

export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: "Entrega grátis",
    description:
      "Receba o nosso produto no conforto do seu lar, com toda a comodidade e rapidez para melhor atende-lo em qualquer bairro da cidade.",
  },
  {
    id: 2,
    img: certified,
    title: "Produto Certificado",
    description:
      "Os nossos grão são certificados, o que garante uma maior qualidade ao produto final vendido ao nossos clientes.",
  },
  {
    id: 3,
    img: coffee,
    title: "Alta qualidade",
    description:
      "Seguimos as melhores práticas e diretrizes de qualidade e segurança para manter o nosso grau de qualidade elevado",
  },
  {
    id: 4,
    img: coffeeBeans,
    title: "Torrefação adequada",
    description:
      "Esse processo garante que o grão do café tenha o melhor sabor e seja apreciado nas horas mais felizes do seu dia com a sua família.",
  },
];

export const menu = [
  {
    id: 1,
    img: menu1,
    title: "Café Americano ",
    description: "Café, leite e baunilha",
    price: 40.25,
  },
  {
    id: 2,
    img: menu2,
    title: "Cappuccino Arabica",
    description: "Café puro e refinado ",
    price: 50.25,
  },
  {
    id: 3,
    img: menu3,
    title: "Milk Cream Coffee",
    description: "Café com Creme de Leite",
    price: 29.25,
  },
  {
    id: 4,
    img: menu4,
    title: "Special Raw Coffee",
    description: "Café Cru Especial",
    price: 60.25,
  },
  {
    id: 5,
    img: menu5,
    title: "Fresh Black Coffee",
    description: "Café Preto Fresco",
    price: 16.25,
  },
  {
    id: 6,
    img: menu6,
    title: "Cappuccino puro",
    description: "Café rustico puro",
    price: 49.25,
  },
  {
    id: 7,
    img: menu7,
    title: "Milk Cream Coffee",
    description: "Café com Creme de Leite",
    price: 20.25,
  },
  {
    id: 8,
    img: menu8,
    title: "Cold Coffee",
    description: "Café frio",
    price: 40.25,
  },
];

export const gallery = [
  {
    id: 1,
    img: gallery1,
    title: "Cappuccino Arabica",
  },
  {
    id: 2,
    img: gallery2,
    title: "Café Americano",
  },
  {
    id: 3,
    img: gallery3,
    title: "Fresh Black Coffee",
  },
  {
    id: 4,
    img: gallery4,
    title: "Cold Coffee",
  },
  {
    id: 5,
    img: gallery5,
    title: "Milk Cream Coffee",
  },
];

export const offer = [
  {
    id: 1,
    img: offer1,
    title: "Cappuccino Arabica",
    discount: "Ganhe 50% de desconto",
    description:
      "o cappuccino vai ajudar também a regular a circulação do sangue e a melhorar a concentração e diminuir o cansaço físico e mental da pessoa, incrível isto!",
  },
  {
    id: 2,
    img: offer2,
    title: "Cappuccino Americano",
    discount: "Ganhe 40% de desconto",
    description:
      "Este café tem a proteína que protege e fortalece o corpo. Aí sim! E se tiver chocolate então, como esse ingrediente é antioxidante, vai te fazer muito bem!",
  },
];

export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    title: "Márcia Sena",
    service: "Fotografa",
    description:
      "Ótima qualidade e sabor, além do melhor atendimento. Tudo maravilhoso, super indico. Já vou encomendar mais ",
  },
  {
    id: 2,
    img: testimonial2,
    title: "Patricia Mendes",
    service: "Administradora",
    description:
      "Maravilhoso! Desde o capricho da entrega, até o privilégio de ter um café de verdade na minha xícara. Sou fã de vocês!",
  },
  {
    id: 3,
    img: testimonial3,
    title: "Sabrina Oliveira",
    service: "Engenheira",
    description:
      "Excelente café, um sabor marcante e especial, a forma e apresentação, já indiquei a amigos e familiares.",
  },
  {
    id: 4,
    img: testimonial4,
    title: "Mariana Dourado",
    service: "Modelo",
    description:
      "Adorei o café, sabor maravilhoso!!! O ambiente também é muito aconchegante e eu amo café e super indico! para todos",
  },
  {
    id: 5,
    img: testimonial1,
    title: "Ana Teles",
    service: "Professora",
    description:
      "café de primeira, muito gostoso, sabores bem acentuados, primeira experiência de muitas. Tudo perfeito",
  },
  {
    id: 6,
    img: testimonial2,
    title: "Amanda Mendes",
    service: "Contadora",
    description:
      "Bom dia! Simplesmente amei esse café, um sabor maravilhoso. Virei cliente fiel e quero mais café.",
  },
];
