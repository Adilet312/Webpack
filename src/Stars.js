/*
CSSS:
ul{
  list-style:none;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width:125px;
  font-size: 25px;
  margin:0 auto;
}
ul li:hover , ul li:hover ~li{
  color:gold;
}
HTML:
<ul class='output'>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
  <li>*</li>
</ul>
JavaScript:

const stars = document.querySelectorAll('li');

stars.forEach( (star,index) => star.addEventListener('click', ()=> selectStars(index)));


function selectStars(index){
  clear()
  for( let idx = index; idx < stars.length; idx++){
    stars[idx].style.color = "gold";
  }
}

function clear(){
  for(let idx = 0; idx < stars.length; idx++){
    stars[idx].style.color = "black";
  }
}
*/
