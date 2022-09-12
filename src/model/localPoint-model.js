import {generateLocalPoint} from '../mock/localPoint.js';

export default class LocalPointModel {
  localPoint = generateLocalPoint();

  getLocalPoint = () => this.localPoint;
}
