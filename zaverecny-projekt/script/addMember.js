let members = [];
if (members === 0) {
  members = [];
}

async function handleSubmit() {
  event.preventDefault();

  let fields = ["firstName", "lastName", "personalId", "dateOfBirth"];

  let member = {};

  const firstNameInput = document.getElementById("firstName");
  let firstNameValue = firstNameInput.value.trim();

  if (firstNameValue === "") {
    alert("Please check first name - pole nemôže byť prázdne.");
    return;
  }
  firstNameValue =
    firstNameValue.charAt(0).toUpperCase() +
    firstNameValue.slice(1).toLowerCase();

  firstNameInput.value = firstNameValue;

  member["firstName"] = firstNameValue;

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
    } else {
      alert("Failed");
      console.error("Error fetch api");
    }
  } catch (error) {
    console.error("Fetch error");
  }
}
