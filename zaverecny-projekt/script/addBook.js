let books = [];
if (books === null) {
  books = [];
}

async function handleSubmit() {
  event.preventDefault();

  let fields = [
    "author",
    "name",
    "isbn",
    "numberOfPages",
    "availableCopies",
    "totalAvailableCopies",
  ];
  let book = {};

  fields.forEach((field) => {
    book[field] = document.getElementById(field).value;
  });
  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/Books",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      }
    );

    if (response.ok) {
      alert("Successfully!!!");
    } else {
      alert("Failed");
      console.error("Error fetch api");
    }
  } catch (error) {
    console.error("Fetch error");
  }
  window.location.href = "books.html";
}
