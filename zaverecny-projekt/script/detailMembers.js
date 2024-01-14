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

async function handleUpdate() {
  event.preventDefault();
  // validation form
  // first name
  const firstNameInput = document.getElementById("firstName");
  let firstNameValue = firstNameInput.value.trim();
  if (firstNameValue === "") {
    alert("Please enter your first name!");
    return;
  }

  if (firstNameValue.length < 2) {
    alert("Please check first name - minimum 2 character!");
    return;
  }
  firstNameValue =
    firstNameValue.charAt(0).toUpperCase() +
    firstNameValue.slice(1).toLowerCase();

  firstNameInput.value = firstNameValue;
  // last name
  const lastNameInput = document.getElementById("lastName");
  let lastNameValue = lastNameInput.value.trim();
  if (lastNameValue === "") {
    alert("Please enter your last name!");
    return;
  }

  if (lastNameValue.length < 2) {
    alert("Please check last name - minimum 2 char!");
    return;
  }
  lastNameValue =
    lastNameValue.charAt(0).toUpperCase() +
    lastNameValue.slice(1).toLowerCase();

  lastNameInput.value = lastNameValue;
  // personal ID
  const personalIdInput = document.getElementById("personalId");
  const personalIdValue = personalIdInput.value.trim();
  // takyto format mi piradila chatGPT aby bol podla zadania
  const personalIdRegex = /^[A-Z]{2}\d{6}$/;
  if (personalIdValue === "") {
    alert("Please enter your personal ID!");
    retrun;
  }
  // format mam z chatGPT
  if (!personalIdRegex.test(personalIdValue)) {
    alert("Personal ID must have the format XX123456!");
    return;
  }
  if (personalIdValue.length < 8) {
    alert("Personal ID must have 8 character!");
    return;
  } else if (personalIdValue.length > 8) {
    alert("Personal ID must have 8 character!");
    return;
  }

  personalIdInput.value = personalIdValue;
  // birth date
  const dateInput = document.getElementById("dateOfBirth");
  const dateValue = dateInput.value;

  if (dateValue === "") {
    alert("Please enter your birth date!");
    return;
  }
  dateInput.value = dateValue;
  if (!confirm("Do you really want to update the member?")) return;

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

  if (!confirm("Do you really want to delete the member?")) return;
  const url = new URLSearchParams(window.location.search);
  const memberID = url.get("id");

  fetch(`https://student-fed1.metis.academy/api/Members/${memberID}`, {
    method: "DELETE",
  }).then(() => {
    window.location.pathname = "/zaverecny-projekt/pages/allMembers.html";
  });
}
