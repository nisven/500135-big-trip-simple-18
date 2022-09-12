import {generateDestination} from '../mock/destination.js';
import {COUNT_DESCTINATION} from '../const.js';

const destinationsList = Array.from({length: COUNT_DESCTINATION}, generateDestination);

for (let i = 0; i < destinationsList.length; i++) {
  destinationsList[i].id = i;
}

export {destinationsList};
