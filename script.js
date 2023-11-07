let button = document.getElementById("btnCalculate");
button.addEventListener("click", function () {
  createResult();
  // calculateTemp();
});

function createResult() {
  const selectType = document.getElementById("checkInput");
  const Index = selectType.selectedIndex;
  let selectedValue = selectType.options[Index].value;

  // inputBox
  const inputBox = document.getElementById("inputField");
  let inputValue = parseInt(inputBox.value);
  let resultBox = document.getElementById("resultBox");

  // values in ResultBox
  var result;
  let originText;

  // Calcuates the value
  if (selectedValue === "F") {
    inputBox.placeholder = "Enter the Farnheit Value";
    originText = "°C";
    inputValue = (inputValue * 9) / 5 + 32;
    result = inputValue + " F°";
  } else if (selectedValue === "C") {
    inputBox.placeholder = "Enter the Centigrade Value";
    originText = "°F";
    inputValue = ((inputValue - 32) * 5) / 9;
    result = inputValue.toFixed(1) + " °C";
  }

  let detectType = selectType;
  detectType.addEventListener("click", () => {
    if (selectedValue === "F") {
      inputBox.placeholder = "Enter the Farnheit Value";
    } else if (selectedValue === "C") {
      inputBox.placeholder = "Enter the Centigrade Value";
    }
  });

  detectType;

  // wrapper
  const container = document.createElement("div");
  container.classList.add(
    "h-fit",
    "row",
    "justify-content-center",
    "align-items-center"
  );
  resultBox.append(container);

  // Calculated Result [F/C]
  const contentBox = document.createElement("p");
  contentBox.classList.add("mw-100", "ms-5", "d-flex", "text-white");
  contentBox.innerHTML = result;
  container.append(contentBox);

  // creates orginal value box
  const orgValueBox = document.createElement("div");
  orgValueBox.classList.add(
    "d-flex",
    "justify-content-start",
    "w-75",
    "text-white",
    "ms-2"
  );
  contentBox.append(orgValueBox);

  // orginal value is uncalculated value
  const orgValue = document.createElement("p");
  orgValue.innerHTML = "From " + String(inputBox.value) + ` ${originText}`;
  orgValue.classList.add("text-bg-info", "ps-1", "pe-1", "rounded-1");
  orgValueBox.append(orgValue);

  // adds current time in Hours:Minutes:Seconds Format
  const dateText = document.createElement("p");
  const date = new Date();
  dateText.classList.add("d-flex", "justify-content-end", "text-white-50");
  dateText.innerHTML =
    String(date.getHours()) +
    ":" +
    String(date.getMinutes()) +
    ":" +
    String(date.getSeconds());
  contentBox.append(dateText);
}
