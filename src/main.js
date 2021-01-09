import './styles.css';







const fetchData = async (title) => {
  let url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=32256b23`;
  const response = await fetch(url);
  if(!response.ok){
    const message = `Error has occured: ${response.status}`
    throw new Error(message)
  }
  return await response.json();
}

const displayData = (data) => {
  console.log(data);
  const ul = document.querySelector('.output');
  const display_data = data.map( movie =>`
    <li class = 'card-container'>
      <h1>${movie.Title}</h1>
      <img src = ${movie.Poster}/>
    </li>
    `).join('')
    ul.innerHTML = display_data;
}

// const debounce = (callBack, delay) => {
//   let timeController;
//   return function(...args){
//     timeController && clearTimeout(timeController);
//     timeController = setTimeout( ()=> callBack(...args),delay)
//
//   }
// }
let timeController = true;
const throttle = (callBack, delay) =>{
  return function(...args){
    if(!timeController) return;
    timeController = false;
    callBack(...args);
    setTimeout( () => timeController = true ,delay)
  }
}
const input = document.querySelector('.search');
input.addEventListener('input', throttle((e)=> fetchData(e.target.value).then(data => displayData(data.Search)).fetch(error => console.log(error)),3000));
