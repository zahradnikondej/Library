document.addEventListener("DOMContentLoaded", function () {
  // Function to populate datalist from server data
  async function populateDatalistFromServer(datalistId, endpoint) {
    const datalist = document.getElementById(datalistId);

    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      data.forEach((item) => {
        const option = document.createElement("option");
        option.value = `${item.firstName} ${item.lastName}`;
        datalist.appendChild(option);
      });
    } catch (error) {
      console.error("Error fetching data from the server:", error);
    }
  }

  // Autocomplete function for server data
  async function setupAutocompleteFromServer(inputId, datalistId, endpoint) {
    const input = document.getElementById(inputId);
    const datalist = document.getElementById(datalistId);

    input.addEventListener("input", async function () {
      const inputValue = input.value.toLowerCase();

      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        data.forEach((item, index) => {
          const option = datalist.options[index];
          const fullName = `${item.firstName} ${item.lastName}`;
          const optionValue = fullName.toLowerCase();

          if (optionValue.includes(inputValue)) {
            option.setAttribute("data-shown", "true");
          } else {
            option.setAttribute("data-shown", "false");
          }
        });
      } catch (error) {
        console.error("Error fetching data from the server:", error);
      }
    });
  }

  // Populate datalists with data from the server
  populateDatalistFromServer(
    "membersList",
    "https://student-fed1.metis.academy/api/Members"
  );
  setupAutocompleteFromServer(
    "memberInput",
    "membersList",
    "https://student-fed1.metis.academy/api/Members"
  );

  // You can repeat the process for the "titlesList" if needed
});
