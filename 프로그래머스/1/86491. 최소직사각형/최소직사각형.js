function solution(sizes) {
    let answer = 0;
    const wArr = [];
    const hArr = [];
    sizes.forEach(([a,b])=>{
        let minNum = 0;
        wArr.push(Math.max(a,b));
        hArr.push(Math.min(a,b));
    });
    wArr.sort((a,b)=>b-a);
    hArr.sort((a,b)=>b-a);
    answer = wArr[0] * hArr[0]
    return answer;
}