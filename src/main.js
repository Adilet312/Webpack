import './styles.css';



const form = document.querySelector('#formId')
form.addEventListener('submit', validateForm)
let mail  = document.querySelector('.email');
let password = document.querySelector('.password');
let passwordConfirmation = document.querySelector('.passwordConfirmation');
function  validateForm(e){
  e.preventDefault();
  /[A-Z]/.test(mail.value) ? isSuccess(mail.nextElementSibling) : isError(mail.nextElementSibling);
  /[a-z]/.test(password.value) ? isSuccess(password.nextElementSibling) : isError(password.nextElementSibling);
  /[a-z]/.test(passwordConfirmation.value) ? isSuccess(passwordConfirmation.nextElementSibling) : isError(passwordConfirmation.nextElementSibling);

}
function isSuccess(message){
  message.classList.add('success');
  message.innerText = 'Success value'
}
function isError(message){
  message.classList.add('error');
  message.innerText = 'Error value'
}
// const fib = (num) =>{
//   if(num <= 1){
//     return num;
//   }
//   return fib( num -1 ) + fib(num -2)
// }
// console.log(fib(10));
// const factorial = (num) => {
//   if(num <=0){
//     return 1;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(4));
// const flatternArr = (arr) => arr.reduce( (acc, item) =>  Array.isArray(item) ? acc.concat( flatternArr(item)): acc.concat(item),[])
//
// console.log(flatternArr([1,5,2,[5,23,[12,11,78,[23,23]]]]));
// const duplicate = (arr) =>{
//   const obj = {}
//   for(const item of arr){
//     obj[item] ? obj[item]++ : obj[item] = 1;
//   }
//   for( const key in obj){
//     obj[key]!==2 &&  delete obj[key];
//   }
//   return Object.keys(obj).map( item => Number(item))
// }
// console.log(duplicate([1,2,3,1,32,23,32,3]));

// const norepeatedWord = (str1, str2) => {
//   const arr = str1.split(' ').filter( word => !str2.split(' ').includes(word) && word).concat( str2.split(' ').filter( word => !str1.split(' ').includes(word) && word));
//   return arr;
// }
//
// console.log(norepeatedWord('Adilet hello','Misha hello dude'));
// const countSubstringPalindrome = str =>{
//   let count =0;
//   for( let idx = 0; idx < str.length; idx++){
//     count+= isPalindrome(str, idx , idx)
//     count+= isPalindrome(str, idx , idx + 1)
//   }
//   return count;
// }
// function isPalindrome(str, left, right){
//   let count = 0;
//   while(left >=0 && right < str.length && str[left] === str[right]){
//     count++;
//     left--;
//     right++;
//   }
//   return count;
// }
// console.log(countSubstringPalindrome('abcd')) //- Returns 4 (a, b, c, d)
// const longestPalindrome = (str) =>{
//   let length = 0;
//   const set = new Set()
//   for( const letter of str){
//     if(set.has(letter)){
//       set.delete(letter)
//       length++;
//     }else{
//       set.add(letter)
//     }
//   }
//   return set.size ? (length * 2 )+1 : (length * 2)
// }
//
// console.log(longestPalindrome('abccccdd') )//- Returns 7 ('dccaccd')
// const longestSubstringLength = (str) =>{
//   const set = new Set();
//   let max =  0;
//   let left = 0;
//   let right = 0;
//   while(right < str.length){
//     if(set.has(str[right])){
//       set.delete(str[left])
//       left++;
//     }else{
//       set.add(str[right]);
//       right++;
//       max = Math.max(max, set.size);
//     }
//   }
//   return max;
// }
// console.log(longestSubstringLength('abcabcbd')) //- Returns 3 ('abc')
// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
//
// //["ate","eat","tea"], ["nat","tan"], ["bat"]
//
//
// const groupAnagram = (arr) =>{
//   const obj = {}
//   for( let item of arr ){
//     let key = item.split('').sort().join('');
//     obj[key] ? obj[key].push( item ) :  [item];
//   }
//   return Object.values( obj );
// }
// console.log(groupAnagram(arr));




























/*
debounce
Throttle
memoization
fetch getData
form validation
todo
flipcard css/js(preserve3d,front:backface-visibility: hidden, back:backface-visibility: hidden, back: transform: rotateY(180deg), card: hover: transform: rotateY(180deg))
---------------
tabs
accordion css/js
quiz
*/
