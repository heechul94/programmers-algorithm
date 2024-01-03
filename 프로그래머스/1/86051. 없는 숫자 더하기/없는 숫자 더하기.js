function solution(numbers) {
    let answer = -1;
    const arr = new Array(10).fill(0);
    const arr2 = [];
    arr.map((_,i)=>{ numbers.find(e=>e===i)||arr2.push(i) });
    answer = arr2.reduce((acc,cur)=>acc+cur);
    return answer;
}