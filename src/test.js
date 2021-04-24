fetch("https://run.mocky.io/v3/aa4d7762-6fd9-45aa-9ba3-51d89b8a722f")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let datas = data[0];
    //  console.log(datas);

    Object.keys(datas).forEach(function (key) {
      if (key == option) {
        //  console.log(data, key);
        var value = datas[key];
        setData(value);

        return false;
      }
    });
  });
