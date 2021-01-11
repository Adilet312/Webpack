import './styles.css';

/*
debounce
Throttle
memoization
fetch getData
form validation
---------------
tabs
accordion css/js
flipcard css/js
todo
*/


const square = () =>{
  const cacheMemory = {}
  return function(num){
    if(cacheMemory[num]){
      return cacheMemory[num];
    }else{
      cacheMemory[num] = Math.pow(num,2);
      return cacheMemory[num]
    }
  }
}
console.log(square());
const power = square()(6)
console.log(power);
