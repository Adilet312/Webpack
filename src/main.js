import './styles.css';



function longestSubstringLength (str) {
  const set = new Set()
  let i = 0
  let j = 0
  let max = 0
  while (i < str.length) {
    if (!set.has(str.charAt(i))) {
      // If character not in set, add it to set and find new max length
      set.add(str.charAt(i++))
      max = Math.max(max, set.size)
    } else {
      debugger
      // If character in set, delete it so as to add the character at the
      // end to form a new word
      set.delete(str.charAt(j++))
    }
  }
  return max
}

console.log(longestSubstringLength('abcabcbd'))
