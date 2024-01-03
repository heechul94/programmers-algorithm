function solution(num_list) {
    let answer = 0;
    let multi = 0;
    let square = 0;
    multi = num_list.reduce((acc,cur) => acc*cur);
    square = num_list.reduce((acc,cur) => acc+cur)**2;
    (multi<square) ? answer = 1 : answer = 0;
    return answer;
}