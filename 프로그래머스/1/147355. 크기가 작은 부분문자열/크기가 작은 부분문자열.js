function solution(t, p) {
    let answer = 0;
    const strArr = [];
    for (let i = 0; i <= t.length - p.length; i++){
        strArr.push(t.slice(i,p.length+i));
    };
    answer = strArr.filter(str => str<= p).length;
    return answer;
}

// 1. p의 문자열 개수를 알아야한다.
// 2. t의 0 index에서 (t.length - p.length)index 반복문으로 t[index]기준으로 p의 길이만큼 자른 부분문자열들을 구해 빈 배열에 넣어둔다..
// 3. 부분문자열이 들어있는 배열을 filter 로 각 item 들과 p를 비교해 원하는 값을 얻는다.