function invert(array) {
    let result=[];
    
    if(array.length===0){
      return array;
    }
    for(let i =0; i< array.length;i++){
        result.push(array[i]*-1)
    }
     return result ;
  }
  
  
  //input array
  //ouput different array, not original
  //check each char and return additive inverse (positive vs negative)