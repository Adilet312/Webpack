
const articles = [{
  title:"NewYorkTimes",
  post: "Eve shows you some different directions you can pursue to improve your knowledge of the React ecosystem.",
  site:'cnn'
},
{
  title:"Washington",
  post: "Eve shows you some different directions you can pursue to improve your knowledge of the React ecosystem.",
  site:'cnn'
},{
  title:"CNN",
  post: "Eve shows you some different directions you can pursue to improve your knowledge of the React ecosystem.",
  site:'cnn'
}]
const sites = [{
  site: 'new-york.com',
  rank: 134
},
{
  site: 'washington.com',
  rank: 131
},
{
  site: 'cnn.com',
  rank: 124
}]

const mergeObjects = (articles, sites) =>{
  const newArray = articles.reduce(  (acc, element,index) =>{
    element.site = sites[index];
    acc.push(element)
    return acc;
  },[])
  return newArray;
}

function getDomainAddress(str){
  return str.substring(0, str.length - 4);
}

const displayArticle = (articles) => {
  const temp = articles.map( article => `
    <li>
      <h1>${article.title}</h1>
      <p>${article.post}</p>
      <div class = "sites">
        <h3>${getDomainAddress(article.site.site)}</h3>
        <h3>${article.site.rank}</h3>
      </div>
      <a href = "www.${article.site.site}">${getDomainAddress(article.site.site)}</a>
    </li>
    `).join('')
    let ul = document.querySelector('ul');
    ul.innerHTML = temp;
}

window.addEventListener('DOMContentLoaded',()=> displayArticle(mergeObjects(articles,sites)));
