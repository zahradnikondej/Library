async function fetchDvdDetails() {
  // chatGPT
  const url = new URLSearchParams(window.location.search);
  const dvdId = url.get("id");
  // chatGPT
  if (!dvdId) {
    console.error("Dvd ID is missing in the URL");
  }

  const response = await fetch(
    `https://student-fed1.metis.academy/api/Dvds/${dvdId}`
  );
  const dvdDetails = await response.json();

  if (!response.ok) {
    console.error("Error fetch api");
  } else {
    document.getElementById("author").value = dvdDetails.author;
    document.getElementById("name").value = dvdDetails.name;
    document.getElementById("publishYear").value = dvdDetails.publishYear;
    document.getElementById("numberOfMinutes").value =
      dvdDetails.numberOfMinutes;
    document.getElementById("totalAvailableCopies").value =
      dvdDetails.totalAvailableCopies;
  }
}
fetchDvdDetails();

async function updateHandler() {
  event.preventDefault();
  if (!confirm("Do you really want to update the dvd?")) return;
  const url = new URLSearchParams(window.location.search);
  const dvdId = url.get("id");
  let fields = [
    "author",
    "name",
    "publishYear",
    "numberOfMinutes",
    "totalAvailableCopies",
  ];

  let dvd = {};

  fields.forEach((field) => {
    dvd[field] = document.getElementById(field).value;
  });
  fetch(`https://student-fed1.metis.academy/api/Dvds/${dvdId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dvd),
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/dvds.html";
  });
}
async function removeHandler() {
  event.preventDefault();
  if (!confirm("Do you really want to delete the dvd?")) return;
  const url = new URLSearchParams(window.location.search);
  const dvdId = url.get("id");

  fetch(`https://student-fed1.metis.academy/api/Dvds/${dvdId}`, {
    method: "DELETE",
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/dvds.html";
  });
}
