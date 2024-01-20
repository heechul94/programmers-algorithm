function solution(number, limit, power) {
    let result = 0;
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(Math.sqrt(i)===j){
                count++;
            }else if(i%j===0){
                count+=2;
            };
        };
        if(count<=limit){
            result += count;
        }else{
            result += power;
        }
    }
    return result;
}
