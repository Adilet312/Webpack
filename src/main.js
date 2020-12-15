import './styles.css';




// const sumNumbers = (arr) =>{
//   const max = Math.max( arr[0],arr[1]);
//   const min = Math.min( arr[0], arr[1]);
//   let sum = 0;
//   for( let start = min; start <=max; start++){
//     sum+=start;
//   }
//   return sum;
// }


// const factorial = (num) =>{
//   if(num<=1) return 1;
//   return num * factorial( num - 1);
// }
//
// console.log(factorial(4));


// const fib = (num) =>{
//   if(num < 2) return num;
//   return fib( num -1) + fib( num - 2);
// }
//
// console.log(fib(10));




// const primeNumbers = (min, max) =>{
//   const primes = [];
//   let isPrime = true;
//   while( min < max){
//     let j = 2;
//     while( min > j){
//       if(min % j===0){
//         isPrime = false;
//       }
//       j++;
//     }
//     isPrime && primes.push(min);
//     isPrime = true;
//     min++;
//   }
//   return primes;
// }
// console.log(primeNumbers(4,20));


// const isPalindrome = (str) =>{
//   let newStr = str.toLowerCase().split(' ').join('');
//   console.log(newStr);
//   for( let idx = 0; idx < newStr.length; idx++){
//     if(newStr[idx]!==newStr[newStr.length - 1 -idx]){
//       return false
//     }
//   }
//   return true;
// }
// console.log(isPalindrome('race Car'));

// const anagram = (str1,str2) =>{
//   let newStr = str1.toLowerCase().split(' ').join('').split('').sort().join('');
//   let newStr2 = str2.toLowerCase().split(' ').join('').split('').sort().join('');
//   return newStr===newStr2 ? true : false;
//
// }
// console.log(anagram('Iron','rinos'));

// const reverseWords = (str) => {
//   return str.split(' ').reverse().join(' ');
// }
//
// console.log(reverseWords('Adilet is a great programmer '));

// const removeVowels = (str) =>{
//    let newStr = str.split('').filter( letter => !isVowel(letter.toLowerCase()) && letter);
//    return newStr.join('');
// }
// function isVowel(letter){
//   if(letter==='a' || letter==='e' || letter==='o' || letter==='i' ||letter==='u'){
//     return true;
//   }
//   return false;
// }
//
//
// console.log(removeVowels('adilet is programmer'));
//  const fullName = (arr) => {
//    const full_names = []
//    for(const element of arr){
//      full_names.push(Object.values(element).join(' '))
//    }
//    return full_names;
//  }
// const names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]
// console.log(fullName(names));



// const longestWordString = (str) => str.split(' ').reduce( (acc,item) => acc.length < item.length ? acc = item : acc);
//
//
// console.log(longestWordString('My name is Vishwas Momunaliev Ajar'));



// const array_index = (numbers, indexes) =>{
//   const array = [];
//   for( let idx = 0; idx < numbers.length; idx++){
//     array.splice(indexes[idx],0, numbers[idx])
//   }
//   return array;
// }
//
// console.log(array_index([0,1,2,3,4],[0,1,2,2,1]));

// const union = (arr1,arr2) =>{
//   return [...arr1, ...arr2];
// }
// const intersection = ( arr1, arr2 ) =>{
//   return arr1.filter( num => arr2.includes(num))
// }
// console.log(intersection([1,2,3,7],[3,6,2,9]));

// const differences = (arr1, arr2) => arr1.filter( num => !arr2.includes(num));
// const symmetricDiffernces = (arr1, arr2) => arr1.filter( item => !arr2.includes(item)).concat( arr2.filter( item => !arr1.includes(item)))
// console.log(symmetricDiffernces([1,2,3,7],[3,6,2,9]));

// const flatternArray = (arr) =>{
//   const flattern_array = arr.reduce( (acc, item) => {
//     Array.isArray(item) ? acc = acc.concat( flatternArray(item)) : acc.push(item);
//     return acc;
//   },[])
//   return flattern_array;
// }
//
// console.log(flatternArray([1,2,[4,5,1,[6,7,1],[2,3,6]]]));
//

// const findDuplicateElements = ( arr ) => arr.filter( (item, index) => arr.indexOf(item)!==index );
// console.log(findDuplicateElements([2,3,4,5,2,4,8,1]));

const person = {
  money: 200
}



function doShopping(){
  console.log(Math.sqrt(this.money))
}
 console.log(doShopping());


let getMOney = doShopping.call(person);

// const noRepeatingWords = (str1, str2) =>{
//   let newStr = str1 + " " + str2;
//   let array = newStr.split(' ');
//   const obj = {};
//   for(const element of array){
//     obj[element] ? obj[element]++ : obj[element] = 1;
//   }
//   for (const key in obj){
//     obj[key]%2===0 ? delete obj[key] : '';
//   }
//   return Object.keys(obj);
// }
//  console.log(noRepeatingWords('hello Adilet', 'hello World'));




// const value = {
//   penny:1,
//   nickel:5,
//   dime:10,
//   quater:25,
//   dollar:100
// }
// //20.47
// const money = (total) =>{
//   let dolRem = total*100 % value.dollar;
//   let dollar = (total * 100 - dolRem) / 100;//20
//   let quaterRem = dolRem % value.quater ;//0.17
//   let quater = (dolRem - quaterRem)/value.quater;//1
//   let dimeRem =
//
// }
// console.log();




// const groupAnagram = (arr) =>{
//   const obj = {}
//   for(let element of arr){
//     let key = element.split('').sort().join('');
//     obj[key] ? obj[key].push(element) : obj[key] = [element];
//   }
//   return Object.values(obj);
// }
// console.log(groupAnagram(["eat", "bat", "ate", "tab", "tea", "eat"]))
// function longestSubstringLength (str) {
//   const set = new Set()
//   let left = 0, right = 0, max = -Infinity;
//   while(right < str.length){
//     if(set.has(str[right])){
//       set.delete(str[left]);
//       left++;
//     }else{
//       set.add(str[right])
//       right++;
//       max = Math.max( max, set.size);
//     }
//   }
//   return str.substring(left,right+left);
// }
//
// console.log(longestSubstringLength('ABCABADEC'))





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
