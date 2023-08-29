export const getData = (onSuccess, onFail) => {
  fetch('../1151469-sedona-29/json/data.json')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => console.log(error));
};
