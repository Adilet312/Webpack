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


const input = [
  { type: 'dir', name: 'dom', contents:
    [
      { type: 'file', name: 'html.md'},
      { type: 'file', name: 'header.md'},
      { type: 'file', name: 'body.md'},
      { type: 'file', name: 'script.md'},
      { type: 'file', name: 'footer.md'},
      { type: 'file', name: 'nav.md'},
      { type: 'file', name: 'aside.md'}
    ]

  },
  { type: 'dir', name: 'array_methods', contents:
    [
      { type: 'file', name: 'splice.md'},
      { type: 'file', name: 'map.md'},
      { type: 'file', name: 'forEach.md'},
      { type: 'file', name: 'every.md'},
      { type: 'file', name: 'reduce.md'},
      { type: 'file', name: 'filter.md'}
    ]

  },
  { type: 'file', name: 'text.md'},
  { type: 'file', name: 'css.md'},
  { type: 'file', name: 'js.md'},
  { type: 'file', name: 'jsx.md'},
  { type: 'file', name: 'sql.md'},
  { type: 'file', name: 'xml.md'}
]
console.log(deepCopy(input));
