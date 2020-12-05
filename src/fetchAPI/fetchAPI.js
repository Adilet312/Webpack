window.addEventListener('DOMContentLoaded',()=> fetchData().then( data => displayPictures(data)).catch( error => console.log(error.message)));


function displayPictures(data){
  const ul = document.querySelector('.output');
  let pictures = data.map( picture => `
    <li>
      <img src = "${picture.image}"/>
    </li>
    `).join('');
    ul.innerHTML = pictures;
}



async function fetchData(){
  const response = await fetch('https://orangevalleycaa.org/api/videos');
  if(!response.ok){
    let message = `Error has occured: ${response.text}`;
    throw new Error(message);
  }
  return await response.json();
}
