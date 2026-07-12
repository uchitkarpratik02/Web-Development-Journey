let books = [
  "Atomic Habits",
  "Clean Code",
  "Eloquent JavaScript",
  "The Pragmatic Programmer"
];

function showBooks() {
  if (books.length === 0) {
    console.log("The library is empty.");
  } else {
    books.forEach((book, index) => {
      console.log(`${index + 1}. ${book}`);
    });
  }
}

function searchBook(title) {
  if (!title) return;
  const foundBooks = books.filter(book => 
    book.toLowerCase().includes(title.toLowerCase())
  );
  if (foundBooks.length > 0) {
    foundBooks.forEach(book => console.log(`Found: ${book}`));
  } else {
    console.log("No books found.");
  }
}

function addBook(title) {
  if (!title || title.trim() === "") return;
  const cleanTitle = title.trim();
  if (books.includes(cleanTitle)) {
    console.log("Book already exists.");
  } else {
    books.push(cleanTitle);
    console.log(`Added: ${cleanTitle}`);
  }
}

function removeBook(title) {
  if (!title) return;
  const index = books.findIndex(book => book.toLowerCase() === title.toLowerCase());
  if (index !== -1) {
    const removed = books.splice(index, 1);
    console.log(`Removed: ${removed}`);
  } else {
    console.log("Book not found.");
  }
}

function countBooks() {
  console.log(`Total books: ${books.length}`);
}

showBooks();
countBooks();
addBook("You Don't Know JS");
searchBook("code");
removeBook("clean code");
showBooks();
countBooks();
