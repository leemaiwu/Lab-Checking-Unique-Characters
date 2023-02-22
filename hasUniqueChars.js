// Given a word, return true if that word contains only unique characters. Return false otherwise. //
// Write your code below

// create a function
// loop through each letter of str
// we'll call each letter here curCharacter
    // then, inside of that loop
    // compare curCharacter to each letter of the string (besides iteself)
    // if we do a comparision, and they are equal
    // we have our funtion return false
// however, if we are done doing all of our loops
//then that means we never found a repeat
// so return true, it is unique

function hasUniqueCharacter(str) {
  for (let i = 0; i < str.length; i++) {
      let curCharacter = str[i]
      for (let k = 0; k < str.length; k++) {
        let compareCharacter = str[k]
        if (i !== k && compareCharacter === curCharacter) {
          return false
        }
      }
  }
  return true
}

let result1 = hasUniqueCharacter("Monday")
console.log(result1)

console.log(hasUniqueCharacter("Moonday"))


//// -------------Jared's Example Solution-------------- ////


/*
function hasUniqueCharacter(str) {
  let mySet = new Set(str)
  if (str.length === mySet.size) {
    return true
  } else return false
}

console.log(hasUniqueCharacter("Monday"))
console.log(hasUniqueCharacter("Moonday"))
*/