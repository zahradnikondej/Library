var searchButton = document.querySelector(".button-search");
var table = document.querySelector(".allTables");
var inputs = document.getElementsByTagName("input");
var resetButton = document.querySelector(".button-reset");
function searchBooks() {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var _loop_1 = function (i) {
        if (inputs[i].value !== "") {
            Array.from(table.rows).forEach(function (row) {
                var column = row.cells[i];
                if (column.innerText.toLowerCase().includes(inputs[i].value.toLowerCase())) {
                    row.style.display = "";
                    table.rows[0].style.display = "";
                }
                else {
                    table.rows[0].style.display = "";
                    row.style.display = "none";
                }
            });
        }
    };
    for (var i = 0; i < inputs.length; i++) {
        _loop_1(i);
    }
}
function reset() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", reset);
searchButton.addEventListener("click", searchBooks);
