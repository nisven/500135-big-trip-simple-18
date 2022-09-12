import { createElement } from '../render.js';
import { destinationsList } from '../model/destinations-model.js';
import { OFFERS } from '../model/offers-model.js';
import { humanizePointDate, humanizePointTime, humanizePointDatetimeDate, humanizePointDatetimeTime } from '../utils.js';

const createPointTemplate = (point) => {

  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;

  const destinationPoint = destinationsList.find((el) => {
    if (el.id === destination) {
      return el;
    }
  });

  const getOffer = (i) => {
    const offer = `<li class="event__offer">
            <span class="event__offer-title">${OFFERS[i].title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${OFFERS[i].price}</span>
          </li>`;
    return offer;
  };

  const getOffers = () => {
    let offersDraw = '';
    if (offers.length !== 0) {
      for (let i = 0; i < offers.length; i++) {
        offersDraw += getOffer(i);
      }
    } else {
      offersDraw = `<li class="event__offer">
                      <span class="event__offer-title">none</span>
                    </li>`;
    }

    return offersDraw;
  };

  return (
    `
    <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${humanizePointDatetimeDate(dateFrom)})">${humanizePointDate(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destinationPoint.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${humanizePointDatetimeTime(dateFrom)}">${humanizePointTime(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="${humanizePointDatetimeTime(dateTo)}">${humanizePointTime(dateTo)}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${getOffers()}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
    </li>
  `
  );
};

export default class PointView {
  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
