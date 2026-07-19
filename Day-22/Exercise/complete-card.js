const root = document.querySelector("#root");

const card = document.createElement("div");
const cardImage = document.createElement("img");
const cardBody = document.createElement("div");
const cardTitle = document.createElement("h2");
const cardDescription = document.createElement("p");
const cardPrice = document.createElement("span");
const cardButton = document.createElement("button");

cardImage.src = "image.png";
cardImage.alt = "Product Image";

cardTitle.textContent = "Premium Wireless Headphones";
cardDescription.textContent = "Experience high-quality sound with active noise cancellation and 40-hour battery life.";
cardPrice.textContent = "$199.99";
cardButton.textContent = "Add to Cart";

cardBody.append(cardTitle, cardDescription, cardPrice, cardButton);
card.append(cardImage, cardBody);
root.append(card);
