document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.getElementById("product-grid");
// funcion para cargar los productos
  function loadProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        //creando los elementos html para cada producto
        products.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
        //creando los temporizadores e id de cada producto
          const timerDuration = Math.floor(Math.random() * 3) + 1;
          const timerId = `timer-${product.id}`;
          const buyButtonId = `buy-${product.id}`;
        // creando los elementos de cada card del producto
          productCard.innerHTML = `
            <b class="category">Categoría: ${product.category}</b>
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="description">${product.description.slice(0, 100)}...</p>
            <p class="price">$ ${product.price}</p>
            <div class="timer" id="${timerId}">${timerDuration} minutos</div>
            <button class="buy-button" id="${buyButtonId}">Comprar</button>
            `;

          //agregando cada card al grid de productos
          productGrid.appendChild(productCard);
          // mostrando mensaje de compra al hacer click
          const button = document.getElementById(buyButtonId);
          button.addEventListener("click", () => {
            alert("Muchas gracias por su compra !!!");
          });

          //iniciando el temporizador
          startTimer(timerDuration, buyButtonId);
        });
      })
      .catch((error) => console.error("Error al cargar los productos:", error));
  }
  // funcion de temporizado de cada boton
  function startTimer(duration, buttonId) {
    let timer = duration * 60;
    const button = document.getElementById(buttonId);

    const interval = setInterval(() => {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      document.getElementById(`timer-${buttonId.split("-")[1]}`).textContent =
        `${minutes} min ${seconds < 10 ? "0" : ""}${seconds} sec`;

      timer--;

      if (timer < 0) {
        clearInterval(interval);
        button.disabled = true;
        button.classList.add("disabled");
        button.textContent = "Agotado";
        button.style.background = "#ccc"; /* Cambia el botón a gris */
      }
    }, 1000);
  }
  // cargando los productos
  loadProducts();
});
