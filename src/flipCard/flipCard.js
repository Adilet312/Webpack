import './flipCard.css';
const Dictonary = {
  what: 'что',
  where: 'где',
  when: 'когда',
  how: 'как'
}


let cards = document.querySelector('.output');
window.addEventListener('DOMContentLoaded',  ()=>{
  displayCards();
  switchCards();

})



function displayCards(){
  for(let key in Dictonary){
    let li = document.createElement('li');
    li.innerText = `${Dictonary[key]}`;
    li.setAttribute('data-english',`${Dictonary[key]}`);
    li.setAttribute('data-russian',`${key}`);
    li.style.color = 'red';
    cards.appendChild(li);
  }

}
function switchCards(){
  let list = document.querySelectorAll('li');
  list.forEach( card => card.addEventListener('click',()=> card.innerText===card.getAttribute('data-russian')? card.innerText = `${card.getAttribute('data-english')}`: card.innerText = `${card.getAttribute('data-russian')}`));
}
