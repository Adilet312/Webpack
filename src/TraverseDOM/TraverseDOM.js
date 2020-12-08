window.addEventListener('DOMContentLoaded',()=>{
  const body = document.querySelector('body');
  traverse(body)
})


function traverse(node){

  if(node===null){
      console.log(node);
    return;
  }
  console.log(node.tagName);
  traverse(node.firstElementChild);
  traverse(node.nextElementSibling);
}
