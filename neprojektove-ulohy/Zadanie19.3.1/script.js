function analyzeText() {
  let userInput = document.getElementById("userInput").value;

  let length = userInput.length;
  document.getElementById("length").innerText = "Text length: " + length;

  let lengthNoSpace = userInput.replace(/\s/g, "").length;
  document.getElementById("withoutSpace").innerText =
    "Text without space: " + lengthNoSpace;

  let numbers = (userInput.match(/\d/g) || []).length;
  document.getElementById("numbers").innerText =
    "Number of numbers in the text is: " + numbers;

  let longestText = "";
  let text = userInput.split(/\s+/);
  let longestTextLength = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > longestTextLength) {
      longestText = text[i];
      longestTextLength = text[i].length;
    }
  }
  document.getElementById("longestText").innerText =
    "Longest text is: " +
    longestText +
    " And its length is: " +
    longestTextLength;
}

function searchText() {
  let userInput = document.getElementById("userInput").value;
  let searchText = document.getElementById("search").value;
  if (searchText == 0) {
    document.getElementById("result").innerText = "Text not found";
  } else if (userInput.includes(searchText)) {
    document.getElementById("result").innerText = "Text found";
  } else {
    document.getElementById("result").innerText = "Text not found";
  }
}

// chatGPT
function transformText() {
  let userInput = document.getElementById("userInput").value;

  let transformedText = userInput
    .replace(/O/g, "0")
    .replace(/o/g, "0")
    .replace(/I/g, "1")
    .replace(/i/g, "1")
    .replace(/E/g, "3")
    .replace(/e/g, "3")
    .replace(/A/g, "4")
    .replace(/a/g, "4")
    .replace(/S/g, "5")
    .replace(/s/g, "5")
    .replace(/B/g, "8")
    .replace(/b/g, "8");

  document.getElementById("transformText").innerText =
    "Transformed text: " + transformedText;
}
