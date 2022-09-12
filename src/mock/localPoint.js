import { getRandomInteger } from '../utils.js';
import { COUNT_DESCTINATION, TYPE } from '../const.js';
import { OFFERS_BY_TYPE } from '../model/offersByType-model.js';

const generateType = () => {

  const randomIndex = getRandomInteger(0, TYPE.length - 1);

  return TYPE[randomIndex];
};

const generateTime = (start = new Date(2012, 0, 1), end = new Date()) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date;
};


const generateOffers = (type) => {
  const offersType = OFFERS_BY_TYPE.find((element) => element.type === type).offers.slice();
  if(offersType.length === 0) {
    return [];
  }

  const offers = Array.from(
    {length: getRandomInteger(0, offersType.length)},
    () => {
      if(offersType.length !== 0) {
        const id = getRandomInteger(0, offersType.length - 1);
        const offer = offersType[id];
        offersType.find((element, index) => {
          if(element === offer) {
            offersType.splice(index, 1);
          }
        });
        return offer;
      }
    }
  );

  return offers;
};


export const generateLocalPoint = () => {
  const dateForm = generateTime();
  const type = generateType();
  const localPoint = {
    basePrice: getRandomInteger(50, 400),
    dateFrom: dateForm.toISOString(),
    dateTo: generateTime(dateForm).toISOString(),
    destination: getRandomInteger(0, COUNT_DESCTINATION - 1),
    offers: generateOffers(type),
    type: type
  };

  return localPoint;
};


