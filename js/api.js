export const getData = (onSuccess, onFail) => {
  fetch('../data.json')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => console.log(error));
};