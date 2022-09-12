import {generateOffersByType} from '../mock/offersByType.js';
import {TYPE} from '../const.js';

const OFFERS_BY_TYPE = [];

for (let i = 0; i < TYPE.length; i++) {
  OFFERS_BY_TYPE.push(generateOffersByType(TYPE[i]));
}

// eslint-disable-next-line no-console
console.log(OFFERS_BY_TYPE);

export {OFFERS_BY_TYPE};
