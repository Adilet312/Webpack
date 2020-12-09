const longestSubstringAtMostK = (str,k) =>{
  const obj = {};
  let left = 0;
  let right = 0;
  let maximum = 0;
  let numSubstring = 0;
    while(right < str.length){
      if(str[right] in obj){
        obj[str[right]]++;
      }
      else{
        obj[str[right]] = 1;
        numSubstring++;
      }


    while(numSubstring > k){
      obj[str[left]]--;
      if(obj[str[left]]===0){
        delete obj[str[left]];
        numSubstring--;
      }
      left++
    }
    maximum = Math.max(right - left +1, maximum);
    right++;
  }
  return maximum;
}





console.log(longestSubstringAtMostK("coffee", 2))
