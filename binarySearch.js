function binarySearch(listF, number){
    let low = 0, high = listF.length - 1, cont = 0, mark = [];
  
    while(low <= high){
      let mid = Math.floor((low + high) / 2);
      let guess = list[mid];
      cont++;
      if(guess == number){
        mark.push(mid, cont);
        return(mark);
      }
      else if(guess > number)
        high = mid - 1;
      else
        low = mid + 1;
    }
    
    return(null);
  }
    
  let list = [2, 5, 36, 43, 27, 48].sort((a, b) =>{
    if(a > b) return(1);
    if(a < b) return(-1);
    return(0);
  }), number = 48;
  
  let results = binarySearch(list, number);
  alert(`In a list of ${list.length} numbers, the number ${number} is in position ${results[0]} \n\nThe algorithm needed ${results[1]} tries to get ir right`)