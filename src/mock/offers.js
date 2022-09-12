import {getRandomInteger} from '../utils.js';

export const generateOffer = () => ({
  id: 0,
  title: 'Upgrade',
  price: getRandomInteger(10, 70),
});
