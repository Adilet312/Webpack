const flatternNestedArray = (arr) => arr.reduce( (newArr, item) => Array.isArray(item) ? newArr.concat(flatternNestedArray(item)) : newArr.concat(item),[]);
 const copyFlattern = flatternNestedArray([1, [2], [3, [[4],[56,[12]]]]]);
 console.log(copyFlattern);
