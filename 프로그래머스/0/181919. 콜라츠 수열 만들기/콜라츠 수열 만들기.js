function solution(n) {
    let x = n;
    const result = [n];
    while(x!==1){
        if(x%2===0){
            x = parseInt(x/2);
            result.push(x);
        }else{
            x = parseInt(3 * x + 1);
            result.push(x);
        }
    }
    return result;
}