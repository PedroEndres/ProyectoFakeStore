//  Llamado de la API
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((datos) => {
    const contenedor = document.querySelector("#articulos");
    let Cartas = [];
    for (let articulo of datos) {
      Cartas += `<div class="tarjeta">
                   <img src="${articulo.image}"><br>
                   <p class="p-categoria">${articulo.category}</p>
                   <p class="p-titulo">${articulo.title}</p>
                   <p class="p-descripcion">${articulo.description}</p>
                   <p class="p-precio">Price: $${articulo.price}</p>
                   <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
               </div>`;
    }
    contenedor.innerHTML = Cartas;

    //  Filtros por categorias

    const btnAll = document.getElementById("All");
    btnAll.addEventListener("click", () => {
      let Cartas = [];
      for (let articulo of datos) {
        Cartas += `<div class="tarjeta">
                     <img src="${articulo.image}"><br>
                     <p class="p-categoria">${articulo.category}</p>
                     <p class="p-titulo">${articulo.title}</p>
                     <p class="p-descripcion">${articulo.description}</p>
                     <p class="p-precio">Price: $${articulo.price}</p>
                     <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                 </div>`;
      }
      contenedor.innerHTML = Cartas;
    });

    console.log(datos);

    const btnMujer = document.getElementById("Mujer");

    btnMujer.addEventListener("click", () => {
      Cartas = "";
      const filtro = datos.filter(
        (carta) => carta.category === `women's clothing`
      );
      for (let articulo of filtro) {
        Cartas += `<div class="tarjeta">
                     <img src="${articulo.image}"><br>
                     <p class="p-categoria">${articulo.category}</p>
                     <p class="p-titulo">${articulo.title}</p>
                     <p class="p-descripcion">${articulo.description}</p>
                     <p class="p-precio">Price: ${articulo.price}</p>
                     <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                 </div>`;
      }
      contenedor.innerHTML = Cartas;
    });

    const btnHombre = document.getElementById("Hombre");
    btnHombre.addEventListener("click", () => {
      Cartas = "";
      const filtro = datos.filter(
        (carta) => carta.category === `men's clothing`
      );
      for (let articulo of filtro) {
        Cartas += `<div class="tarjeta">
                     <img src="${articulo.image}"><br>
                     <p class="p-categoria">${articulo.category}</p>
                     <p class="p-titulo">${articulo.title}</p>
                     <p class="p-descripcion">${articulo.description}</p>
                     <p class="p-precio">Price: ${articulo.price}</p>
                     <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                 </div>`;
      }
      contenedor.innerHTML = Cartas;
    });

    const btnJoyas = document.getElementById("Joyas");
    btnJoyas.addEventListener("click", () => {
      Cartas = "";
      const filtro = datos.filter((carta) => carta.category === `jewelery`);
      for (let articulo of filtro) {
        Cartas += `<div class="tarjeta">
                     <img src="${articulo.image}"><br>
                     <p class="p-categoria">${articulo.category}</p>
                     <p class="p-titulo">${articulo.title}</p>
                     <p class="p-descripcion">${articulo.description}</p>
                     <p class="p-precio">Price: ${articulo.price}</p>
                     <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                 </div>`;
      }
      contenedor.innerHTML = Cartas;
    });

    const btnElectronica = document.getElementById("Electronica");
    btnElectronica.addEventListener("click", () => {
      Cartas = "";
      const filtro = datos.filter((carta) => carta.category === `electronics`);
      for (let articulo of filtro) {
        Cartas += `<div class="tarjeta">
                     <img src="${articulo.image}"><br>
                     <p class="p-categoria">${articulo.category}</p>
                     <p class="p-titulo">${articulo.title}</p>
                     <p class="p-descripcion">${articulo.description}</p>
                     <p class="p-precio">Price: ${articulo.price}</p>
                     <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                 </div>`;
      }
      contenedor.innerHTML = Cartas;
    });

    //  Filtro por Búsqueda

    const btnBuscar = document.getElementById("btnBuscar");
    const buscador = document.getElementById("buscador");
    btnBuscar.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(buscador.value);
      if (buscador.value !== "") {
        const busqueda = datos.filter((carta) =>
          carta.title.startsWith(buscador.value)
        );
        Cartas = "";
        for (let articulo of busqueda) {
          Cartas += `<div class="tarjeta">
                       <img src="${articulo.image}"><br>
                       <p class="p-categoria">${articulo.category}</p>
                       <p class="p-titulo">${articulo.title}</p>
                       <p class="p-descripcion">${articulo.description}</p>
                       <p class="p-precio">Price: ${articulo.price}</p>
                       <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                   </div>`;
        }
        contenedor.innerHTML = Cartas;
      } else {
        let Cartas = [];
        for (let articulo of datos) {
          Cartas += `<div class="tarjeta">
                       <img src="${articulo.image}"><br>
                       <p class="p-categoria">${articulo.category}</p>
                       <p class="p-titulo">${articulo.title}</p>
                       <p class="p-descripcion">${articulo.description}</p>
                       <p class="p-precio">Price: $${articulo.price}</p>
                       <p class="p-rating"><img src="img/star.png" class="star-rating" alt="Estrella de rating">${articulo.rating.rate}</p>
                   </div>`;
        }
        contenedor.innerHTML = Cartas;
      }
    });
  });
