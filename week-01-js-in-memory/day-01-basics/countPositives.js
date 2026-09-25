function countPositives(arr){
    let count =0
     for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++
        }

     }
     return count
}
console.log(countPositives([1,2,-3,-4]));
