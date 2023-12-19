for (let year = 1990; year <= 2030; year++) {
  let jeRokPriestupny =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  let jeRokOkruhly = year % 10 === 0;

  let output = "";

  if (jeRokPriestupny) {
    output += "P";
  }

  if (jeRokOkruhly) {
    output += "O";
  }

  if (year == 1999) {
    output += "N";
  }

  console.log(year + ": " + output);
}
