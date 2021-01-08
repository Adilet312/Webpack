const longestSubstring = (str) => {
  const set = new Set();
  let maxSizeSub = 0;
  let right = 0;
  let left = 0
  while(right < str.length){
    if(!set.has(str[right])){

      console.log("add letters: " +  str[right] + " index: "+right);
      set.add(str[right])
      console.log(" add set: ",set);
      maxSizeSub = Math.max(maxSizeSub, set.size);
      right++;
    }else{

      console.log("del letters: "+ str[left] + " index: "+left);
      set.delete(str[left]);
      console.log(" del set: ",set);
      left++;

    }
  }
  return maxSizeSub;
}
console.log(longestSubstring('abcabbd') );
