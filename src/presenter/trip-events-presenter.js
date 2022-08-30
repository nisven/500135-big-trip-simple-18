import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import EditPointFormView from '../view/edit-point-from-view.js';

import {render} from '../render.js';

export default class PointsListPresenter {
  pointsListComponent = new PointsListView();
  pointComponent = new PointView();
  editPointFormComponent = new EditPointFormView();

  init = (contentContainer) => {
    this.contentContainer = contentContainer;

    render(this.pointsListComponent, this.contentContainer);
    render(new EditPointFormView(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  };
}
