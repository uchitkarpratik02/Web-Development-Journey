const movies = [
  { name: "Kalki", price: 250 },
  { name: "Pushpa 2", price: 300 },
  { name: "War 2", price: 350 },
  { name: "KGF", price: 200 }
];

let selectedMovie = null;
let selectedSeatCount = 0;

function showMovies() {
  console.log("--- Available Movies ---");
  movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.name} - ₹${movie.price}`);
  });
}

function selectMovie(movieIndex, seatCount) {
  if (movieIndex < 0 || movieIndex >= movies.length) {
    console.log("Invalid movie selection.");
    return false;
  }
  selectedMovie = movies[movieIndex];
  selectedSeatCount = seatCount;
  console.log(`\nSelected: ${selectedMovie.name} for ${selectedSeatCount} seat(s).`);
  return true;
}

function calculatePrice(pricePerTicket, seats) {
  return pricePerTicket * seats;
}

function applyDiscount(totalAmount) {
  let discount = 0;
  if (totalAmount > 1000) {
    discount = totalAmount * 0.10;
    console.log(`Bulk booking bonus! 10% discount applied: -₹${discount}`);
  }
  return totalAmount - discount;
}

function printTicket() {
  if (!selectedMovie) {
    console.log("No ticket booked yet.");
    return;
  }

  const basePrice = calculatePrice(selectedMovie.price, selectedSeatCount);
  const finalPrice = applyDiscount(basePrice);

  console.log("\n=============================");
  console.log("       MOVIE TICKET          ");
  console.log("=============================");
  console.log(`Movie:    ${selectedMovie.name}`);
  console.log(`Seats:    ${selectedSeatCount}`);
  console.log(`Rate:     ₹${selectedMovie.price} each`);
  console.log("-----------------------------");
  console.log(`Subtotal: ₹${basePrice}`);
  console.log(`TOTAL:    ₹${finalPrice}`);
  console.log("=============================");
}

showMovies();
selectMovie(2, 4);
printTicket();
