const names = ['one','two','three']
const PrintAllNames = () =>{
  const obj = {}
  let index = 0;
  let count = 0;
  for(const item of names){
    if(count < 3){
      obj[index] = obj[index] ? obj[index].concat(item) : [item];
      count++;
    }else{
      count = 0;
      index++;
      obj[index] = obj[index] ? obj[index].concat(item) : [item];
    }
  }
let nestedNames = Object.values(obj);
let print = []
let idx = 0;
for(let outerIdx = 0; outerIdx < nestedNames.length; outerIdx++){
  print[idx] =`<ul class="block">`
  idx++;
  for(let innerIdx = 0; innerIdx < nestedNames[0].length; innerIdx++){
    print[idx]  = `<li>${nestedNames[outerIdx][innerIdx]}</li>`
    idx++;
  }
  print[idx] = `</ul>`
  idx++;
}

const ul = document.querySelector('.output');
ul.innerHTML = print.join('')
}
PrintAllNames()

/*
.output{
  width:900px;
  margin: 0 auto;
  height:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 2px dotted black;
  list-style: none;
}
.block{
  width:200px;
  height:300px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid black;
  list-style: none;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
}
html:
 <ul class='output'> </ul>
*/
