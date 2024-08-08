function fetchData() {
  fetch("https://6681298d04acc3545a05ed56.mockapi.io/shikikie")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK" + response.statusText);
      }
      return response.json();
    })

    .then((data) => {
      console.log(data);
      const dataCon = document.getElementById("todo");
      dataCon.innerHTML = ""; //clear any existing content

      data.forEach(todo => {
        const dataDiv = document.createElement("div");
        dataDiv.innerHTML = `
         <h2>ชื่อ : ${todo.name}</h2>
        <p>ที่อยู่ : ${todo.country}</p>
        <img src="${todo.avatar}" width="5%">`
        ; 

        dataCon.appendChild(dataDiv);
      })
    })
    .catch((error) => {
      console.error("there was a proplem with the fetch operation", error);
    });
}

fetchData();