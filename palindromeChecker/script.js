const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");

checkBtn.addEventListener("click", () => {
  if ((input.value.trim() === "")) {
    alert("Please input a value");
  }
});
