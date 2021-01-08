
const copyNestedArray = (array) => Arrray.isArray(array) ? Array.from(array, copyNestedArray) : array;

const copy = copyNestedArray([1, [2], [3, [[4]]]]);
console.log(copy);
