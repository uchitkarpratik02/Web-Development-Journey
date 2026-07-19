document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Laptop",
      price: "$999.99",
      description: "High-performance workstation equipped with a next-gen processor, ultra-sharp display, and all-day battery life.",
      image: "https://picsum.photos"
    },
    {
      name: "Phone",
      price: "$699.99",
      description: "Flagship mobile device featuring an advanced pro-grade camera system and a stunning edge-to-edge OLED display.",
      image: "https://picsum.photos"
    },
    {
      name: "Tablet",
      price: "$449.99",
      description: "Ultra-thin portable canvas designed for seamless transitions between creative workflows, streaming, and remote work.",
      image: "https://picsum.photos"
    },
    {
      name: "Headphones",
      price: "$249.99",
      description: "Immersive over-ear audio featuring elite hybrid active noise cancellation and master-grade acoustic balancing.",
      image: "https://picsum.photos"
    }
  ];

  const gridContainer = document.getElementById("product-grid");

  products.forEach(productData => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = productData.image;
    img.alt = productData.name;

    const infoDiv = document.createElement("div");
    infoDiv.className = "product-info";

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = productData.name;

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = productData.price;

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = productData.description;

    infoDiv.append(name, price, desc);
    card.append(img, infoDiv);
    gridContainer.append(card);
  });
});
