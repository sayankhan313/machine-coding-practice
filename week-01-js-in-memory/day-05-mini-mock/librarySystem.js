const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    available: true
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    available: true
  }
];

function validateBook(book) {
  return (
    book.title.trim() !== "" &&
    book.author.trim() !== ""
  );
}

function addBook(books, newBook) {
  if (!validateBook(newBook)) {
    return {
      success: false,
      data: null,
      error: "Book title and author cannot be empty"
    };
  }

  const duplicate = books.some(
    (book) => book.id === newBook.id
  );

  if (duplicate) {
    return {
      success: false,
      data: null,
      error: "Book with this ID already exists"
    };
  }

  books.push(newBook);

  return {
    success: true,
    data: newBook,
    error: null
  };
}

function findBookById(books, id) {
  const book = books.find(
    (book) => book.id === id
  );

  if (!book) {
    return {
      success: false,
      data: null,
      error: "Book not found"
    };
  }

  return {
    success: true,
    data: book,
    error: null
  };
}

function updateBook(books, id, updates) {
  const book = books.find(
    (book) => book.id === id
  );

  if (!book) {
    return {
      success: false,
      data: null,
      error: "Book not found"
    };
  }

  Object.assign(book, updates);

  return {
    success: true,
    data: book,
    error: null
  };
}

function deleteBook(books, id) {
  const index = books.findIndex(
    (book) => book.id === id
  );

  if (index === -1) {
    return {
      success: false,
      data: null,
      error: "Book not found"
    };
  }

  const deletedBook = books.splice(index, 1)[0];

  return {
    success: true,
    data: deletedBook,
    error: null
  };
}

function borrowBook(books, id) {
  const book = books.find(
    (book) => book.id === id
  );

  if (!book) {
    return {
      success: false,
      data: null,
      error: "Book not found"
    };
  }

  if (!book.available) {
    return {
      success: false,
      data: null,
      error: "Book is already borrowed"
    };
  }

  book.available = false;

  return {
    success: true,
    data: book,
    error: null
  };
}

function getAvailableBooks(books) {
  const availableBooks = books.filter(
    (book) => book.available === true
  );

  return {
    success: true,
    data: availableBooks,
    error: null
  };
}

// Tests

console.log(
  addBook(books, {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    available: true
  })
);

console.log(findBookById(books, 2));

console.log(
  updateBook(books, 2, {
    title: "Clean Code Updated"
  })
);

console.log(borrowBook(books, 1));

console.log(borrowBook(books, 1));

console.log(getAvailableBooks(books));

console.log(deleteBook(books, 3));

console.log(books);