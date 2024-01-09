let output = document.getElementById("output");
let noData = document.getElementById("noData");

async function fetchBooks() {
  const response = await fetch(
    "https://student-fed1.metis.academy/api/Messages"
  );
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    let message = document.createElement("p");
    message.innerText = "No data to display";
    noData.appendChild(message);
  }

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");

    createTd(row, data[i].member.firstName + " " + data[i].member.lastName);
    createTd(row, data[i].messageSubject);
    createTd(row, data[i].messageContext);
    createTdDate(row, data[i].sendData);

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

// upravil som si format na datum
function createTdDate(row, timestamp) {
  let td = document.createElement("td");

  const dateObject = new Date(timestamp);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const hour = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const second = dateObject.getSeconds();

  const formattedDate = `${year}.${month}.${day} ${hour}:${minutes}:${second}`;

  td.textContent = formattedDate;
  row.appendChild(td);
}
