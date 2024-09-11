function minMax(arr){
    let result =[];
    result.push(Math.min(...arr))
     result.push(Math.max(...arr))
    return result; // fix me!
  }
  
  
  //input array of integers
  //output array with 2 elements (min, max)
  //edge cases no empty array , no null, undefined