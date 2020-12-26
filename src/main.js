import './styles.css';

const validPalindrome = (str) => {
  let s;
  if(!str){
    return false;
  }
  if(Array.isArray(str)){
    s = str[0].toLowerCase().split(',').join('');
  }else{
    s = str.toLowerCase().split(' ').join('');
  }

 for(let idx = 0; idx < s.length/2; idx++){
   if(s[idx]!==s[s.length - 1 - idx]){
     return false;
   }
 }
 return true;
}
console.log(validPalindrome(["a,b,c,ba"]));
