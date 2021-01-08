const  groupAnagram = (array) =>{
  const obj = {};
  for( const word of array){
    let key = word.split('').sort().join('');
    //obj[key]  ? obj[key].push(word) : obj[key] = [word];
   obj[key] =  obj[key]  ? [...obj[key],word] : [word];
  }
  return Object.values(obj);
}

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagram(arr));
//Iterate each element
// split each word into array and sort
//join sorted array as a word
