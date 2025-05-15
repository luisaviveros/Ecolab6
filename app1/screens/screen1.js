import { makeRequest } from "../app.js";

const renderScreen1 = async () => {
  const app = document.getElementById("app");
  app.innerHTML = `<h2>Lista de Productos</h2><ul id="product-list">Cargando...</ul>`;

  try {
    const products = await makeRequest("/api/products", "GET");

    if (!products || products.length === 0) {
      document.getElementById("product-list").innerHTML = "<li>No hay productos disponibles</li>";
      return;
    }

    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // limpiar "Cargando..."

    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price} (${product.category || "Sin categoría"})`;
      productList.appendChild(li);
    });
  } catch (error) {
    document.getElementById("product-list").innerHTML = `<li>Error cargando productos: ${error.message}</li>`;
  }
};

export default renderScreen1;
