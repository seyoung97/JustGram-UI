const emailForm = document.querySelector(".loginemail");
const passwordForm = document.querySelector(".loginpassword");
const loginButton = document.querySelector(".loginbutton");

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
listener();
