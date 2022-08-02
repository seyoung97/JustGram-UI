const emailForm = document.getElementById("email-input-box");
const passwordForm = document.getElementById("password-input-box");
const loginButton = document.getElementById("button-login");

emailForm.addEventListener("keyup", listener);
passwordForm.addEventListener("keyup", listener);

function listener() {
  switch (!(emailForm.value && passwordForm.value)) {
    case true:
      loginButton.disabled = true;
      break;
    case false:
      loginButton.disabled = false;
      break;
  }
}

// function listener() {
//   if (!(emailForm.value && passwordForm.value)) {
//     loginButton.disabled = true;
//   } else {
//     loginButton.disabled = false;
//   }
// }
