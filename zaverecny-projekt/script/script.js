// function handleSubmit() {
//   event.preventDefault();

//   let author = document.getElementById("author").value;
//   let title = document.getElementById("title").value;
//   let isbn = document.getElementById("isbn").value;
//   let numberOfPage = document.getElementById("numberOfPages").value;
//   let copiesAvailable = document.getElementById("copiesAvailable").value;
//   let totalCopies = document.getElementById("totalCopies").value;
//   let price = document.getElementById("price").value;

//   alert(
//     "The title with these data has been entered into the database" +
//       "\nAuthor: " +
//       author +
//       "\nTitle: " +
//       title +
//       "\nAvailable Copies: " +
//       copiesAvailable +
//       "\nNumber of Pages: " +
//       numberOfPage +
//       "\nISBN: " +
//       isbn +
//       "\nPrice: " +
//       price +
//       "\nTotal number of copies: " +
//       totalCopies
//   );
// }

let books = [];

function handleSubmit() {
  event.preventDefault();

  let fields = [
    "author",
    "title",
    "isbn",
    "numberOfPages",
    "copiesAvailable",
    "totalCopies",
    "price",
  ];
  let book = {};

  fields.forEach((field) => {
    book[field] = document.getElementById(field).value;
  });
  books.push(book);
  fields.forEach((field) => {
    document.getElementById(field).value = "";
  });
  listElements();
}

function handleRemoveLastBook() {
  books.pop();
  listElements();
}
function clearList() {
  books = [];
  listElements();
}

function listElements() {
  console.clear();

  books.forEach((book, index) => {
    console.log(`
        Kniha č.${index + 1}
        Autor: ${book["author"]}
        Názov: ${book["title"]}
        Dostupné kópie: ${book["copiesAvailable"]}
        Počet strán: ${book["numberOfPages"]}
        ISBN: ${book["isbn"]}
        Cena: ${book["price"]} Euro
        ---------------------------------------
        `);
  });
}
