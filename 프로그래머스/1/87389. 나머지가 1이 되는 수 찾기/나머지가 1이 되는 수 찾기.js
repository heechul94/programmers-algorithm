function solution(n) {
    let answer = 0;
    let arr = []
    for (let i = 1; i < n; i++){
        if(n%i===1){
            arr.push(i);
        }    
    }
    answer = arr[0];
    return answer;
}