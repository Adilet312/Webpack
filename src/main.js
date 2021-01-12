import './styles.css';

/*
debounce
Throttle
memoization
fetch getData
form validation
todo
flipcard css/js(preserve3d,front:backface-visibility: hidden, back:backface-visibility: hidden, back: transform: rotateY(180deg), card: hover: transform: rotateY(180deg))
---------------
tabs
accordion css/js
quiz
*/
/*Create object data*/



const form = document.querySelector('#formId');
const input = document.querySelector('.input');
const ul = document.querySelector('.output');
form.addEventListener('submit', getData)


function getData(e){
  e.preventDefault();
  let inputValue = input.value;
  let li = document.createElement('li');
  let span = document.createElement('span');
  li.innerHTML = inputValue;
  span.innerText = 'x';
  li.appendChild(span)
  ul.appendChild(li);
  input.value = '';
  toggle(li)
  deleteTask(span)
}
function toggle(task){
  task.addEventListener('click', ()=> {
    task.classList.toggle('active');
  })
}
function deleteTask(span){
  span.addEventListener('click',()=>{
    span.parentNode.remove();
  })
}
