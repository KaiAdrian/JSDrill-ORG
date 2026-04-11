const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanMap = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

convertBtn.addEventListener("click", () => {
  const num = Number(input.value);

  if (input.value.trim() === "") {
    output.innerText = "Please enter a valid number";
  } else {
    if (num < 1) {
      output.innerText = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
      output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        let result = "";
let remaining = num;

for (const item of romanMap) {

  while (remaining >= item.value) {

    result += item.symbol;

    remaining -= item.value;

  }

}

output.innerText = result;
    }
  }
});
