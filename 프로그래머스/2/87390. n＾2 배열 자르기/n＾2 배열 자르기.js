function solution(n, left, right) {
    const result = [];
    for(let i = left+1; i <= right+1; i++){
        const temp = parseInt(i/n);
        const remainder = i%n;
        if(i<=n)result.push(i)
        else if(remainder===0&&temp<=n){
            result.push(n);
        }else if(remainder<=temp+1){
            result.push(temp+1);
        }else{
            result.push(remainder);
        };
    }
    return result;
}