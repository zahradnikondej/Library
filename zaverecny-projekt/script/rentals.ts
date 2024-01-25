document.addEventListener("DOMContentLoaded", function () {
  const noData: HTMLDivElement = document.getElementById(
    "noData"
  ) as HTMLDivElement;
  const output: HTMLElement = document.getElementById("output") as HTMLElement;
  const typeSelector: HTMLSelectElement = document.getElementById(
    "typNazvu"
  ) as HTMLSelectElement;

  function typeBookOrDvd(type: number): string {
    return type === 1 ? "Book" : type === 2 ? "DVD" : "Unknown";
  }

  async function fetchData(): Promise<void> {
    output.innerHTML = "";
    noData.innerHTML = "";

    const selectedType: string = typeSelector.value;
    const response: Response = await fetch(
      "https://student-fed1.metis.academy/api/RentalEntries"
    );
    let rentals: any = await response.json();

    rentals = rentals.filter((r: any) => !r.isReturned);
    console.log(rentals);

    if (rentals.length === 0) {
      let message: HTMLParagraphElement = document.createElement("p");
      message.innerText = "No data to display";
      noData.appendChild(message);
      return;
    }

    if (selectedType === "books") {
      rentals = rentals.filter((r: any) => r.titleType === 1);
    } else if (selectedType === "dvd") {
      rentals = rentals.filter((r: any) => r.titleType === 2);
    }
    for (let i: number = 0; i < rentals.length; i++) {
      let row: HTMLTableRowElement = document.createElement("tr");

      createTd(
        row,
        rentals[i].member.firstName + " " + rentals[i].member.lastName
      );

      createTd(row, rentals[i].title.name);
      createTd(row, rentals[i].title.author);
      createTd(row, rentals[i].rentedDate);
      createTd(row, rentals[i].returnDate);
      createTd(row, rentals[i].maxReturnDate);
      createTd(row, typeBookOrDvd(rentals[i].titleType));

      // icona na vratenie
      let leftIcon: HTMLTableCellElement = document.createElement("td");
      let iconLeft: HTMLElement = document.createElement("i");
      iconLeft.classList.add("fa", "fa-arrow-circle-left", "left");
      iconLeft.style.color = "green";
      iconLeft.style.fontSize = "1.2em";
      iconLeft.addEventListener("mouseover", () => {
        iconLeft.style.fontSize = "1.4em";
        iconLeft.style.color = "lightgreen";
      });
      iconLeft.addEventListener("mouseout", () => {
        iconLeft.style.fontSize = "1.2em";
        iconLeft.style.color = "green";
      });
      iconLeft.onclick = () => {
        returnRent(rentals[i].memberId, rentals[i].titleId, rentals[i].id);
      };
      leftIcon.appendChild(iconLeft);
      row.appendChild(leftIcon);

      // icona na predlzenie
      let rightIcon: HTMLTableCellElement = document.createElement("td");
      let iconRight: HTMLElement = document.createElement("i");
      iconRight.classList.add("fa", "fa-arrow-circle-right");
      iconRight.style.color = "blue";
      iconRight.style.fontSize = "1.2em";
      iconRight.addEventListener("mouseover", () => {
        iconRight.style.fontSize = "1.4em";
        iconRight.style.color = "lightblue";
      });
      iconRight.addEventListener("mouseout", () => {
        iconRight.style.fontSize = "1.2em";
        iconRight.style.color = "blue";
      });

      iconRight.onclick = () =>
        prolongRent(rentals[i].memberId, rentals[i].titleId, rentals[i].id);
      rightIcon.appendChild(iconRight);
      row.appendChild(rightIcon);

      output.append(row);
    }
  }

  typeSelector.addEventListener("change", fetchData);

  fetchData();
});

function createTd(row: any, id: any) {
  let td: HTMLTableCellElement = document.createElement("td");
  td.textContent = id;
  row.appendChild(td);
}

async function prolongRent(
  memberId: number,
  titleId: number,
  id: number
): Promise<void> {
  try {
    const response: Response = await fetch(
      `https://student-fed1.metis.academy/api/RentalEntries/ProlongTitle/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          titleId: titleId,
        }),
      }
    );

    location.reload();
  } catch (error) {
    console.error(error);
  }
}

async function returnRent(
  memberId: number,
  titleId: number,
  id: number
): Promise<void> {
  try {
    const response: Response = await fetch(
      `https://student-fed1.metis.academy/api/RentalEntries/ReturnTitle/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          titleId: titleId,
        }),
      }
    );

    location.reload();
  } catch (error) {
    console.error(error);
  }
}
