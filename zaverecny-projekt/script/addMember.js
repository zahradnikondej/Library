let members = [];
if (members === 0) {
  members = [];
}

async function handleSubmit() {
  event.preventDefault();

  let fields = ["firstName", "lastName", "personalId", "dateOfBirth"];

  let member = {};
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
  // end validation
  fields.forEach((field) => {
    member[field] = document.getElementById(field).value;
  });

  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/Members",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      }
    );

    if (response.ok) {
      alert("Succesfully");
      fields.forEach((field) => {
        member[field] = document.getElementById(field).value = "";
      });
      // window.location.href = "allMembers.html";
    } else {
      alert("Failed");
      console.error("Error fetch api");
    }
  } catch (error) {
    console.error("Fetch error");
  }
}

const objectofMix = {
  key: "value",
  key: "value",
  key: number,
  Array: [
    {
      key: "value",
      key: "value",
    },
    {
      key: "value",
      key: "value",
    },
  ],
};
