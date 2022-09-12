import { createElement } from '../render.js';
import { TYPE } from '../const.js';
import { destinationsList } from '../model/destinations-model.js';
import { OFFERS_BY_TYPE } from '../model/offersByType-model.js';
import { OFFERS } from '../model/offers-model.js';
import { capitalizeFirstLetter, humanizePointEditTime } from '../utils.js';

const createEditPointFormTemplate = (point) => {
  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;

  const getTypeList = () => {
    let typeDraw = '';

    for (let i = 0; i < TYPE.length; i++) {
      typeDraw += `<div class="event__type-item">
                    <input id="event-type-${TYPE[i]}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${TYPE[i]}" ${type === TYPE[i] ? 'checked' : ''}>
                    <label class="event__type-label  event__type-label--${TYPE[i]}" for="event-type-${TYPE[i]}-1">${capitalizeFirstLetter(TYPE[i])}</label>
                  </div>`;
    }

    return typeDraw;
  };

  const getDestinationList = () => {
    let destinationDraw = '';
    for (let i = 0; i < destinationsList.length; i++) {
      destinationDraw += `<option value="${destinationsList[i].name}"></option>`;
    }
    return destinationDraw;
  };

  const getOffersList = () => {
    let offersListDraw = '';
    const offersType = OFFERS_BY_TYPE.find((element) => element.type === type).offers.slice();
    if (offersType.length !== 0) {
      offersListDraw += `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">`;

      offersType.forEach((i) => {
        offersListDraw += `
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${i}" type="checkbox" name="event-offer-luggage" ${offers.includes(OFFERS[i].id) ? 'checked' : ''}>
            <label class="event__offer-label" for="event-offer-luggage-${i}">
              <span class="event__offer-title">${OFFERS[i].title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${OFFERS[i].price}</span>
            </label>
          </div>`;}
      );
      offersListDraw += `</div>
                    </section>`;
    }

    return offersListDraw;
  };

  const getDestinationSection = () => {
    let desctinationSectionDraw = '';
    const pictures = destinationsList[destination].pictures;
    if (destination) {
      desctinationSectionDraw += `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>`;


      desctinationSectionDraw += `
      <p class="event__destination-description">${destinationsList[destination].description}</p>`;

      if(pictures.length !== 0 ) {
        desctinationSectionDraw += `
        <div class="event__photos-container">
          <div class="event__photos-tape">
        `;

        for(let i = 0; i < pictures.length; i++) {
          desctinationSectionDraw += `
            <img class="event__photo" src="${pictures[i].src}" alt="Event photo">
          `;
        }

        desctinationSectionDraw += `
          </div>
        </div>
        `;
      }

      desctinationSectionDraw += '</section>';

    }

    return desctinationSectionDraw;
  };

  return `
  <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
  
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${getTypeList()}
              </fieldset>
            </div>
          </div>
  
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationsList[destination].name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${getDestinationList()}
            </datalist>
          </div>
  
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizePointEditTime(dateFrom)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizePointEditTime(dateTo)}">
          </div>
  
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice ? basePrice : ''}">
          </div>
  
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">

          ${getOffersList()}

          ${getDestinationSection()}

        </section>
      </form>
    </li>
    `;
};

export default class EditPointFormView {
  getTemplate() {
    return createEditPointFormTemplate();
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
