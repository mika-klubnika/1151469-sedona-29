//Рандомные целые положительные числа
export const getRandomInt = (min, max) => {
  if (min < 0 || min >= max) {
    return 0;
  }
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

//Рандомный элемент массива
export const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};
