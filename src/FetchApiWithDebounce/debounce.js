let input = document.querySelector('.search');
/*addEventListener for search input box*/
input.addEventListener('input',debounce((e)=> getData(e.target.value).then( data => showData(data.Search)),300),false);
/*Get data*/
const getData = async (title) =>{
  let url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${32256b23}`;
  const response = await fetch(url);
  if(!response.ok){
    let message = `Error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
}

/*Make debounce*/

function debounce(callBack,delay){
  let timeController;
  return function(...args){
    timeController && clearTimeout(timeController);
    timeController = setTimeout( ()=> callBack(...args),delay);
  }
}

/*Throttle*/
/*
let timeController = true;
const throttle = (callBack, delay) =>{
  return function(...args){
    if(!timeController) return;
    timeController = false;
    callBack(...args);
    setTimeout( () => timeController = true ,delay)
  }
}
*/
function showData(result){
console.log(result);
  let output  = result.map( movie =>`
   <li>
     <a href="#">
       <img src="${movie.Poster}">
       <span class="addTo">+</span>
       <h4 id="${movie.imdbID}">${movie.Title}</h4>
       <p>Holiday movies offer us a glimpse into how the world is could be, often in sharp contrast to our lives as they are. In that way, the annual act of viewing them is like a religious ritual.</p>
     </a>
   </li>
 `).join('');
 let ul = document.querySelector('.output');
 ul.innerHTML = output;
}
