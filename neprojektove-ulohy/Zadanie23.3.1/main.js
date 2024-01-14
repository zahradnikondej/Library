import { arrayBooks } from "./script.js";

function showBooks(books) {
  const container = document.getElementById("list");
  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
      <h2>${book.Title}</h2>
      <p>Catalog number: ${book.CatalogNumber}</p>
      <p>Author: ${book.Author}</p>
      <p>Pages: ${book.NumberOfPages} | Year: ${book.NumberOfPages} | ISBN: ${book.ISBN}</p>
      <p>Cena: ${book.Price} EUR</p>
      
    `;
    container.appendChild(bookElement);
  });
}

document.addEventListener("DOMContentLoaded", () => showBooks(arrayBooks));
