import {generatePoint} from '../mock/point.js';
import {COUNT_POINT} from '../const.js';

export default class PointsModel {
  points = Array.from({length: COUNT_POINT}, generatePoint);

  getPoints = () => {

    for (let i = 0; i < this.points.length; i++) {
      this.points[i].id = i;
    }

    // eslint-disable-next-line no-console
    console.log(this.points);
    return this.points;
  };
}
