// 알파벳을 아스키코드 십진법으로 변환해 index만큼 증가한 십진법의 해당하는 알파벳으로 바꿔준다.
// 범위를 위해 "a" 와 "z"의 십진수를 변수로 할당해준다.
// 예외 처리를 위해 skip의 문자열도 하나하나 변환해준다.
// s의 알파벳 하나씩 index만큼 증가시키는데 skip의 해당하는 숫자가 있으면 index를 -1 해 횟수를 차감하지 않는다.
// 변환한 수를 다시 알파벳으로 바꾸어 문자열로 만들어준다.
function solution(s, skip, index) {
    const start = "a".charCodeAt();
    const end = "z".charCodeAt();
    const strArr = [...s].map(e=>e.charCodeAt());
    const skipCodeArr = [...skip].map(e=>e.charCodeAt());
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < index; j++){
            ++strArr[i];
            if(strArr[i]>end) strArr[i] = start;
            if(skipCodeArr.includes(strArr[i])) j--;
        };
    };
    const result = strArr.map(e=> String.fromCharCode(e)).join("");
    return result
}