const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

// checkBtn.addEventListener("click", () => {
//   if ((input.value.trim() === "")) {
//     alert("Please input a value");
//   }
// });
checkBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please input a value");
  }

  const cleaned = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    result.innerText = `${input.value} is a palindrome`;
  } else {
    result.innerText = `${input.value} is not a palindrome`;
  }
});
