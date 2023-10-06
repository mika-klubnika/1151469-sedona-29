export const getData = (onSuccess) => {
  fetch('../1151469-sedona-29/data/data.json') // для github pages
  // fetch('../data/data.json') // для локальной разработки
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => console.log(error));
};
