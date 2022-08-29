const get = (url, func) => {
  fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Ошибка запроса ${url}`);
        return response.json();
      })
      .then(data => func(data))
      .catch(err => console.error(`Error: ${err}`));
}

export default get;