fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(datos => {
        let banderas = ''
        for (let articulo of datos) {
            banderas += `<div class="tarjeta"><img src="${articulo.image}"><br>
                    <p>Titulo:${articulo.title}</p>
                    <p>Categoria:${articulo.category}</p>
                    <p>Descripcion:${articulo.description}</p>
                    <p>Precio:${articulo.price}</p>
                    <p>Ranking:${articulo.rating}</p>
           
               </div>`
        }
        const elemento = document.querySelector("#banderas")
        elemento.innerHTML = banderas
        console.log(datos)}
    )
