function solution(n, m) {
	const answer = []
    const a = [];
	const num = [n,m];
    num.sort((a,b)=>a-b);
    let b = num[0];
    let c = num[1];

    for(let i = 2; i <= b; i++ ){
        console.log(i,b)
    	if(b%i===0&&c%i===0){
            
        	a.push(i);
            b /= i;
            c /= i;
            i = 1;

        }
    }
    console.log(a)
    if(a.length===0) a.push(1);
    answer.push(a.reduce((acc,cur)=>acc*cur,1),a.reduce((acc,cur)=>acc*cur,1)*b*c);
    return answer;
}