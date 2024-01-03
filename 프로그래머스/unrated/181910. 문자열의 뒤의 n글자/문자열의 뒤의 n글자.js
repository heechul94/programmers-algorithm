function solution(my_string, n) {
    let answer = '';
    answer = [...my_string].splice(-n).join("");
    return answer;
}