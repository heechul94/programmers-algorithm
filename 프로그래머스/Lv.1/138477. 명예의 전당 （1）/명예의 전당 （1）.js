// 매일 명예의 전당의 최하위 점수를 발표한다.
// 예 k=3 7일 동안 [10, 100, 20, 150, 1, 100, 200]

// 1일차 10 | 발표 최하위 점수 10
// 2일차 100 10 | 발표 최하위 점수 10
// 3일차 100 20 10 | " 10
//   .....
// 빈 배열에 score를 하나씩 넣어준다.
// 넣어줄때마다 가장 작은 요소를 찾아준다
// 배열의 길이가 3 초과되면 내림차순으로 정렬해 마지막 요소를 제거해주고 다시 길이가 3이 된 배열의 가장 작은 요소를 찾아준다.
// score의 길이 만큼 반복한다.
function solution(k, score) {
    const result = [];
    const temp = [];
    for(let i = 0; i < score.length; i++){
        temp.push(score[i]);
        temp.sort((a,b)=> b - a);
        if(i<k){
            result.push(Math.min(...temp));
        }else{
            temp.pop();
            result.push(Math.min(...temp));
        }
    }
    return result;
}