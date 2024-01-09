let dvds = [];
if (dvds === null) {
  dvds = [];
}

async function handleSubmit() {
  event.preventDefault();
  let fields = [
    "name",
    "author",
    "publishYear",
    "availableCopies",
    "totalAvailableCopies",
  ];

  let dvd = {};

  fields.forEach((field) => {
    dvd[field] = document.getElementById(field).value;
  });

  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/Dvds",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/json",
        },
        body: JSON.stringify(dvd),
      }
    );

    if (response.ok) {
      alert("Successfully!!!");
    } else {
      alert("Failed");
      console.error("Fetch api error");
    }
  } catch (error) {
    console.error("Fetch error");
  }
  window.location.href = "dvds.html";
}
