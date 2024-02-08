function solution(k, tangerine) {
    let count = k;
    let result = 0;
    //tangerine의 종류를 카운트 한다.
    const size = {}
    tangerine.forEach(el => {
        if(!size[el]){
            size[el] = 1;
        }else{
            size[el]++;
        }
    });
    // 객체 size에서 개수가 많은 크기순으로 선택해준다.
    const temp = Object.entries(size).sort((a,b)=> b[1] - a[1])
    for(let i = 0; i < temp.length; i++){
        // 큰 종류의 개수를 k에서 빼준다
        // k가 0개가 될때 까지 빼준다.
        if(count>0){
            count -= temp[i][1];
            result++;
        };
        // k가 0개거나 밑으로 내려가면 반복문을 끝낸다.
        if(count<=0) break;   
    };
    return result;
}