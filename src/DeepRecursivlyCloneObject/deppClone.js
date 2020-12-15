const deepCopy = (obj) =>{
  if(obj===null || typeof obj !== 'object'){
    return obj;
  }
  const cloneObject = Array.isArray(obj) ? [] : {};

  for(const key in obj){
    let value = obj[key];
    cloneObject[key] = deepCopy(value);
  }
  return cloneObject;
}


let obj = {
  a:{
    b:{
      c:{

      }
    }
  }
}
console.log(deepCopy(obj));
