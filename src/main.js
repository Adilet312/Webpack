import './styles.css';

const Dictonary = [
  { english: 'what',russian: 'что' },
  { english: 'where',russian: 'где' },
  { english: 'when',russian: 'когда' },
  { english: 'how',russian: 'как' }
]

const ul = document.querySelector('ul');


window.addEventListener('DOMContentLoaded', () =>{
  createCard();
  let right = document.querySelector('.forward');
  let left = document.querySelector('.back');
  right.addEventListener( 'click', ()=>{
    let index = Math.floor( Math.random()*3);
    let word = Dictonary[index].english;
    right.nextElementSibling.innerText = word;
  })
  left.addEventListener( 'click', ()=>{
    let index = Math.floor( Math.random()*3);
    let word = Dictonary[index].english;
    left.previousElementSibling.innerText = word;
  })
})
function createCard(){

  let li = document.createElement('li');
  let section =  document.createElement('section');
  let  forward=  document.createElement('span');
  forward.setAttribute('class','forward');
  forward.innerText = '<';
  let  back=  document.createElement('span');
  back.setAttribute('class','back');
  back.innerText = '>';
  section.innerText = `${Dictonary[0].english}`
  li.appendChild(forward);
  li.appendChild(section);
  li.appendChild(back);
  ul.appendChild(li);

}

// function displayCard(){
//   let right =
// }
