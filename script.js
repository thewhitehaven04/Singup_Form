const formInputs = document.querySelector('p.margin-bot-50');

const state = {
  isSamePassword: false,
  hasCapitals: false,
  isAboveMinimalLength: false,
};

const paragraphPasswordInputs = document.querySelector('main p:last-of-type');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const validationRoot = document.querySelector('.validation-messages');

const samePassword = () => {
  state.isSamePassword = password.value == confirmPassword.value;
};

const containsCapitals = () => {
  state.hasCapitals = password.value.toLowerCase() != password.value;
};

const aboveMinimalLength = () => {
  state.isAboveMinimalLength =
    password.value.length > password.getAttribute('minlength');
};

const clean = function () {
  const rootChildren = Array.from(validationRoot.children);
  rootChildren.forEach((child) => validationRoot.removeChild(child));
};

const render = function () {
  /** The map between error codes and their respective messages */
  const stateMessageMapping = {
    isSamePassword: 'Password do not match',
    isAboveMinimalLength: 'The password must be longer than 8 characters',
    hasCapitals: 'The password must contain at least one capital letter',
  };

  const conditions = document.createElement('ul');
  for (const prop in state) {
    // if one of the states is false, print the corresponding error message
    if (!state[prop]) {
      const li = document.createElement('li');

      // style error messages
      li.classList.add('red');
      li.classList.add('list-cross-marker');

      // append the message text
      li.innerText = stateMessageMapping[prop];
      conditions.appendChild(li);
    }
  }
  validationRoot.append(conditions);
};

const updateState = function () {
  // update state
  samePassword();
  containsCapitals();
  aboveMinimalLength();

  // update state view
  clean();
  render();
};

paragraphPasswordInputs.addEventListener('change', (event) => {
  if (event.target == password || event.target == confirmPassword) {
    updateState();
  }
});