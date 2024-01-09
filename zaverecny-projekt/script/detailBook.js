async function fetchBookDetails() {
  // chatGPT
  const url = new URLSearchParams(window.location.search);
  const bookId = url.get("id");

  if (!bookId) {
    console.error("Book ID is missing in the URL");
  }

  const response = await fetch(
    `https://student-fed1.metis.academy/api/Books/${bookId}`
  );
  const bookDetails = await response.json();

  if (!response.ok) {
    console.error("Error fetch api");
  } else {
    document.getElementById("author").value = bookDetails.author;
    document.getElementById("name").value = bookDetails.name;
    document.getElementById("isbn").value = bookDetails.isbn;
    document.getElementById("totalAvailableCopies").value =
      bookDetails.totalAvailableCopies;
    document.getElementById("numberOfPages").value = bookDetails.numberOfPages;
  }
}

fetchBookDetails();

async function handleUpdate() {
  event.preventDefault();
  if (!confirm("Do you really want to update the book?")) return;

  const url = new URLSearchParams(window.location.search);
  const bookId = url.get("id");
  let fields = [
    "author",
    "name",
    "isbn",
    "numberOfPages",
    "totalAvailableCopies",
  ];
  let book = {};

  fields.forEach((field) => {
    book[field] = document.getElementById(field).value;
  });
  fetch(`https://student-fed1.metis.academy/api/Books/${bookId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/books.html";
  });
}
async function removeHandler() {
  event.preventDefault();

  if (!confirm("Do you really want to delete the book?")) return;
  const url = new URLSearchParams(window.location.search);
  const bookId = url.get("id");

  fetch(`https://student-fed1.metis.academy/api/Books/${bookId}`, {
    method: "DELETE",
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/books.html";
  });
}
