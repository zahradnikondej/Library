let noData = document.getElementById("noData");
let output = document.getElementById("output");

async function fetchData() {
  const response = await fetch(
    "https://student-fed1.metis.academy/api/RentalEntries"
  );
  const rentals = await response.json();

  console.log(rentals);
  if (!response.ok) {
    let message = document.createElement("p");
    message.innerText = "No data to display";
    noData.appendChild(message);
  }

  for (let i = 0; i < rentals.length; i++) {
    let row = document.createElement("tr");

    createTd(
      row,
      rentals[i].member.firstName + " " + rentals[i].member.lastName
    );

    createTd(row, rentals[i].title.name);
    createTd(row, rentals[i].title.author);
    createTd(row, rentals[i].rentedDate);
    createTd(row, rentals[i].returnDate);
    createTd(row, rentals[i].maxReturnDate);
    createTd(row, typeBookOrDvd(rentals[i].titleType));

    let leftIcon = document.createElement("td");
    let iconLeft = document.createElement("i");
    iconLeft.classList.add("fa", "fa-arrow-circle-left");
    iconLeft.style.color = "green";
    iconLeft.style.fontSize = "1.3em";
    leftIcon.appendChild(iconLeft);
    row.appendChild(leftIcon);

    let rightIcon = document.createElement("td");
    let icon = document.createElement("i");
    icon.classList.add("fa", "fa-arrow-circle-right");
    icon.style.color = "blue";
    icon.style.fontSize = "1.3em";
    rightIcon.appendChild(icon);
    row.appendChild(rightIcon);

    output.append(row);
  }
}

fetchData();

async function removeHandler(id) {
  fetch(`https://student-fed1.metis.academy/api/Members/${id}`, {
    method: "DELETE",
  }).then(() => {
    location.reload();
  });
}

function createTd(row, id) {
  let td = document.createElement("td");
  td.textContent = id;
  row.appendChild(td);
}
// chatGPT
function typeBookOrDvd(type) {
  return type === 1 ? "Book" : type === 2 ? "DVD" : "Unknown";
}
