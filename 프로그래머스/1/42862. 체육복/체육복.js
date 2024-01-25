function solution(n, lost, reserve) {
    const arr1 = lost.filter(el => !reserve.includes(el)).sort((a,b)=>a-b);
    const arr2 = reserve.filter(el=>!lost.includes(el)).sort((a,b)=>a-b);
    
    if(arr1.length===0&&arr2.length===0) return n;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] - arr2[j] === -1 || arr1[i] - arr2[j] === 1){
               arr1.shift();
            };
        };
    };
    return n - arr1.length;
}