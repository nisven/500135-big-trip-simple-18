import FilterView from './view/filters-view.js';
import SortView from './view/sort-view.js';

import {render} from './render.js';
import PointsListPresenter from './presenter/trip-events-presenter.js';

import PointsModel from './model/points-model.js';
import LocalPointModel from './model/localPoint-model.js';

const sitePageHeaderElement = document.querySelector('.page-header');
const siteHeaderElement = sitePageHeaderElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');

const pointsListPresenter = new PointsListPresenter();
const pointsModel = new PointsModel();
const localPointModel = new LocalPointModel();

render(new FilterView(), siteHeaderElement);
render(new SortView(), siteTripEventsElement);

pointsListPresenter.init(siteTripEventsElement, pointsModel, localPointModel);
