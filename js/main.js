fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

//   {
//     let banderas = "";
//     for (let pais of datos) {
//       banderas += `<div class="tarjeta"><img src="${image}"><br>
//               <p>Pais:${pais.name}</p>
//               <p>Capital:${pais.capital}</p>
//               <p>Población:${pais.population.toLocaleString()}</p>
//               <p>Continente:${pais.region}</p>
//               <p>Idioma:${pais.languages[0].name}</p>

//          </div>`;
//     }
//     const elemento = document.querySelector("#banderas");
//     elemento.innerHTML = banderas;

//   }
