function solution(my_string, target) {
    let answer = 0;
    my_string.indexOf(target)<0 ? answer = 0 : answer = 1
    return answer;
}