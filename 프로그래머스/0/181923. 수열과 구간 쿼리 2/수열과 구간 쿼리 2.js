function solution(arr, queries) {
    let answer = [];
    queries.forEach(e=>{
        const stack = [];
        for(let i = e[0]; i <= e[1]; i++){
            arr[i]>e[2] && stack.push(arr[i]);
        };
        let picked = Math.min(...stack);
        if(stack.length === 0){
            picked = -1;
        };
        answer.push(picked);
    })
    return answer;
}