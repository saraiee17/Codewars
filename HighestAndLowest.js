// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    // ...
    const result = []
    const array = numbers.split(" ")
    array.sort((a,b)=>a-b)
    result.push(array[array.length-1])
    result.push(" ")
    result.push(array[0])
    return result.join("")
  }
  
  //pseudocode
  //input string
  //ouput string... highest number space lowest number
  //split by space... sort... seperate array for storage ... push highest number.. push lowest number
  //join to string but join with space
  //return storage array