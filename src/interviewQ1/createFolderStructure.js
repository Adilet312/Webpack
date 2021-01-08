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
const deepCopy = (data) => {
  const target = Array.isArray(data) ? [] : {}
  for(const key in data){
    let value = data[key];
    if(typeof value ==='object' && value!==null){
      target[key] = deepCopy(value)

    }else{
      console.log("files: ",value);
      target[key] = value;
    }
  }
  return target;
}

console.log(deepCopy(input));
