function countFrequencies(items) {

   
    let freq={}

    for (let i = 0; i <  items.length; i++) {
       if(freq[items[i]]){
        freq++
       }
       else freq[items[i]]= 1

    }
    return freq
}