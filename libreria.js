const getRemoteData = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("RESPONSE OBJECT", response);
      if (response.ok) {
        console.log("fetch terminata con successo!");
        return response.json();
      } else {
        throw new Error("Errore nella response");
      }
    })
    .then((data) => {
      console.log("finalmente i dati!", data);

      const main = document.getElementById("cont");

      for (i = 0; i < 100; i += 3) {
        const rows = document.createElement("div");
        rows.classList.add("row", "d-flex", "gy-5", "gx-4", "my-3");
        rows.innerHTML = `<div class="col-12 col-md-4 d-flex justify-content-center">
        <div class="card w-75">
    <img src="${
      data[i].img
    }" class="card-img-top" id="img1" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">Titolo: ${data[i].title} </h5>
    <p class="card-text">Prezzo: ${data[i].price}</p>
    
    </div>
    </div>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-center">
        <div class="card w-75">
    <img src="${
      data[i + 1].img
    }" class="card-img-top" id="img1" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">Titolo: ${data[i + 1].title} </h5>
    <p class="card-text">Prezzo: ${data[i + 1].price}</p>
    
    </div>
    </div>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-center">
        <div class="card w-75">
    <img src="${
      data[i + 2].img
    }" class="card-img-top" id="img1" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">Titolo: ${data[i + 2].title} </h5>
    <p class="card-text">Prezzo: ${data[i + 2].price}</p>
    
    </div>
    </div>
        </div>`;
        main.appendChild(rows);
      }
    })
    .catch((err) => {
      console.log("errore nella fetch!", err);
    });
};

getRemoteData();
