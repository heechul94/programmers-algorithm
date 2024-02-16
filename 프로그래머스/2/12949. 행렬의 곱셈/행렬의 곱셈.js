function solution(arr1, arr2) {
    const result = arr1.map((el)=>{
        const item = [];
        for(let i = 0; i < arr2[0].length; i++){
            let temp = 0;
            for(let j = 0; j < arr2.length; j++){
               temp += arr2[j][i] * el[j];
            };
            item.push(temp);
        };
        return item;
    });
    return result;
}