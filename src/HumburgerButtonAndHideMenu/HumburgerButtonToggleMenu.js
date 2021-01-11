/*
HTML:
<button type="button" name="button" class = 'btn'> &#9776;</button>
<nav class = 'nav'>
  <ul>
    <li><a href='#'>Java</a></li>
    <li><a href='#'>JavaScript</a></li>
    <li><a href='#'>Python</a></li>
  </ul>
</nav>
css:
body{
  margin:0px;
  padding: 0px;
}
.btn{
  background: rebeccapurple;
  color:#fff;
  position: fixed;
  left:10px;
  top:10px;
  font-size: 30px;
  margin:0px;
  padding: 0px;
  transition: all .5s ease;
}
.btn.active{
  left:200px;
}
nav{
  margin:0px;
  position: absolute;
  left:0px;
  top:0px;
  display: block;
  width:200px;
  height:100vh;
  box-sizing: border-box;
  background: rebeccapurple;
  transform: translateX(-100%);
  transition: all .5s ease;
}
nav.active{
  transform: translateX(0%);
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
}
ul li{
  margin-bottom: 15px;
}
ul li a{
  text-decoration: none;
  color: #fff;
}
JS:
const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', (e)=>{
  nav.classList.toggle('active')
  e.target.classList.toggle('active');

})
*/
