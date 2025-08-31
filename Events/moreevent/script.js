// ========== Mouse Events ==========
const mouseBtn = document.getElementById("mouseBtn");
const mouseResult = document.getElementById("mouseResult");

mouseBtn.onmousedown = () => mouseResult.textContent = "Mouse button pressed down!";
mouseBtn.onmouseup   = () => mouseResult.textContent = "Mouse button released!";
mouseBtn.onclick     = () => mouseResult.textContent = "Mouse clicked!";
mouseBtn.onmouseover = () => mouseResult.textContent = "Mouse entered button area!";
mouseBtn.onmouseout  = () => mouseResult.textContent = "Mouse left button area!";
mouseBtn.onmousemove = () => mouseResult.textContent = "Mouse is moving over the button!";

// ========== Keyboard Events ==========
const keyboardInput = document.getElementById("keyboardInput");
const keyboardResult = document.getElementById("keyboardResult");

keyboardInput.onkeydown = (e) => keyboardResult.textContent = `Key Down: ${e.key}`;
keyboardInput.onkeyup   = (e) => keyboardResult.textContent = `Key Up: ${e.key}`;
keyboardInput.onkeypress = (e) => keyboardResult.textContent = `Key Pressed: ${e.key}`;

// ========== Form Events ==========
const myForm = document.getElementById("myForm");
const formResult = document.getElementById("formResult");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

nameField.onfocus = () => formResult.textContent = "Name field is focused.";
nameField.onblur  = () => formResult.textContent = "Name field lost focus.";

emailField.oninvalid = () => formResult.textContent = "Invalid email format.";

myForm.onreset = () => formResult.textContent = "Form has been reset!";
myForm.onsubmit = (e) => {
  e.preventDefault(); // stop actual submit
  formResult.textContent = `Form submitted ✅ Name: ${nameField.value}, Email: ${emailField.value}`;
};
