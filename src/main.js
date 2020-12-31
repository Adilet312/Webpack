import './styles.css';



let btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=> fetchData(e.target.previousElementSibling.value).then( data => showData(data.Search)));

const  fetchData = async (title) => {
  let url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=32256b23`;
  const response = await fetch(url);
  if(!response.ok){
    const message = `Error status is shown  ${response.status}`
    throw new Error(message);
  }
  return await response.json();
}

function showData(result){
  // let input = document.querySelector('.search').value;
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
