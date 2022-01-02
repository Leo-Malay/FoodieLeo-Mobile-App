// Importing Image
import BEVERAGE from '../assets/img/products/Beverages.webp';
import BURGER from '../assets/img/products/Burger.webp';
import FRENCHFRIES from '../assets/img/products/FrenchFries.webp';
import PIZZA from '../assets/img/products/Pizza.webp';
import PASTA from '../assets/img/products/Pasta.webp';
import SANDWICH from '../assets/img/products/Sandwich.webp';
import SUB from '../assets/img/products/Sub.webp';

const getImg = prop => {
  switch (prop) {
    case 'BURGER':
      return BURGER;
    case 'PIZZA':
      return PIZZA;
    case 'PIZZA':
      return PASTA;
    case 'BEVERAGE':
      return BEVERAGE;
    case 'SANDWICH':
      return SUB;
    case 'FRIED':
      return FRENCHFRIES;
    case 'SANDWICH':
      return SANDWICH;
    default:
      return '';
  }
};

export default getImg;
