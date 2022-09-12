import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import EditPointFormView from '../view/edit-point-from-view.js';
import AddPointFormView from '../view/add-new-point-from-view.js';

import {render} from '../render.js';

export default class PointsListPresenter {
  pointsListComponent = new PointsListView();
  pointComponent = new PointView();
  editPointFormComponent = new EditPointFormView();
  addNewPointFormComponent = new AddPointFormView();

  init = (contentContainer, pointsModel, localPointModel) => {
    this.contentContainer = contentContainer;
    this.pointsModel = pointsModel;
    this.listPoints = [...this.pointsModel.getPoints()];
    this.localPoint = localPointModel.getLocalPoint();

    render(this.pointsListComponent, this.contentContainer);
    // render(new EditPointFormView(), this.pointsListComponent.getElement());
    render(new AddPointFormView(this.localPoint), this.pointsListComponent.getElement());
    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView(this.listPoints[i]), this.pointsListComponent.getElement());
    }
  };
}
