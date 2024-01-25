let searchButton: HTMLButtonElement = document.querySelector(
  ".button-search"
) as HTMLButtonElement;

const table: HTMLTableElement = document.querySelector(
  ".allTables"
) as HTMLTableElement;

const inputs: HTMLCollectionOf<HTMLInputElement> =
  document.getElementsByTagName("input");
const resetButton: HTMLButtonElement = document.querySelector(
  ".button-reset"
) as HTMLButtonElement;

function searchBooks() {
  event?.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      Array.from(table.rows).forEach((row) => {
        let column: HTMLTableCellElement = row.cells[i];

        if (
          column.innerText.toLowerCase().includes(inputs[i].value.toLowerCase())
        ) {
          row.style.display = "";
          table.rows[0].style.display = "";
        } else {
          table.rows[0].style.display = "";
          row.style.display = "none";
        }
      });
    }
  }
}
function reset() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

resetButton?.addEventListener("click", reset);
searchButton.addEventListener("click", searchBooks);
