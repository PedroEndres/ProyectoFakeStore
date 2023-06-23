fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((datos) => {
    let Cartas = "";
    for (let articulo of datos) {
      Cartas += `<div class="tarjeta">
                   <img src="${articulo.image}"><br>
                   <p class="p-categoria">${articulo.category}</p>
                   <p class="p-titulo">${articulo.title}</p>
                   <p class="p-descripcion">${articulo.description}</p>
                   <p class="p-precio">Price: ${articulo.price}</p>
                   <p>${articulo.rating}</p>
               </div>`;
    }
    const elemento = document.querySelector("#articulos");
    elemento.innerHTML = Cartas;
    console.log(datos);
  });
