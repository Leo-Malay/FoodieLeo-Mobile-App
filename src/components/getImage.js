// Importing Image
import BEVERAGE from '../assets/img/products/Beverages.jpg';
import BURGER from '../assets/img/products/Burger.jpg';
import FRENCHFRIES from '../assets/img/products/FrenchFries.jpg';
import PIZZA from '../assets/img/products/Pizza.jpg';
import PASTA from '../assets/img/products/Pasta.jpg';
import SANDWICH from '../assets/img/products/Sandwich.jpg';
import SUB from '../assets/img/products/Sub.jpg';

const getImg = prop => {
  if (prop == 'BURGER') return BURGER;
  else if (prop == 'PIZZA') return PIZZA;
  else if (prop == 'PIZZA') return PASTA;
  else if (prop == 'BEVERAGE') return BEVERAGE;
  else if (prop == 'SANDWICH') return SUB;
  else if (prop == 'FRIED') return FRENCHFRIES;
  else if (prop == 'SANDWICH') return SANDWICH;
  else return '';
};

export default getImg;
