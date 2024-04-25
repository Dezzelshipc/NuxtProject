import n1_1x from "./assets/pictures/news-1.jpg";
import n2_1x from "./assets/pictures/news-2.jpg";
import n3_1x from "./assets/pictures/news-3.jpg";
import n4_1x from "./assets/pictures/news-4.jpg";


const news = [
  {
    image: {
      x1: n1_1x,
      x2: n1_1x,
    },
    date: new Date("2024-04-20"),
    title: "Как сделать строительство дешевле?",
    description: "Строительство дома можно сделать дешевле — выбрав проект...",
  },
  {
    image: {
      x1: n2_1x,
      x2: n2_1x,
    },
    date: new Date("2024-04-20"),
    title: "Почему Гуд Вилл строит лучшие дома?",
    description: "Хотим обрадовать тех, кто планирует переезд из квартиры в дом...",
  },
  {
    image: {
      x1: n3_1x,
      x2: n3_1x,
    },
    date: new Date("2024-04-20"),
    title: "Преимущества и недостатки частного дома",
    description: "Первое и главное: строим дом индивидуально для вас, по вашим...",
  },
  {
    image: {
      x1: n4_1x,
      x2: n4_1x,
    },
    date: new Date("2024-04-20"),
    title: "Из чего мы строим дома в ипотеку?",
    description: "Самый популярный вопрос наших клиентов касается материалов, которы...",
  },
];

export { news };
