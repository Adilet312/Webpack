import './styles.css';

const user = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  passwordConfirmation: ''
}
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let email= document.querySelector('.email')
let password = document.querySelector('.password');
let passwordConfirmation = document.querySelector('.passwordConfirmation');
const submit =  document.querySelector('.submit')

submit.addEventListener('click', ()=>{
  submitForm()
  console.log(user);
})

function submitForm(){
  user.firstName = isValid(firstName.value)  && firstName.value;
  user.lastName = isValid(lastName.value) && lastName.value;
  user.email = isValid(email.value) && email.value;
  user.password = isValid(password.value) && password.value;
  user.passwordConfirmation = isValid(passwordConfirmation.value) && passwordConfirmation.value;
}
function isValid(input){
  console.log(input);
  if(input){
    return true;
  }
  return false;
}
