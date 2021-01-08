import './styles.css';

const replaceWordWithPrefix = (prefixes,str) =>{
  const obj = prefixes.reduce( (obj, item) => {
    obj[item] = item;
    return obj;
  },{})
  const words = str.split(' ');
  for( let idx = 0; idx < words.length; idx++){
    for(let position = 0; position < words[idx].length; position++){
      let word = words[idx].substring(0,position);
      if(obj[word]){
        words[idx] = word;
        break;
      }
    }
  }
  return words.join(' ')

}
console.log(replaceWordWithPrefix(["cat", "catch", "Alabama"],"The cats were catching yarn"));
/*
 -split setence into array
 -convert prefixes into obj
 -iterate each element of array sentence and within nested loop iterate every single letter of word by slicing
 - look up obj jas the same value if it has replace that word with substring word
*/
// Inputs:
// prefixes = ["cat", "catch", "Alabama"]
// sentence = "The cats were catching yarn"
//
// Output: "The cat were cat yarn"

//const deepCopyOfarray = (value) => Array.isArray(value) ? Array.from(value, deepCopyOfarray) : value;
// const input = [
//   { type: 'dir', name: 'dom', contents:
//     [
//       { type: 'file', name: 'html.md'},
//       { type: 'file', name: 'header.md'},
//       { type: 'file', name: 'body.md'},
//       { type: 'file', name: 'script.md'},
//       { type: 'file', name: 'footer.md'},
//       { type: 'file', name: 'nav.md'},
//       { type: 'file', name: 'aside.md'}
//     ]
//
//   },
//   { type: 'dir', name: 'array_methods', contents:
//     [
//       { type: 'file', name: 'splice.md'},
//       { type: 'file', name: 'map.md'},
//       { type: 'file', name: 'forEach.md'},
//       { type: 'file', name: 'every.md'},
//       { type: 'file', name: 'reduce.md'},
//       { type: 'file', name: 'filter.md'}
//     ]
//
//   },
//   { type: 'file', name: 'text.md'},
//   { type: 'file', name: 'css.md'},
//   { type: 'file', name: 'js.md'},
//   { type: 'file', name: 'jsx.md'},
//   { type: 'file', name: 'sql.md'},
//   { type: 'file', name: 'xml.md'}
// ]
// const deepCopyOfObject = (arr) => {
//   const target = Array.isArray(arr) ? [] : {}
//   for( let key in arr){
//     const value = arr[key];
//     if(value!==null && typeof value ==='object'){
//       target[key] = deepCopyOfObject(value)
//     }else{
//       target[key] = value;
//     }
//
//   }
//   return target;
// }
//
// console.log(deepCopyOfObject(input));
// input[0].type = 'DOG'
//
// console.log(input);
// const flatternArray = (arr) =>{
//   return arr.reduce( (newArray,item) => Array.isArray(item) ? newArray.concat(flatternArray(item)) : newArray.concat(item),[])
// }
// console.log(flatternArray([1, [2], [3, [[4]]]]))
