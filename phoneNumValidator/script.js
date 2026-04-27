const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

//pravilne oblike:
// 1 555-555-5555
// 1 (555) 555-5555
// 1(555)555-5555
// 1 555 555 5555
// 5555555555
// 555-555-5555
// (555)555-5555

checkBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please provide a phone number");
  }
});
clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
});
