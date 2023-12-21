let books = JSON.parse(localStorage.getItem("books")) || [];
let output = document.getElementById("output");
let noData = document.getElementById("noData");

if (books.length === 0) {
  let message = document.createElement("p");
  message.innerText = "No data to display";
  noData.append(message);
} else {
  for (let i = 0; i < books.length; i++) {
    let row = document.createElement("tr");

    createTd(row, books[i].title);
    createTd(row, books[i].author);
    createTd(row, books[i].isbn);
    createTd(row, books[i].copiesAvailable);
    createTd(row, books[i].copiesAvailable);
    createTd(row, books[i].numberOfPages);

    let titleIcon = document.createElement("td");
    let icon = document.createElement("i");
    icon.classList.add("fa", "fa-info-circle");
    titleIcon.appendChild(icon);
    row.appendChild(titleIcon);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      removeHandler(i);
    };

    row.appendChild(deleteButton);

    output.append(row);
  }
}
// vytvoril som si funkciu ktora mi bude vytvarat "td"
function createTd(row, id) {
  let td = document.createElement("td");
  td.textContent = id;
  row.appendChild(td);
}

function removeHandler(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  output.deleteRow(index);
  // vzdy mi realodne stranku
  location.reload();
}
