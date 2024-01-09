let noData = document.getElementById("noData");
let output = document.getElementById("output");

async function fetchDvd() {
  const response = await fetch("https://student-fed1.metis.academy/api/Dvds");
  const dvds = await response.json();
  console.log(dvds);

  if (!response.ok) {
    let message = document.createElement("p");
    message.innerText = "No data to display";
    noData.appendChild(message);
  }

  for (let i = 0; i < dvds.length; i++) {
    let row = document.createElement("tr");

    createTd(row, dvds[i].name);
    createTd(row, dvds[i].author);
    createTd(row, dvds[i].publishYear);
    createTd(row, dvds[i].availableCopies);
    createTd(row, dvds[i].totalAvailableCopies);

    let titleIcon = document.createElement("td");
    let icon = document.createElement("i");
    icon.classList.add("fa", "fa-info-circle");
    icon.onclick = () => {
      window.location.href = `detailDvd.html?id=${dvds[i].id}`;
    };
    titleIcon.appendChild(icon);
    row.appendChild(titleIcon);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => {
      removeHandler(dvds[i].id);
    };

    row.appendChild(deleteButton);

    output.append(row);
  }
}

fetchDvd();

function createTd(row, id) {
  let td = document.createElement("td");
  td.textContent = id;
  row.appendChild(td);
}
async function removeHandler(id) {
  fetch(`https://student-fed1.metis.academy/api/Dvds/${id}`, {
    method: "DELETE",
  }).then(() => {
    location.reload();
  });
}
