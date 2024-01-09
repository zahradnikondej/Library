let noData = document.getElementById("noData");
let output = document.getElementById("output");

async function fetchData() {
  const response = await fetch(
    "https://student-fed1.metis.academy/api/Members"
  );
  const members = await response.json();
  if (!response.ok) {
    let message = document.createElement("p");
    message.innerText = "No data to display";
    noData.appendChild(message);
  }

  for (let i = 0; i < members.length; i++) {
    let row = document.createElement("tr");

    createTd(row, members[i].firstName);
    createTd(row, members[i].lastName);
    createTd(row, members[i].personalId);
    createTdDate(row, members[i].dateOfBirth);

    let titleIcon = document.createElement("td");
    let icon = document.createElement("i");
    icon.classList.add("fa", "fa-info-circle");
    icon.onclick = () => {
      window.location.href = `detailMembers.html?id=${members[i].id}`;
    };
    titleIcon.appendChild(icon);
    row.appendChild(titleIcon);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => {
      removeHandler(members[i].id);
    };
    row.appendChild(deleteButton);
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
function createTdDate(row, timestamp) {
  let td = document.createElement("td");

  const dateObject = new Date(timestamp);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  td.textContent = formattedDate;
  row.appendChild(td);
}
