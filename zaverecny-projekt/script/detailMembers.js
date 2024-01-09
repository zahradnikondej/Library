async function fetchBookDetails() {
  // chatGPT
  const url = new URLSearchParams(window.location.search);
  const memberId = url.get("id");
  // chatGPT
  if (!memberId) {
    console.error("Dvd ID is missing in the URL");
  }

  const response = await fetch(
    `https://student-fed1.metis.academy/api/Members/${memberId}`
  );
  const memberDetails = await response.json();

  if (!response.ok) {
    console.error("Error fetch api");
  } else {
    document.getElementById("firstName").value = memberDetails.firstName;
    document.getElementById("lastName").value = memberDetails.lastName;
    document.getElementById("dateOfBirth").value = memberDetails.dateOfBirth;
    // const dateOfBirthElement = document.getElementById("dateOfBirth");
    // createTdDate(dateOfBirthElement, memberDetails.dateOfBirth);
    document.getElementById("personalId").value = memberDetails.personalId;
  }
}

fetchBookDetails();

// chatGPT nepacil sa mi format chcem aby vyzeral jednoduchsie
// function createTdDate(element, timestamp) {
//   const dateObject = new Date(timestamp);

//   const day = dateObject.getDate();
//   const month = dateObject.getMonth() + 1;
//   const year = dateObject.getFullYear();

//   const formattedDate = `${day}.${month}.${year}`;

//   element.value = formattedDate;
// }

async function handleUpdate() {
  event.preventDefault();
  if (!confirm("Do you really want to update the book?")) return;

  const url = new URLSearchParams(window.location.search);
  const memberID = url.get("id");
  let fields = ["firstName", "lastName", "dateOfBirth", "personalId"];
  let member = {};

  fields.forEach((field) => {
    member[field] = document.getElementById(field).value;
  });
  fetch(`https://student-fed1.metis.academy/api/Members/${memberID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/allMembers.html";
  });
}
async function removeHandler() {
  event.preventDefault();

  if (!confirm("Do you really want to delete the book?")) return;
  const url = new URLSearchParams(window.location.search);
  const memberID = url.get("id");

  fetch(`https://student-fed1.metis.academy/api/Members/${memberID}`, {
    method: "DELETE",
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/allMembers.html";
  });
}
