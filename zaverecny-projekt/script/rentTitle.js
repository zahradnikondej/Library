async function addMembersList() {
  const membersList = document.getElementById("dataListMembers");

  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/Members"
    );
    const data = await response.json();

    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = `${item.id} ${item.firstName} ${item.lastName} `;
      membersList.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

addMembersList();

async function addTitleList() {
  const titleList = document.getElementById("dataListTitle");

  try {
    const responseBooks = await fetch(
      "https://student-fed1.metis.academy/api/Books"
    );

    const books = await responseBooks.json();

    const responseDvds = await fetch(
      "https://student-fed1.metis.academy/api/Dvds"
    );
    const dvds = await responseDvds.json();

    books.forEach((item) => {
      const option = document.createElement("option");
      option.value = `${item.id} ${item.name} / ${item.author} / ISBN:${item.isbn}`;
      titleList.appendChild(option);
    });

    dvds.forEach((item) => {
      const option = document.createElement("option");
      option.value = `${item.name} / ${item.author} ${item.id}`;
      titleList.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

addTitleList();

const today = new Date();

function getDate() {
  document.getElementById("date").value =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
}
getDate();

function vypocitajMaxDatum() {
  let maxDayBook = 21;
  let maxDayDvd = 7;

  let maxDateBook = new Date();
  maxDateBook.setDate(today.getDate() + maxDayBook);

  let maxDateDvd = new Date();
  maxDateDvd.setDate(today.getDate() + maxDayDvd);

  let dateBook = document.getElementById("maximumDateBook");
  let dateDvd = document.getElementById("maximumDateDvd");
  dateBook.innerText =
    "Maximum return day for books is: " + maxDateBook.toLocaleDateString();
  dateDvd.innerText =
    "Maximum retrun day for dvd is:" + maxDateDvd.toLocaleDateString();
}
vypocitajMaxDatum();

async function handleSubmit() {
  event.preventDefault();

  let memberInput = document.getElementById("member").value;
  let memberId = parseInt(memberInput.split(" ")[0], 10);

  let titleInput = document.getElementById("title").value;
  let titleId = parseInt(titleInput.split(" ")[0], 10);

  let rent = {
    memberId: memberId,
    titleId: titleId,
  };
  console.log(memberId, titleId);

  try {
    const response = await fetch(
      "https://student-fed1.metis.academy/api/RentalEntries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rent),
      }
    );

    if (response.ok) {
      alert("Successfully added!");

      document.getElementById("member").value = "";
      document.getElementById("title").value = "";
    } else {
      alert("Failed to add. Server returned: " + response.status);
    }
  } catch (error) {
    console.error("Error while sending data: ", error);
  }
  window.location.href = "allRentals.html";
}
