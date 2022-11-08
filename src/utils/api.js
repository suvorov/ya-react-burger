const get = (url, func) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Ошибка запроса ${url}`);
      return response.json();
    })
    .then(data => func(data))
    .catch(err => console.error(`Error: ${err}`));
}

export const jsonPost = (url, json, func) => {
  fetch(url, {
    body: JSON.stringify(json),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Ошибка запроса ${url}`);
      return response.json();
    })
    .then(data => func(data))
    .catch(err => console.error(`Error: ${err}`));
}

export default get;