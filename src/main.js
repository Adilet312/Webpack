import './styles.css';

// const user = {
//   firstName:'',
//   lastName:'',
//   email:'',
//   password:'',
//   passwordConfirmation: ''
// }
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let email= document.querySelector('.email')
let password = document.querySelector('.password');
let passwordConfirmation = document.querySelector('.passwordConfirmation');
const form =  document.querySelector('#formId');

form.addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  let firstNameValue =  firstName.value.trim();
  !/[A-Za-z]/.test(firstNameValue ) ? setError(firstName, 'Please enter proper value') : setSuccess(firstName, 'Success value');
  let lastNameValue = lastName.value.trim();
  !/[A-Za-z]/.test(lastNameValue) ? setError(lastName, 'Please enter proper value') : setSuccess(lastName, 'Success value');
  let emailValue = email.value.trim();
  !emailValue ? setError(email, 'Please enter proper value') : setSuccess(email, 'Success value');
  let passwordValue = password.value.trim();
  !/[0-9]/.test(passwordValue) ? setError(password, 'Please enter proper value') : setSuccess(password, 'Success value');
  let passwordConfirmationValue = passwordConfirmation.value.trim();
  !/[0-9]/.test(passwordConfirmationValue) ? setError(passwordConfirmation, 'Please enter proper value') : setSuccess(passwordConfirmation, 'Success value');
}


function setError(input, errorMessage){
  let message = input.nextElementSibling;
  message.classList.add('error');
  message.innerHTML = errorMessage;
}
function setSuccess(input, successMessage){
  let message = input.nextElementSibling;
  message.classList.add('success');
  message.innerHTML = successMessage;
}
