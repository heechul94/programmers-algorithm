function solution(left, right) {
    let answer = 0;
    const arr = [...Array(right-left+1).keys()].map(elem=>elem+left);
    let arr2 = [];
    arr2 = arr.map(e=>{
        let count = 0;
        for(let i = 1; i <= e; i++){
            if(e%i===0) count++;
        }
        console.log(count)
         if(count%2===0) return +e;
        else return -e;
    })
    answer = arr2.reduce((acc,cur)=> acc + cur);
    return answer;
}