let noData = document.getElementById("noData");
let output = document.getElementById("output");

async function fetchData() {
  const response = await fetch(
    "https://student-fed1.metis.academy/api/RentalEntries"
  );
  let rentals = await response.json();
  rentals = rentals.filter((r) => !r.isReturned);
  console.log(rentals);
  if (rentals.length === 0) {
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
    iconLeft.classList.add("fa", "fa-arrow-circle-left", "left");
    iconLeft.style.color = "green";
    iconLeft.style.fontSize = "1.2em";
    iconLeft.addEventListener("mouseover", () => {
      iconLeft.style.fontSize = "1.4em";
      iconLeft.style.color = "lightgreen";
    });
    iconLeft.addEventListener("mouseout", () => {
      iconLeft.style.fontSize = "1.2em";
      iconLeft.style.color = "green";
    });
    iconLeft.onclick = () => {
      returnRent(rentals[i].memberId, rentals[i].titleId, rentals[i].id);
    };
    leftIcon.appendChild(iconLeft);
    row.appendChild(leftIcon);

    let rightIcon = document.createElement("td");
    let iconRight = document.createElement("i");
    iconRight.classList.add("fa", "fa-arrow-circle-right");
    iconRight.style.color = "blue";
    iconRight.style.fontSize = "1.2em";
    iconRight.addEventListener("mouseover", () => {
      iconRight.style.fontSize = "1.4em";
      iconRight.style.color = "lightblue";
    });
    iconRight.addEventListener("mouseout", () => {
      iconRight.style.fontSize = "1.2em";
      iconRight.style.color = "blue";
    });

    iconRight.onclick = () =>
      prolongRent(rentals[i].memberId, rentals[i].titleId, rentals[i].id);
    rightIcon.appendChild(iconRight);
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
  td.textContent = id !== null ? id : "";
  row.appendChild(td);
}

function typeBookOrDvd(type) {
  return type === 1 ? "Book" : type === 2 ? "DVD" : "Unknown";
}

async function prolongRent(memberId, titleId, id) {
  try {
    const response = await fetch(
      `https://student-fed1.metis.academy/api/RentalEntries/ProlongTitle/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          titleId: titleId,
        }),
      }
    );

    location.reload();
  } catch (error) {
    console.error(error);
  }
}

async function returnRent(memberId, titleId, id) {
  try {
    const response = await fetch(
      `https://student-fed1.metis.academy/api/RentalEntries/ReturnTitle/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          titleId: titleId,
        }),
      }
    );

    location.reload();
  } catch (error) {
    console.error(error);
  }
}
