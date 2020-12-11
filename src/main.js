import './styles.css';





const profile = {
  firstName: "",
  lastName: "",
  setFullName: function(name){
    let splitAndAssign = function(name){
      let full_name = name.split(' ');
      this.firstName = full_name[0];
      this.lastName = full_name[1];

    }
    splitAndAssign.call(this,name);
  }
}




profile.setFullName("Adilet Momunalev")
console.log(profile.firstName);



















/*Sum of numbers*/
// function sumOfNumbers(arr){
//   let start = Math.min(arr[0],arr[1]);
//   let end = Math.max(arr[0],arr[1]);
//   let sum = start + end;
//   for( let idx = start + 1; idx <= end-1; idx++){
//     sum+= idx;
//   }
//   return sum;
// }
//
// console.log(sumOfNumbers([1,4]))

/*Factorial*/
// function factorial(n){
//   if(n<=1){
//     return 1;
//   }
//   return n * factorial(n-1);
// }
//
// console.log(factorial(10));


/*Fibnocchi*/
// const fib = (n) =>{
//   if(n<2){
//     return n;
//   }
//   return fib(n-1) + fib(n-2)
// }
//
// console.log(fib(10));

/*Generate prime numbers Prime*/

// const primeNumbers = (n) =>{
//   const primes = [];
//   if(n<=1){
//     return primes;
//   }
//
//   let i = 2;
//   while(i < n){
//     let j = 2;
//     let isPrime = true;
//     while(i>j){ //3 > 2 => 3> 3       \ 4 > 2/ 4 > 3
//       if(i % j==0){  //3%2 = 1===0 => \ 4% 2===0, isPrime = false| 4%3=1 1===3|
//         isPrime = false;
//       }
//       j++;
//     }
//     if(isPrime){
//       primes.push(i)
//     }
//     i++;
//   }
// }

/*Palindrom*/

// const palindrom = (str) => {
//   let end = str.length - 1;
//   for(let start = 0; start <= end; start++){
//     if(str[start]!==str[end - start]){
//       return false;
//     }
//   }
//   return true;
// }

/*Anagram*/

// const isAnagaram = (str1,str2) => {
//   let word1 = str1.toLowerCase().split('').sort().join('');
//   let word2 = str2.toLowerCase().split('').sort().join('');
//   return word1===word2 ? true : false;
// }
// console.log(isAnagaram('racecar', 'carrace'));

/*Reverse words*/

// const reverseWord = (str) =>{
//   return str.split(' ').reverse().join(' ');
// }
// console.log(reverseWord("This is  a  test string"))

/*Remove vowels from string*/

// const removeVowels = (str) => {
//
//   return str.split('').filter( letter => isVowel(letter) && letter).join('');
// }
// function isVowel(str){
//   let letter = str.toLowerCase();
//   if(letter==='a' || letter==='e' || letter==='u' || letter==='i' || letter==='o'){
//     return false;
//   }
//   return true;
// }
//
// console.log(removeVowels('Hello World'))
// let resultStart = -Infinity;
// let resultLength = -Infinity;
// const longestPalindrome = (str) => {
//   if(str.length<2){
//     return str;
//   }
//   for(let mid = 0; mid < str.length; mid++){
//     checkPalindrome(str, mid, mid); // if string is odd
//     checkPalindrome(str, mid, mid+1);//if string is even
//   }
//   return str.substring(resultStart, resultStart + resultLength);
// }
// function checkPalindrome(s, start, end){
//   while(start >=0 && end < s.length && s[start]===s[end]){
//     start--;
//     end++;
//   }
//   if(resultLength < end - start -1){
//     resultStart = start + 1;
//     resultLength = end - start - 1;
//   }
// }
// console.log(longestPalindrome('agbdba'));
// const noRepeatingWords = (str1,str2) =>{
//   let whole_str = str1+' '+str2;
//   const obj = {};
//   for(let word of whole_str.split(' ')){
//     console.log(word);
//     (word in obj) ? obj[word]++ : obj[word] = 1;
//   }
//   for( let key in obj){
//     obj[key]!==1 && delete obj[key];
//   }
//   return Object.keys(obj);
// }
// console.log(noRepeatingWords("Hello world", "Hello Adilet"));
// const howManyDuplicates = (arr) =>{
//   let originalSize = arr.length;
//   const set = new Set(arr);
//   let currentSize = [...set].length;
//   return originalSize - currentSize;
// }
// const howManyDuplicates = (arr) =>{
//   const obj = {};
//   for(let element of arr){
//     (element in obj) ? obj[element]++ : obj[element] = 1;
//   }
//   for(let key in obj){
//     obj[key]===1 && delete obj[key];
//   }
//   return Object.keys(obj).length;
// }
// console.log(howManyDuplicates([1,2,3,5,7,2,1,6,78]));

// const deepCopy = (obj) =>{
//   let copy;
//   if(typeof obj!=='object' || obj===null){
//     return obj;
//   }
//   copy = Array.isArray(obj) ? [] : {};
//   for( let key in obj){
//     let value = obj[key];
//     copy[key] = deepCopy(value);
//   }
//   return copy;
// }
// const reverseNumbers = (numbers) => {
//   let result = numbers.toString().split('').reverse().join('');
//   return result;
// }
//   const reverseNumbers = (input) =>{
//     let reverse = 0;
//     while(input!==0){
//       reverse = parseInt(reverse * 10) + parseInt(input % 10);
//       input= Math.floor(parseInt(input) / parseInt(10));
//       if(reverse < Number.MIN_VALUE || reverse > Number.MAX_VALUE){
//         return 0;
//       }
//     }
//     return reverse;
//   }
// console.log(reverseNumbers(54321));

// const flatteningArray = (arr) =>{
//   let newArray = arr.reduce( (acc, element) => {
//     if(Array.isArray(element)){
//       acc = acc.concat(flatteningArray(element));
//     }
//     else{
//       acc.push(element)
//     }
//     return acc;
//   },[])
//   return newArray;
//
// }
// console.log(flatteningArray([1,2,[1,5,[4]]]));
// const longestSub = (str) =>{
//   const set = new Set();
//   let right = 0;
//   let left = 0;
//   let max = 0;
//   while(right < str.length){
//     if(set.has(str[right])){
//       set.delete(str[left]);
//       left++;
//     }else{
//       set.add(str[right]);
//       max = Math.max(max, set.size)
//       right++
//     }
//
//   }
//   return max;
// }
// ;console.log(longestSub('abbcdb'))
