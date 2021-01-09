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
