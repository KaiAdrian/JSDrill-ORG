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
    console.log("Please input a value");
  }
   else {
    const cleaned = input.value.toLowerCase();
    // result.innerText=`${cleaned} is a palindrome `
    result.innerText=`${input.value} is a palindrome `
  }
});
