import './styles.css';



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
