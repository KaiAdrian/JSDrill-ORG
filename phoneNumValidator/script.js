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
const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

const validFormats = checkBtn.addEventListener("click", () => {
  const phoneNumber = input.value.trim(); ///shranimo vrednost inputa
  if (phoneNumber === "") {
    alert("Please provide a phone number");
    return;
  }
  if (phoneRegex.test(phoneNumber)) {
    result.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    result.textContent = `Invalid US number: ${phoneNumber}`;
  }
});
clearBtn.addEventListener("click", () => {
  input.value = "";
  result.innerHTML = "";
});
