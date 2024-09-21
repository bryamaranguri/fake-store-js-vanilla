document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.getElementById("product-grid");

  function loadProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        products.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");

          const timerDuration = Math.floor(Math.random() * 2) + 2;
          const timerId = `timer-${product.id}`;
          const buyButtonId = `buy-${product.id}`;

          productCard.innerHTML = `
            <p class="category">Categoría: ${product.category}</p>
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p class="description">${product.description.slice(0, 100)}...</p>
            <p class="price">$${product.price}</p>
            <div class="timer" id="${timerId}">${timerDuration} minutos</div>
            <button class="buy-button" id="${buyButtonId}">Comprar</button>
            `;



          productGrid.appendChild(productCard);

          const button = document.getElementById(buyButtonId);
          button.addEventListener("click", () => {
            alert("Comprado");
          });

          startTimer(timerDuration, buyButtonId);
        });
      })
      .catch((error) => console.error("Error al cargar los productos:", error));
  }

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

  loadProducts();
});
