const links = document.querySelectorAll('[data-tabs]');

links.forEach( tab => tab.addEventListener('click', (e)=> displayBox(e.target)))

function displayBox(currentTab){
  let targetId = currentTab.className;
  let box = document.querySelector(`#${targetId}`);
  clearAllActiveClasses()
  box.classList.add('active');
}
function clearAllActiveClasses(){
  let boxes = document.querySelectorAll('[data-contents]')
  boxes.forEach( box => box.classList.remove('active'));
}


/*
HTML

<section class = 'tabbed-area'>
  <ul class = 'tabs group'>
    <li><a href = '#english' data-tabs='tabs' class='english'> English</a></li>
    <li><a href = '#spain' data-tabs='tabs' class='spain'> Spain</a></li>
    <li><a href = '#russian' data-tabs='tabs' class='russian'> Russian</a></li>
  </ul>
  <div class = 'tab-container'>
    <div id = 'english' class='active' data-contents='contents'>
      Hello world
    </div>
    <div id = 'spain' data-contents='contents' >
      Hola mundo
    </div>
    <div id = 'russian' data-contents='contents'>
      Привет мир
    </div>
  </div>

</section>
*/
/*
CSS
section{
  width:500px;
  margin: 0 auto;
  height:400px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
}
ul{
  margin: 0 auto;
  padding: 0px;
 list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:30px;
  background: #fff;
  border:1px solid black;
}
ul li{
  color:#fff;
}
ul li a{
  text-decoration: none;
  color:black;
}
.tabs li a:hover{
  background: #ccc;
}
.tab-container{
  width:100%;
  height: 300px;
  background: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);

}
.tab-container div{
  text-align:center;
}
[data-contents]{
  display: none;
}
.active[data-contents]{
  display: block;
}
*/
