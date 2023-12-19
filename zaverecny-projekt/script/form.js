let books = JSON.parse(localStorage.getItem("books")) || [];
if (books === null) {
  books = [];
}

function handleSubmit() {
  event.preventDefault();

  let fields = [
    "author",
    "title",
    "isbn",
    "numberOfPages",
    "copiesAvailable",
    "totalCopies",
  ];
  let book = {};

  fields.forEach((field) => {
    book[field] = document.getElementById(field).value;
  });
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  console.log(books);
  fields.forEach((field) => {
    document.getElementById(field).value = "";
  });

  // po submite ma prehodi na stranku books
  window.location.href = "books.html";
}
