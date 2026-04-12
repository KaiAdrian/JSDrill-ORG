const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Create an isSpam function using the const keyword and arrow syntax.
//  The function should take a single parameter msg and implicitly return false for now.
const isSpam = (msg) => false;

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value.trim() === "") {
    alert("Please enter a message.");
    return;
  }
});
