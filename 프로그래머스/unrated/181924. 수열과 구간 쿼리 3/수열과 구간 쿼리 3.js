function solution(arr, queries) {
    let answer = [];
    answer = arr;
    queries.map(e=>{
        [arr[e[0]],arr[e[1]]] = [arr[e[1]],arr[e[0]]]
    })
    return answer;
}