function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s,e,k]) => {
        for(let i = s; i <= e; i++){
            i%k === 0 && arr[i]++;
        };
    });
    return arr;
}