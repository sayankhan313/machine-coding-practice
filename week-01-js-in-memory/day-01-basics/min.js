function max(arr){
    let  min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            max=arr[i]
        }
    }

return min
}

console.log(max([1,3,7,9]));
