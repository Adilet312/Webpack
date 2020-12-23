const fetchData = async (query) => {
  let input = query.target.previousElementSibling.value;
  const response = await fetch(`http://www.omdbapi.com/?s=${input}&page=1&apikey=32256b23`)
  if(!response.ok){
    let message = `Error  has occured at status: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();

}

const dislayData = (data) =>{
   const output = document.querySelector('.output');
   console.log(data.Search);
   const posts = data.Search.map( post =>`
     <li><img src ="${post.Poster}"/></li>
     `).join('')
     output.innerHTML = posts;
}

const debounce = (callBack, delay) =>{
  let timeController;
  return function(...args){
    timeController && clearTimeout(timeController);
    timeController = setTimeout( ()=> {
      callBack(...args)
    },delay)
  }
}
document.querySelector('.submit').addEventListener('click',debounce((e)=>fetchData(e).then( (data)=> dislayData(data)).catch((error) => console.log(error)),2000),false)
