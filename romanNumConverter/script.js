const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    output.innerText = "Please enter a valid number";
  }
});
