import {getRandomInteger} from '../utils.js';

const generateDescription = () => {
  const descriptions = [
    'Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.',
    'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'Geneva, is a beautiful city, a true asian pearl, with crowded streets.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateName = () => {
  const name = [
    'Amsterdam',
    'Chamonix',
    'Geneva',
    'Paris',
    'Berlin',
  ];

  const randomIndex = getRandomInteger(0, name.length - 1);

  return name[randomIndex];
};

const generatePhoto = () => {
  const arrayPhoto = [];
  const randomIndex = getRandomInteger(0, 5);

  for (let index = 0; index < randomIndex; index++) {
    arrayPhoto.push(
      {
        src: `img/photos/${getRandomInteger(1, 5)}.jpg`,
        description: 'Picture'
      }
    );
  }

  return arrayPhoto;
};


export const generateDestination = () => ({
  id: 0,
  description: generateDescription(),
  name: generateName(),
  pictures: generatePhoto()
});
