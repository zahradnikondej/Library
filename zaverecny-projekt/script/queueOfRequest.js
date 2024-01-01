let noData = document.getElementById("noData");
let output = document.getElementById("output");

async function fetchData() {
  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/QueueItems"
    );

    if (!response.ok) {
      let message = document.createElement("p");
      message.innerText = "No data to display";
      noData.appendChild(message);
    }

    const data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
