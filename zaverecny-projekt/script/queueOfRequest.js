let noData = document.getElementById("noData");
let output = document.getElementById("output");

async function fetchData() {
  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/QueueItems"
    );
    const data = await response.json();
    if (!response.ok) {
      let message = document.createElement("p");
      message.innerText = "No data to display";
      noData.appendChild(message);
    }

    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let row = document.createElement("tr");

      createTd(row, data[i].member.firstName + " " + data[i].member.lastName);
      createTd(row, data[i].title.name);
      createTd(row, data[i].title.author);
      createTd(row, data[i].timeAdded);
      output.append(row);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
function createTd(row, id) {
  let td = document.createElement("td");
  td.textContent = id;
  row.appendChild(td);
}
