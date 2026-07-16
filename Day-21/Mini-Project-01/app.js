let bookCollection = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" }
];

const addBook = (title, author) => {
  const newBook = { id: Date.now(), title, author };
  bookCollection = [...bookCollection, newBook];
  console.log(`Added: "${title}"`);
};

const removeBook = (id) => {
  const initialLength = bookCollection.length;
  bookCollection = bookCollection.filter(book => book.id !== id);
  if (bookCollection.length < initialLength) {
    console.log(`Removed book with ID: ${id}`);
  } else {
    console.log(`Book ID ${id} not found.`);
  }
};

const searchBook = (keyword) => {
  console.log(`Searching for: "${keyword}"`);
  const results = bookCollection.filter(book => 
    book.title.toLowerCase().includes(keyword.toLowerCase()) ||
    book.author.toLowerCase().includes(keyword.toLowerCase())
  );
  if (results.length > 0) {
    results.forEach(book => console.log(`[ID: ${book.id}] ${book.title} by ${book.author}`));
  } else {
    console.log("No matching books found.");
  }
};

const showAllBooks = () => {
  console.log("Current Library Inventory:");
  if (bookCollection.length === 0) {
    console.log("The library is empty.");
    return;
  }
  const formattedBooks = bookCollection.map(book => `"${book.title}" by ${book.author} (ID: ${book.id})`);
  formattedBooks.forEach(bookStr => console.log(bookStr));
};

const countBooks = () => {
  console.log(`Total books: ${bookCollection.length}`);
  return bookCollection.length;
};

showAllBooks();
countBooks();

addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("To Kill a Mockingbird", "Harper Lee");

showAllBooks();
countBooks();

searchBook("hobbit");
searchBook("orwell");

removeBook(2);

showAllBooks();
countBooks();
