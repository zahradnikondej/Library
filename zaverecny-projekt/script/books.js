let output = document.getElementById("output");

let noData = document.getElementById("noData");

async function fetchBooks() {
  const response = await fetch("https://student-fed1.metis.academy/api/Books");
  const books = await response.json();

  if (!response.ok) {
    let message = document.createElement("p");
    message.innerText = "No data to display";
    noData.appendChild(message);
  }

  for (let i = 0; i < books.length; i++) {
    let row = document.createElement("tr");

    createTd(row, books[i].author);
    createTd(row, books[i].name);
    createTd(row, books[i].isbn);
    createTd(row, books[i].availableCopies);
    createTd(row, books[i].totalAvailableCopies);
    createTd(row, books[i].numberOfPages);

    let titleIcon = document.createElement("td");
    let icon = document.createElement("i");
    icon.classList.add("fa", "fa-info-circle");
    // to ako mam zapisat to id na koniec mi poradil chatGPT
    icon.onclick = () => {
      window.location.href = `detailBook.html?id=${books[i].id}`;
    };

    titleIcon.appendChild(icon);
    row.appendChild(titleIcon);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => {
      removeHandler(books[i].id);
    };

    row.appendChild(deleteButton);

    output.append(row);
  }
}

fetchBooks();

// vytvoril som si funkciu ktora mi bude vytvarat "td"
function createTd(row, id) {
  let td = document.createElement("td");
  td.textContent = id;
  row.appendChild(td);
}

async function removeHandler(id) {
  fetch(`https://student-fed1.metis.academy/api/Books/${id}`, {
    method: "DELETE",
  }).then(() => {
    location.reload();
  });
}
