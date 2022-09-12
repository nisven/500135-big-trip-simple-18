import {getRandomInteger} from '../utils.js';
import {COUNT_OFFERS} from '../const.js';

const generateOffers = () => {
  const offers = Array.from({length: getRandomInteger(0, 6)}, () => getRandomInteger(1, COUNT_OFFERS - 1));
  return offers;
};

export const generateOffersByType = (type) => ({
  type: String(type),
  offers: generateOffers()
});
