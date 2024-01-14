import { inputBooks } from "./data.js";

// chatGPT
function generationNumber(index) {
  return "BO-" + index.toString().padStart(4, "");
}

function filteredBooks(books) {
  const arrayBooks = [];
  let index = 1001;

  for (const book of books) {
    if (
      book.Title.trim() &&
      book.Author.trim() &&
      book.ISBN !== null &&
      book.ISBN !== undefined &&
      book.ISBN.toString().trim() &&
      book.Price !== null &&
      book.Price !== undefined &&
      book.Price >= 0
    ) {
      // chatGPT
      book.CatalogNumber = generationNumber(index++);
      book.NumberOfPages = book.NumberOfPages ?? "Neuvedené";
      book.PublishedYear = book.PublishedYear ?? "Neuvedené";
      arrayBooks.push(book);
    }
  }
  return arrayBooks;
}

export const arrayBooks = filteredBooks(inputBooks.books);
