function inputValues() {
  event.preventDefault();

  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let isbn = document.getElementById("isbn").value;
  let numberOfPage = document.getElementById("numberOfPages").value;
  let copiesAvailable = document.getElementById("copiesAvailable").value;
  let totalCopies = document.getElementById("totalCopies").value;
  let price = document.getElementById("price").value;

  alert(
    "The title with these data has been entered into the database" +
      "\nAuthor: " +
      author +
      "\nTitle: " +
      title +
      "\nAvailable Copies: " +
      copiesAvailable +
      "\nNumber of Pages: " +
      numberOfPage +
      "\nISBN: " +
      isbn +
      "\nPrice: " +
      price +
      "\nTotal number of copies: " +
      totalCopies
  );
}
