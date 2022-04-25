const paragraphPasswordInputs = document.querySelector('p.margin-bot-50');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

/**
 * Tests whether the password is the same in both the password and confirm password elements
 * @param {Element} passwordElement the input that stores the password value
 * @param {Element} confirmPasswordElement the input element that stores the confirm password value
 */
function isSamePassword(passwordElement, confirmPasswordElement) {
  const pass = passwordElement.value;
  const confirm = confirmPasswordElement.value;
  return pass === confirm;
}

const isAboveMinimalLength = function () {
  return password.value.length > password.getAttribute('minlength');
};

const passwordChangeEventHandler = function (event) {
  const errorClass = 'error';
  if (!(isSamePassword(password, confirmPassword) && isAboveMinimalLength())) {
    password.classList.add(errorClass);
    confirmPassword.classList.add(errorClass);
  } else {
    password.classList.remove(errorClass);
    confirmPassword.classList.remove(errorClass);
  }
};

paragraphPasswordInputs.addEventListener('change', (event) => {
  if (event.target == password || event.target == confirmPassword) {
    passwordChangeEventHandler(event);
  }
});
