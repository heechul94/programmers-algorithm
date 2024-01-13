// 문자열 한 글자씩 비교해야한다.
// 한글자 앞에 같은 글자가 있으면 가장 가까운 인덱스의 차이를 구한다, 없으면 -1
function solution(s) {
    const answer = [-1];
    for(let i = 0; i < s.length; i++){
        for(let j = i-1; j > -1; j--){
            if(s[i]===s[j]){
                answer.push(i-j);
                break;
            }else if(j===0){
                answer.push(-1);
            }
        }
    }
    return answer;
}