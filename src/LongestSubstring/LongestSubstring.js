const longestSubstring = (str) => {
  const set = new Set();
  let maxSizeSub = 0;
  let right = 0;
  let left = 0
  while(right < str.length){
    if(!set.has(str[right])){

      set.add(str[right])
      maxSizeSub = Math.max(maxSizeSub, set.size);
      right++;
    }else{

      set.delete(str[left]);
      left++;

    }
  }
  return maxSizeSub;
}
console.log(longestSubstring('abcabbd') );
