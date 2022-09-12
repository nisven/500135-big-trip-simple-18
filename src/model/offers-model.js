import {generateOffer} from '../mock/offers.js';
import {COUNT_OFFERS} from '../const.js';

const OFFERS = Array.from({length: COUNT_OFFERS}, generateOffer);

for (let i = 0; i < OFFERS.length; i++) {
  OFFERS[i].id = i;
}


export {OFFERS};
