import { uuid4 } from 'uuidv4';


const form = document.querySelector('#formId');
const input = document.querySelector('.input');
const ul = document.querySelector('.output');
const show_all = document.querySelector('.btn-all');
const show_completed = document.querySelector('.btn-completed');
const show_incompleted = document.querySelector('.btn-incompleted');
form.addEventListener('submit', getData)


function getData(e){
  e.preventDefault();
  let inputValue = input.value;
  let li = document.createElement('li');
  let span = document.createElement('span');
  li.innerHTML = inputValue;
  li.setAttribute('id',`${uuid4()}`)
  span.innerText = 'x';
  li.appendChild(span)
  ul.appendChild(li);
  input.value = '';
  updateData()
  toggle(li)
  deleteTask(span)
}
function toggle(task){
  task.addEventListener('click', ()=> {
    task.classList.toggle('active');
    updateData()
  })


}
function deleteTask(span){
  span.addEventListener('click',()=>{
    span.parentNode.remove();
  })
}
function updateData(){
  const tasks = document.querySelectorAll('li');
    const todos = [];
  tasks.forEach( task => {
    todos.push({ task: task.innerText, completed: task.classList.contains('active'),id:task.id})
  })

  localStorage.setItem('todos', JSON.stringify(todos));
}

function showData(type){
  switch(type){
    case 'COMPLETED':{
      let data = JSON.parse(localStorage.getItem('todos')).filter( item => item.completed && item);
      let tasks = data.map( item =>`
         <li class="active" id=${item.id}>${item.task}<span>x</span></li>
        `).join('');
      ul.innerHTML = tasks;
      break
    }
    case 'INCOMPLETED':{
      let data = JSON.parse(localStorage.getItem('todos')).filter( item => !item.completed && item);
      let tasks = data.map( item =>`
         <li class="active" id=${item.id}>${item.task}<span>x</span></li>
        `).join('');
      ul.innerHTML = tasks;
      break
    }
    case 'ALL': {
      let data = JSON.parse(localStorage.getItem('todos'))
      let tasks = data.map( item =>`
         <li class="active" id=${item.id}>${item.task}<span>x</span></li>
        `).join('');
      ul.innerHTML = tasks;
    }
  }
}
show_all.addEventListener('click', ()=> showData('ALL'));
show_completed.addEventListener('click', ()=> showData('COMPLETED'));
show_incompleted.addEventListener('click', ()=> showData('INCOMPLETED'));
/*
section{
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: 0 auto;
}
ul{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0 auto;
  width:100%;
  height: 100%;

}
ul li{
  width:100%;
  text-decoration: underline;
  text-decoration-color: green;
  position: relative;
  text-align:left;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
ul li span{
  position: absolute;
  right:10px;
  top:2px;

}
ul li.active{
  text-decoration: underline;
  text-decoration-color: red;
}
.filter{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2px;
}
 HTML:

 <section>
  <form id='formId'>
     <input type = 'search' placeholder=" Enter to do task" class = 'input'/>
  </form>
  <ul class='output'> </ul>
  <div class= 'filter'>
    <input type = 'submit' value = 'All' class = 'btn-all'/>
    <input type = 'submit' value = 'Completed' class = 'btn-completed'/>
    <input type = 'submit' value = 'Incompleted' class = 'btn-incompleted'/>
  </div>
</section>
*/
